<template>
  <div class="p-[16px] md:p-[20px] flex flex-col gap-[12px] bg-white">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <component :is="icon" class="icon" />
        <span class="text-[#424761] ml-[8px] text-[15px] font-semibold">{{ data.title }}</span>
        <Info class="w-[16px] ml-[4px]" />
      </div>

      <span class="text-[#424761] font-medium text-[14px]">{{ data.uptime }} uptime</span>
    </div>

    <img class="max-md:hidden" src="assets/bars/warning-bars.svg" alt="bars">
    <img class="md:hidden" src="assets/bars/warning-bars-mobile.svg" alt="bars">
  </div>
</template>

<script setup lang="ts">
import Info from '~/assets/info.svg'

export type RowType = {
  title: string
  type: 'good' | 'warning' | 'danger'
  uptime: string
}

const props = defineProps<{ data: RowType }>()

const icon = defineAsyncComponent(() => import(`~/assets/icons/color/${props.data.type}.svg?component`))

</script>

<style lang="scss" scoped>

</style>
