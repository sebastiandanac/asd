<template>
  <div ref="header" class="flex w-screen justify-center opacity-0">
    <div class="container px-[16px] flex justify-between max-w-[832px] max-auto mt-[25px]">
      <div class="flex gap-[8px] md:gap-[16px] items-center">
        <a href="/" class="transition-opacity hover:opacity-75">
          <img class="max-md:w-[90px]" alt="logo" :src="logo">
        </a>

        <div class="w-[1px] h-[24px] bg-[#c0c2d44d]" />

        <a href="/" class="text-[12px] transition-opacity hover:opacity-75 md:text-[14px] font-medium text-[#424761]">Status </a>
      </div>

      <button type="button" class="text-white transition-opacity hover:opacity-75 bg-[#5F59F7] text-[12px] md:text-[14px] py-[6px] md:py-[9px] px-[12px] md:px-[20px] rounded-[4px]">
        E-mail helpdesk
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import logo from '~/assets/logo.svg?url'

const header = ref<HTMLElement>()

const animate = () => {
  if (header.value) {
    gsap.fromTo(header.value, { opacity: 0 },
      { opacity: 1, duration: 0.5 })
  }
}

onMounted(() => animate())

animate()
</script>

<style lang="scss" scoped>

</style>
