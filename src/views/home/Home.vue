<script setup lang="ts">
import Navbar from "../../components/Navbar.vue";
import Logos from "./Logos.vue";
import Products from "./Products.vue";
import Footer from "../../components/Footer.vue";
</script>

<template>
  <Navbar />
  <div class="lg:h-screen lg:pt-22 pt-30 flex flex-col justify-between">
    <div
      class="sm:px-16 xl:px-28 px-8 flex items-center h-full lg:gap-x-10 gap-x-5">
      <div class="md:w-[60%]">
        <h2
          class="mt-10 md:mt-0 xl:text-6xl xl:leading-18 lg:text-5xl lg:leading-16 sm:leading-13 sm:text-5xl text-4xl text-balance md:text-start text-center font-black dark:text-lime-300 text-lime-800 capitalize">
          Ayo percayakan akun premium anda pada kami
        </h2>
        <p
          class="mt-10 lg:text-xl text-sm md:text-start text-center text-balance text-black font-medium dark:text-white">
          akunSharing.id menawarkan beberapa akun premium seperti akun sharing,
          hingga private, tersedia untuk multi user seperti tv, hp, laptop,
          dengan jaminan garansi dan layanan 24/7 jam. Ayo pesan sekarang!
        </p>
        <RouterLink to="/auth"
          ><p
            class="mt-8 w-full flex justify-center md:w-fit bg-lime-800 hover:bg-lime-700 dark:bg-lime-300 dark:hover:bg-lime-400 border border-black text-white font-bold xl:text-md sm:px-14 sm:py-5 py-3 px-8 md:inline-block rounded-xl dark:text-black">
            Pesan Sekarang!
          </p>
        </RouterLink>
      </div>
      <div class="md:w-[40%] hidden md:block">
        <img src="../../assets/paymentPhoto.jpg" class="w-full"/>
      </div>
    </div>
    <Logos />
  </div>
  <Products />
  <Footer />
</template>
