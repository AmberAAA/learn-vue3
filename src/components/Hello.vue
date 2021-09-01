<script setup lang="ts">
import { ref, computed, Ref, watch, onMounted, defineProps } from "vue"

const pop = defineProps({
    name: String,
    age: Number
})

interface People {
    name: string,
    age: number | string,
}

let people: Ref<People> = ref({
    name: "",
    age: 12,
})

watch(people, (newValue, oldValue) => {
    console.log(newValue, oldValue)
}, { deep: true })

onMounted(() => console.log("On Mounted1"))

onMounted(() => console.log())


let type = computed(() => typeof people.value.age )

</script>

<template>
    <input type="text" v-model="people.name" />
    <input type="number" v-model="people.age" /> 
    <p>name: {{people.name}}</p>
    <p>age: {{people.age}}</p>
    <p>ageTyle: {{type}}</p>

    <hr>

    <p> props: name {{pop.name}} </p> 
    <p> props: age {{pop.age}}</p>

    <div>   
        <slot name="header" ></slot>
    </div>

</template>

