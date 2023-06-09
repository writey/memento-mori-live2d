<template>
  <div id="app">
    <NuxtLayout v-if="loadDone">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'

const loadDone = ref(false)
const loadScript = () => {
  const script = document.createElement('script')
  script.src = '/live2dcubismcore.js'
  script.async = true
  script.defer = true
  document.head.appendChild(script)
  loadDone.value = true
}
onMounted(() => {
  loadScript()
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