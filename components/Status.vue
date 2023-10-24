<template>
  <div class="flex flex-col items-center">
    <img ref="image" class="w-[66px] opacity-0" alt="status icon" :src="check">
    <h1 ref="title" class="text-[#222B35] text-[18px] md:text-[28px] text-center font-semibold mt-[12px] opacity-0">
      All services are online
    </h1>
    <span ref="text" class="text-[12px] md:text[14px] font-medium text-[#42476180] opacity-0">As of June 1st, 1:46 PM ET</span>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import check from 'assets/icons/color/good.svg?url'

const image = ref<HTMLImageElement>()
const title = ref<HTMLHeadingElement>()
const text = ref<HTMLElement>()

const animate = () => {
  const tl = gsap.timeline({})

  if (image?.value) {
    tl.fromTo(image.value, { translateY: 20, opacity: 0 },
      { translateY: 0, opacity: 1, duration: 0.3 }
    )
  }

  if (title?.value) {
    tl.fromTo(title.value, { translateY: 20, opacity: 0 },
      { translateY: 0, opacity: 1, duration: 0.3 }
    )
  }

  if (text?.value) {
    tl.fromTo(text.value, { translateY: 20, opacity: 0 },
      { translateY: 0, opacity: 1, duration: 0.3 }
    )
  }
}

onMounted(() => animate())
</script>

<style lang="scss" scoped>

</style>
