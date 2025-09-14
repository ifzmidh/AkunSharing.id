<template>
  <nav
    :class="
      y > 30
        ? 'bg-black text-white dark:bg-black py-5 shadow-lg shadow-black/20 dark:border-b dark:border-b-white/50'
        : 'py-10'
    "
    class="sm:px-16 xl:px-28 px-8 flex w-full flex-row justify-between items-center z-[99] fixed transition-all duration-300">
    <RouterLink to="/"
      ><h2 class="lg:text-3xl text-xl font-bold dark:text-white">
        akunSharing.id
      </h2></RouterLink
    >
    <div class="hidden md:visible md:flex items-center lg:gap-x-12 gap-x-5">
      <RouterLink
        v-for="(page, index) in pages"
        :key="index"
        to="/"
        class="lg:text-lg text-sm font-medium hover:text-lime-600 hover:underline hover:underline-offset-4 dark:hover:text-lime-300 dark:text-white dark:hover:underline dark:hover:underline-offset-4"
        ><p>{{ page.name }}</p></RouterLink
      >
      <div class="h-10 flex items-center gap-x-2">
        <RouterLink
          to="/"
          :class="y > 30 ? 'border-white' : 'border-black'"
          class="h-full flex items-center border rounded-xl hover:bg-lime-800 hover:text-white dark:text-white dark:border-white dark:hover:bg-lime-300 dark:hover:text-black">
          <p class="lg:text-lg text-sm md:px-6 px-3">Hubungi</p>
        </RouterLink>
        <DarkButton :float="false" />
      </div>
    </div>
    <div class="relative md:hidden flex items-center justify-between gap-x-2">
      <DarkButton :float="false" />
      <!-- Hamburger Button -->
      <button @click="isOpen = !isOpen" class="flex flex-col space-y-1 p-2">
        <span
          class="w-8 h-1 bg-black transition dark:bg-white rounded"
          :class="{ 'rotate-45 translate-y-2': isOpen }"></span>
        <span
          class="w-8 h-1 bg-black transition dark:bg-white rounded"
          :class="{ 'opacity-0': isOpen }"></span>
        <span
          class="w-8 h-1 bg-black transition dark:bg-white rounded"
          :class="{ '-rotate-45 -translate-y-2': isOpen }"></span>
      </button>
      <!-- Menu -->
      <div
        :class="isOpen ? 'left-2' : 'left-100'"
        class="absolute top-14 w-fit bg-white dark:bg-transparent dark:backdrop-blur-sm dark:border dark:rounded-xl shadow-md transition-all duration-300 ease-in-out">
        <RouterLink
          to="/"
          class="block p-2 hover:bg-gray-100 dark:hover:bg-lime-300 dark:hover:text-black rounded-xl"
          >Home</RouterLink
        >
        <RouterLink
          to="/"
          class="block p-2 hover:bg-gray-100 dark:hover:bg-lime-300 dark:hover:text-black rounded-xl"
          >About</RouterLink
        >
        <RouterLink
          to="/"
          class="block p-2 hover:bg-gray-100 dark:hover:bg-lime-300 dark:hover:text-black rounded-xl"
          >Services</RouterLink
        >
        <RouterLink
          to="/"
          class="block p-2 hover:bg-gray-100 dark:hover:bg-lime-300 dark:hover:text-black rounded-xl"
          >Contact</RouterLink
        >
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useWindowScroll } from "@vueuse/core";
const { y } = useWindowScroll();
import DarkButton from "./darkButton.vue";
const isOpen = ref(false);

let pages = [
  {
    name: "Home",
    link: "",
  },
  {
    name: "Product",
    link: "",
  },
  {
    name: "Cara Pesan",
    link: "",
  },
];
</script>
