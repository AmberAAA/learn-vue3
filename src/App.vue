<script setup lang="ts">
import CompoisitionApiVue from './components/compoisition-api.vue';

const handleSay = (msg: string) => console.log(msg)

</script>

<template>
<CompoisitionApiVue :name="'age'" :age="1228" motto="Hello World" @say="handleSay" />
</template>
