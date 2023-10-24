<template>
  <div class="mx-auto mt-[32px] w-full flex justify-between items-center">
    <span class="text-[#424761] text-[12px] font-medium">@ 2020 wallmine</span>

    <div class="flex items-center gap-[8px]">
      <span class="text-[#424761] text-[12px] font-medium">Powered by</span>
      <a href="/" class="transition-opacity hover:opacity-75">
        <img alt="logo uptime" :src="logo">
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from 'assets/logo-uptime.svg?url'
</script>

<style lang="scss" scoped>

</style>
