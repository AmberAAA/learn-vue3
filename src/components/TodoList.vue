<script lang="ts" setup>
import { TodoService, Todo } from '../services/TodoService';
interface Props {
  list: Todo[]
}

const emit = defineEmits<{
  (e: 'delete', todo: Todo) : void,
}>()

const props = defineProps<Props>()
</script>

<template>
  <div v-for="item of list" @click="emit('delete', item)">{{item.title}}</div>
</template>