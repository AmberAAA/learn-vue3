<script lang="ts" setup>
import { reactive, ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';
const count = ref<number>(0);

const book = reactive({})


//@ts-ignore
window.book = book


function addCount () {
  count.value++
}

interface Props {
  name: string,
  age: number,
  motto?: string
}


const emits = defineEmits<{
  (event: 'say', motto: string): void,
}>()

const props = withDefaults(defineProps<Props>(), {
  name: 'Amber',
  age: 18
})

onMounted(() => {
  console.log(`Hello World!`)
})

const say = () => {
  if (props.motto) {
    emits("say", `Hello, I'm ${props.name}, ${props.age} years old`)
  }
}



</script>

<template>
  <h1>name: {{ props.name }}</h1>
  <h3>age: {{ props.age }}</h3>
  <button v-if="props.motto" @click="say"> say </button>
  <hr>
  <h2>Hit Count: {{count}}</h2>
  <button @click="addCount">喜加一</button>
  <hr>
  {{JSON.stringify(book)}}
</template>


