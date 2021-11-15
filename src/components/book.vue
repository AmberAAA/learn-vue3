<script lang="ts" setup>import { reactive } from '@vue/reactivity';
import { ref } from 'vue';

interface Book {
  name: string,
  type?: string[]
}

const reactBook = reactive<Book>({name: '海底两万里'});

const refBook = ref<Book>({name: '红楼梦'})

// @ts-ignore
window.reactBook = reactBook;
// @ts-ignore
window.refBook = refBook;

</script>

<template>
<div>
  <div>
    <h3>reactBook</h3>
    <p>name: {{ reactBook.name }}</p>
    <ol v-if="reactBook.type">
      <li v-for="(item, index) in reactBook.type" :key="index">{{item}}</li>
    </ol>
  </div>
  <hr>
  <div>
    <h3>refBook</h3>
    <p>name: {{ refBook.name }}</p>
    <ol v-if="refBook.type">
      <li v-for="(item, index) in refBook.type" :key="index">{{item}}</li>
    </ol>
  </div>
</div>
</template>
