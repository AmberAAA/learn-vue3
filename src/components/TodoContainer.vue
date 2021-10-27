<script setup lang="ts">
import TodoListVue from './TodoList.vue';
import { Todo, TodoService, ActionName } from '../services/TodoService'
import { reactive } from 'vue';
import TodoInput from './TodoInput.vue';

const servers = new TodoService()


let list = reactive<{todo: Todo[]}>({
  todo: []
})

// @ts-ignore
window.servers = servers

servers.subscribeTodo((todos) => {
  list.todo = todos
})

function addTodo (title: string) {
  servers.action(ActionName.ADD, { title, stats: false, deleted: false })
}

function deleteTodo (todo: Todo) {
  servers.action(ActionName.DELETE, todo)
}


</script>

<template>
  <div>
    <h3>ToDo List</h3>
    <TodoInput @save="addTodo" />
    <TodoListVue :list="list.todo" @delete="deleteTodo" />
  </div>
</template>

