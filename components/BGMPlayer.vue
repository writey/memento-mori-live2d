<template>
  <span :class="{'disabled': !isPlay}" class="absolute z-10 w-4 h-4 cursor-pointer music right-5 bottom-5">
    <MusicNoteIcon @click="changeIsPlay" class="" />
  </span>
</template>
<script setup>
import { MusicNoteIcon } from '@heroicons/vue/outline'
import { ref, onMounted } from 'vue'
const { params: { id } } = useRoute()
const isPlay = ref(false)
let bgm
const play = () => {
  if (!bgm) bgm = new Audio(`/resources/CharacterSong/${id}/${id}_SONG_JP.ogg`)
  if (!isPlay.value) bgm.pause()
  else bgm.play()
}
const changeIsPlay = () => {
  isPlay.value = !isPlay.value
  localStorage.setItem('isPlay', isPlay.value)
  play()
}
onMounted(() => {
  isPlay.value = localStorage.getItem('isPlay') === 'true' || false
  if(isPlay.value) play()
})
</script>
<style>
.music::after {
  width: 0;
  height: 3px;
  content: '';
  display: block;
  position: absolute;
  top: 50%;
  background-color: #666;
  transform: translateY(-50%) rotateZ(-35deg) rotateY(180deg);
  transition: all .5s ease;
}
.disabled::after {
  width: 125%;
}
</style>