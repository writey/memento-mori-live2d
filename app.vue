<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { onBeforeMount } from 'vue'
const router = useRouter()
const { path } = useRoute()
onBeforeMount(() => {
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body, #__nuxt, #app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>