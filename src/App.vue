<script setup lang="ts">
import Hello from './components/Hello.vue'
</script>

<template>
  <Hello :name="'A,n'" :age="12">
    <template v-solt:header>
      <p slot="header">Hello World!</p>
    </template>
  </Hello>
</template>

<style>

</style>
