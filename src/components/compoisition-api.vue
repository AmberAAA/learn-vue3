<script lang="ts" setup>
import { computed, reactive, ref } from '@vue/reactivity'
import { onMounted, defineProps } from '@vue/runtime-core';
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

const isAdult = computed<boolean>(() =>  props.age >= 18)


const emits = defineEmits<{
  (event: 'say', motto: string): void,
  (event: 'emit-age', age: number): void,
}>()

type MessageType = "string" | "image" | "audio";
type Message = {
id: number;
type: MessageType;
content: string;
};

function myemit(s1: "say", motto: string) : void;
function myemit(s1: "emit-age", age: number) : void;
function myemit (x: any, y?: any) : void {
  // TODO: to somethine
}



/**
 * 组件的Props参数
 */
const props = defineProps<Props>()


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


