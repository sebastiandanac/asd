<template>
  <div class="table w-full mt-[40px] rounded-[8px] overflow-hidden ">
    <TableHeader />

    <div class="flex flex-col gap-[2px]">
      <Row v-for="(item,i) in rows" :key="i" :data="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TableHeader from '~/components/table/TableHeader.vue'
import Row, { type RowType } from '~/components/table/Row.vue'

const rows: RowType[] = [
  {
    title: 'API',
    type: 'good',
    uptime: '100.000%'
  },
  {
    title: 'Dashboard',
    type: 'warning',
    uptime: '99.987%'
  },
  {
    title: 'Landing Page',
    type: 'danger',
    uptime: '99.706%'
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
