<template>
  <div style="max-height: 66.6%" :style="{'left': isHidden ? '0': '15px'}" :class="{'-translate-x-full': isHidden}" class="absolute z-10 flex pr-1 transition-transform duration-200 -translate-y-1/2 position top-1/2 w-14 sm:w-auto">
    <div class="flex flex-col items-center w-full py-2 pr-3 overflow-x-visible overflow-y-auto icons">
      <Icon :id="item" class="outline-none" :class="{'drop-shadow-[6px_6px_4px_rgba(0,0,0,0.5)]': item == id }" v-for="item in chrIds" :key="item" :chrId="item" />
    </div>
    <ChevronDoubleLeftIcon @click="onChangeHidden" :class="{'translate: rotate-180': isHidden}" class="absolute right-0 w-4 h-4 transition-transform duration-200 translate-x-full cursor-pointer top-1/2" />
  </div>
</template>
<script setup>
import { onMounted, ref, nextTick } from 'vue'
import { ChevronDoubleLeftIcon } from '@heroicons/vue/outline'

const { params: { id }, path } = useRoute()
const { push } = useRouter()
const chrIds = ref([])
const isHidden = ref(true)
const onChangeHidden = () => {
  isHidden.value = !isHidden.value
  localStorage?.setItem('isHidden', isHidden.value)
}
onMounted(() => {
  isHidden.value = localStorage?.getItem('isHidden') === 'true' || false
  fetch('/resources/icons.txt')
    .then(res => res.text())
    .then(res => {
      chrIds.value = res.split('\n').map(i => i.trim())
      if(path !== '/') nextTick(() => setTimeout(() => location.href = `#${id}`, 100))
      else push(chrIds.value[0])
    })
})
</script>
<style>
html {
  scroll-behavior: smooth;
}
.icons::-webkit-scrollbar {
  width: 6px;
}
.icons::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 4px;
}
.icons::-webkit-scrollbar-thumb {
  background-color: rgb(247 233 212);
  border-radius: 4px;
}
</style>