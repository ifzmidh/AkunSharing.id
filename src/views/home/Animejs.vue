<template>
  <div class="container-lg">
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1>Anime.js Example</h1>
      <h1>TIME : {{ time }}</h1>
      <img
        class="logo cursor-pointer"
        src="../../assets/applemusic.svg"
        alt="" />
      <Button @click="rotateLogo" class="p-2 bg-amber-300 z-50"
        >Animate: {{ count }}</Button
      >
    </div>
    <div class="h-screen flex static">
      <div
        class="w-6 border-2 rounded-md anime-scroll z-10 bg-black absolute"></div>
      <div class="w-6 h-screen border-2 border-red-500 rounded-md"></div>
    </div>
    <h1>TEST</h1>
    <div class="h-screen"></div>
  </div>
</template>

<script setup lang="ts">
import {
  animate,
  createDraggable,
  createSpring,
  createTimer,
  onScroll,
} from "animejs";
import { onMounted, ref } from "vue";

const count = ref<number>(0);
const time = ref<number>(0);

onMounted(() => {
  // Initialize the draggable element
  createDraggable(".logo", {
    container: [0, 0, 0, 0],
    releaseEase: createSpring({ stiffness: 300 }),
  });

  animate(".anime-scroll", {
    height: { to: "100%" },
    ease: "linear",
    autoplay: onScroll({
      enter: "center center",
      leave: "center 100vh",
      sync: 0.5,
      debug: true,
    }),
  });

  createTimer({
    duration: 1000,
    autoplay: true,
    frameRate: 120,
    onUpdate: (self: any) => (time.value = self.iterationCurrentTime),
  });
});

const rotateLogo = () => {
  count.value++;
  animate(".logo", {
    rotate: count.value * 360,
    duration: 1000,
    easing: "easeInOutQuad",
  });
};
</script>
