<template>
  <div class="container px-[16px] flex flex-col max-w-[832px] mx-auto py-[60px] md:py-[100px] justify-center items-center">
    <Status />

    <Table />

    <PageFooter />
  </div>
</template>

<script setup lang="ts">
import Table from '~/components/table/Table.vue'
import PageFooter from '~/components/PageFooter.vue'
</script>

<style lang="scss" scoped>

</style>
