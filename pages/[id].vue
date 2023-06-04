<template>
  <Live2DView :key="route.params.id" :id="route.params.id"/>
</template>
<script setup>
const route = useRoute()
</script>
<style>
</style>