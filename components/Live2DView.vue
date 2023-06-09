<template lang="">
  <div id="canvas" class="relative w-full h-full view" ref="viewRef">
    <div class="absolute w-full h-full -z-50 bg-no-repeat bg-cover
     bg-[url('/resources/Background_Default.png')]">
    </div>
    <div class="absolute flex flex-col items-center w-full h-full">
      <div :class="{'max-h-full': isShowAll}" style="transition: all .5s ease"
        class="flex flex-wrap items-center justify-start max-w-sm mt-3 overflow-hidden transition-all duration-200 ease-in position max-h-16 motions">
        <div class="p-1 m-2 my-3 transition-shadow duration-200 ease-in bg-white border-2 rounded-md shadow cursor-pointer shadow-neutral-500/50 border-neutral-500"
          :class="item === curMotion ? 'shadow-lg': ''"
          @click="onMotionClick(item)" v-for="item in motions" ::key="item">{{ item }}
        </div>
      </div>
      <ChevronDoubleDownIcon v-show="motions.length" @click="() => isShowAll = !isShowAll" class="w-4 h-4 transition-transform duration-200 cursor-pointer" :class="{'translate: rotate-180' : isShowAll}" />
    </div>
  </div>
</template>
<script setup>
import { ChevronDoubleDownIcon } from '@heroicons/vue/outline'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { init, startMotion, destroy } from './live2dView/main'
import * as LAppDefine from './live2dView/lappdefine'

const viewRef = ref()
const motions = ref([])
const curMotion = ref('Idle_Action')
const isShowAll = ref(false)
const { id } = defineProps(['id'])
const onMotionClick = motion => {
  curMotion.value = motion
  startMotion(motion)
  playAudio()
}
const onGetMotions = (val) => motions.value = val

onMounted(() => {
  init(viewRef.value, id, onGetMotions, onMotionClick)
})

onBeforeUnmount(destroy)
</script>