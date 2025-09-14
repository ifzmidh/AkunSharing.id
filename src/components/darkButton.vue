<template>
  <Button
    :icon="isDark ? 'pi pi-moon' : 'pi pi-sun'"
    @click="toogleDark()"
    :class="
      float
        ? 'fixed bottom-10 right-10 md:bottom-15 md:right-20 xl:bottom-15 xl:right-34 z-10 transition-all duration-300'
        : ''
    "
    class="px-3 py-2 rounded-xl border cursor-pointer dark:border-white dark:hover:bg-white/20 hover:bg-black/10"
    pt:label:class="hidden"
    unstyled />
</template>
<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { defineProps } from "vue";

const isDark = useDark({ valueDark: "my-app-dark dark", valueLight: "light" });
const toogleDark = useToggle(isDark);

defineProps({
  float: {
    type: Boolean,
    default: true,
  },
});
</script>
