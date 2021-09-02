<script lang="ts" setup>
import { inject, watchEffect } from "@vue/runtime-core";

const name = inject("name")

const updateName = inject("updateName")

watchEffect((e) => {
    console.log(e)
})

</script>

<template>
    <div>name: {{name}}</div>
    <button @click="updateName('AmberAAA')">SET NAME TO AmberAAA</button>
</template>