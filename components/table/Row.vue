<template>
  <div class="p-[16px] md:p-[20px] flex flex-col gap-[12px] bg-white">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <img :src="icon" alt="">
        <span class="text-[#424761] ml-[8px] text-[15px] font-semibold">{{ data.title }}</span>
        <Info class="w-[16px] ml-[4px]" />
      </div>

      <span class="text-[#424761] font-medium text-[14px]">{{ data.uptime }} uptime</span>
    </div>

    <div class="flex gap-[3px] justify-between">
      <Stick v-for="(item, i) in data.data" :key="i" :status="item.status" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Info from '~/assets/info.svg'
import Stick from '~/components/table/row/Stick.vue'

import good from '~/assets/icons/color/good.svg?url'
import warning from '~/assets/icons/color/warning.svg?url'
import danger from '~/assets/icons/color/danger.svg?url'

export type Status = 'good' | 'warning' | 'danger'

export type RowType = {
  title: string
  type: Status
  uptime: string
  data: {status: Status}[]
}

const props = defineProps<{ data: RowType }>()

const icon = computed(() => {
  switch (props.data.type) {
    case 'good': return good
    case 'warning': return warning
    case 'danger': return danger
  }
})

</script>

<style lang="scss" scoped>

</style>
