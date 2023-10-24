<template>
  <div class="flex flex-col items-center">
    <img class="w-[66px]" alt="status icon" :src="check">
    <h1 class="text-[#222B35] text-[18px] md:text-[28px] text-center font-semibold mt-[12px]">
      All services are online
    </h1>
    <span class="text-[12px] md:text[14px] font-medium text-[#42476180]">As of June 1st, 1:46 PM ET</span>
  </div>
</template>

<script setup lang="ts">
import check from 'assets/icons/color/good.svg?url'
</script>

<style lang="scss" scoped>

</style>
