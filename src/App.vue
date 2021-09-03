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

<router-view></router-view>

</template>

<style>

</style>
