<script setup lang="ts">
import { ref, computed, Ref, watch, onMounted, useAttrs } from "vue"

interface Props {
    name: string // 注意 string 与 String 的区别
    age?: number  // 注意 Number 与 number 的区别
}

interface Emits {
    (e: 'change', id: number | ''): void
    (e: 'update', value: string): void
}

const props = withDefaults(defineProps<Props>(), {
    name: 'Amber',
    age: 12
})


const emit = defineEmits<Emits>();

const attrs = useAttrs()

interface People {
    name: string,
    age: number | string,
}

let people: Ref<People> = ref({
    name: "",
    age: 12,
})

let name1 =  computed({
    get: () => people.value.name,
    set: (value) => people.value.name = value,
    
})

let count = ref(0)

const plusOne = computed({
  get: () => count.value + 1,
  set: val => {
      emit('change', val)
      count.value = val - 1
  }
}, {
    onTrack: (event) => console.log('onTrack',event),
    onTrigger: (event) => console.log('onTrigger', event)
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

    <p> props: name {{props.name}} </p> 
    <p> props: age {{props.age}}</p>

    <hr>

    <input type="number" name="number" v-model="plusOne">
    <p> count: {{count}} </p>
    <p> plusOne: {{plusOne}} </p>
    <div>   
        <slot name="header" ></slot>
    </div>

</template>

