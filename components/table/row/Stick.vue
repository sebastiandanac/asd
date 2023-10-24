<template>
  <div class="h-[40px] w-full rounded stick" :class="'is--' + props.status" />
</template>

<script setup lang="ts">
import { type Status } from '~/components/table/Row.vue'

const props = defineProps<{
  status: Status
}>()
</script>

<style lang="scss" scoped>
.stick {
  &.is-- {
    &good {
      background-color: #21B062;
    }
    &warning {
      background-color: #FFB72B;
    }
    &danger {
      background-color: #DE3618;
    }
  }
}
</style>
