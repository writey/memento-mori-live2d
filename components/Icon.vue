<template>
  <nuxt-link :to="`/${chrId}`">
    <img class="my-2 cursor-pointer" @click="onClick" :src="path" />
  </nuxt-link>
</template>
<script setup>
const { chrId } = defineProps(['chrId'])
const path = `/resources/CharacterIcon/${chrId}/${chrId}_00_s.png`

</script>
<style>
</style>