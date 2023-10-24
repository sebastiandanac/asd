<template>
  <header class="flex w-screen justify-center ">
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
  </header>
</template>

<script setup lang="ts">
import logo from '~/assets/logo.svg?url'
</script>

<style lang="scss" scoped>

</style>
