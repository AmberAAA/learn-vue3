<script lang="ts" setup>
import ModelChild from './Model-Child.vue'

interface Props {
  name: string
}

interface Emit {
    (e: 'update:name', name:string) : void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()


interface HTMLInputEvent extends Event {
    target: HTMLInputElement
}

const handleInput = function (e: HTMLInputEvent ) {
    emit("update:name", e.target.value)
}
</script>

<template>
    <h3>Model</h3>
    <div>
        name: {{name}}
        <input type="text" :value="props.name" @input="handleInput"> 
    </div>
    <hr>
    <h3>Model Child</h3>
    <ModelChild />
</template>
