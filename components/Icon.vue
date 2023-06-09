<template>
    <img class="my-2 cursor-pointer" @click="onClick" :src="path" />
</template>
<script setup>
import { changeModel } from './live2dView/main'
const { chrId } = defineProps(['chrId'])
const path = `/resources/CharacterIcon/${chrId}/${chrId}_00_s.png`
const onClick = () => changeModel(chrId)
</script>
<style>
</style>