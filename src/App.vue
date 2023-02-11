<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->

<!-- <script setup>
import { computed, reactive, ref } from 'vue';

// const name = ref('Jon')
const data = reactive({
  name: 'Jon'
})
console.log(data)

const greetings = computed(() => {
  console.log(data.name)
  if (!data.name.length) {
    return 'Who are you?'
  }
  return `Hello ${data.name}`
})
</script>

<template>
  <input type="text" v-model="data.name" />
  <h1>{{ greetings }}</h1>
</template> -->

<script setup>
import AvailableBalance from './components/AvailableBalance.vue'
import ServiceButton from './components/ServiceButton.vue'
</script>

<template>
  <div>
    <AvailableBalance />
    <div>
      <ServiceButton icon="💰">Send</ServiceButton>
      <ServiceButton icon="👓">Load</ServiceButton>
      <ServiceButton icon="✅">Transfer</ServiceButton>
      <ServiceButton icon="💲">Bills</ServiceButton>
    </div>
  </div>
</template>