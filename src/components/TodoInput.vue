<script setup lang="ts">
import { ref } from '@vue/reactivity';

const value = ref("")

const emits = defineEmits<{
  (e: "save", title: string): void
}>()

function handleSave () {
  emits("save", value.value)
  value.value = ""
}

</script>

<template>
  <div>
    {{value}}
    <input type="text" v-model="value" @keyup.enter="handleSave" placeholder="请输入新的待办">
  </div>
</template>


