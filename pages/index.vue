<template>
  <div class="container px-[16px] flex flex-col max-w-[832px] mx-auto py-[60px] md:py-[100px] justify-center items-center">
    <Status />

    <Table ref="table" class="opacity-0" />

    <PageFooter ref="footer" class="opacity-0" />
  </div>
</template>

<script setup lang="ts">
import type { DefineComponent } from 'vue'
import { gsap } from 'gsap'
import Status from '~/components/Status.vue'
import Table from '~/components/table/Table.vue'
import PageFooter from '~/components/PageFooter.vue'

const table = ref<DefineComponent>()
const footer = ref<DefineComponent>()

const animate = () => {
  const tl = gsap.timeline({ delay: 0.6 })

  if (table?.value) {
    tl.fromTo(table.value.$el, { translateY: 50, opacity: 0 },
      { translateY: 0, opacity: 1, duration: 0.5 }
    )
  }

  if (footer?.value) {
    tl.fromTo(footer.value.$el, { translateY: 30, opacity: 0 },
      { translateY: 0, opacity: 1, duration: 0.2 }
    )
  }
}

onMounted(() => animate())
</script>

<style lang="scss" scoped>

</style>
