<script setup lang="ts">
import { computed, readonly, ref } from '@vue/reactivity';
import { provide } from '@vue/runtime-core';
import { mapState, useStore } from 'vuex';
import Hello from './components/Hello.vue'
import Model from "./components/Model.vue";
import { Mutations } from './store';

const update = (value: any) => console.log(value)

const name = ref("Amber")

provide("name", readonly(name))
provide("updateName", (n: string) => name.value = n)

const store = useStore()

function plusOne () {
  store.commit(Mutations.INCREMENT, 2)
}

</script>

<template>
  count: {{store.state.count}}
  <Hello data-se="123" :name="'A,n'" :age="12" @change="update">
    <template v-slot:header>
      <p >Hello World!</p>
    </template>
  </Hello>
  <hr>
  <p>APP-NAME: {{name}}</p>
  <Model v-model:name="name" />
  <button @click="plusOne">喜加一</button>
</template>

<style>

</style>
