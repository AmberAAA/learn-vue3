<script setup lang="ts">
import { computed, readonly, ref } from '@vue/reactivity';
import { provide } from '@vue/runtime-core';
import { mapState } from 'vuex';
import Hello from './components/Hello.vue'
import Model from "./components/Model.vue";
import { Mutations, useStore } from './store';

const update = (value: any) => console.log(value)

const name = ref("Amber")

provide("name", readonly(name))
provide("updateName", (n: string) => name.value = n)

const store = useStore()

console.log(store.state.user.userInfo)

function plusOne () {
  store.commit(Mutations.INCREMENT, 2)
}

function login () {
  
}

function logout () {

}

</script>

<template>

ap:  {{ store.state.user.userInfo?.name }}

<button @click="login">LOGIN</button>
<button @click="logout">LOGOUT</button>

<router-view></router-view>

</template>

<style>

</style>
