<template>
  <div class="table w-full mt-[40px] rounded-[8px] overflow-hidden ">
    <TableHeader />

    <div class="flex flex-col max-sm:gap-[1px] gap-[2px]">
      <Row v-for="(item,i) in rows" :key="i" :data="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TableHeader from '~/components/table/TableHeader.vue'
import Row, { type RowType } from '~/components/table/Row.vue'

import good from '~/data/good.json'
import good50 from '~/data/good-50.json'
import danger from '~/data/danger.json'
import danger50 from '~/data/danger-50.json'
import warning from '~/data/warning.json'
import warning50 from '~/data/warning-50.json'

const { isMobile } = useDevice()

const rows: RowType[] = [
  {
    title: 'API',
    type: 'good',
    uptime: '100.000%',
    data: isMobile ? good50 : good
  },
  {
    title: 'Dashboard',
    type: 'warning',
    uptime: '99.987%',
    data: isMobile ? danger50 : warning
  },
  {
    title: 'Landing Page',
    type: 'danger',
    uptime: '99.706%',
    data: isMobile ? warning50 : danger
  }
]
</script>

<style lang="scss" scoped>
.table {
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(63, 63, 68, 0.15), 0 20px 30px 0 rgba(63, 63, 68, 0.07);
  background: linear-gradient(0deg, #FAFAFC 0%, #FAFAFC 100%), #FFF;
}
</style>
