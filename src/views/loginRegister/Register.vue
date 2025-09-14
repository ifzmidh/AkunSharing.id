<template>
  <div class="flex flex-col">
    <h2 class="font-bold text-4xl">Register</h2>
    <p class="mt-2 text-sm">Ayo kita mulai buka lembaran baru!</p>
    <p class="mt-5 font-medium text-sm">Email<i class="text-red-500">*</i></p>
    <InputText
      class="w-full mt-2"
      type="email"
      v-model="email"
      :invalid="false"
      size="small"
      placeholder="Password" />
    <p class="mt-2 font-medium text-sm">
      Nomer Whatsapp<i class="text-red-500">*</i>
    </p>
    <InputText
      class="w-full mt-2"
      type="number"
      v-model="phone"
      :invalid="false"
      size="small"
      placeholder="Nomer Whatsapp" />
    <p class="mt-2 font-medium text-sm">
      Password<i class="text-red-500">*</i>
    </p>
    <Password
      class="mt-2"
      :fluid="true"
      :feedback="false"
      type="password"
      v-model="password"
      :invalid="false"
      size="small"
      placeholder="Password"
      toggleMask />
    <p class="mt-2 font-medium text-sm">
      Konfirmasi Password<i class="text-red-500">*</i>
    </p>
    <Password
      class="mt-2"
      :fluid="true"
      :feedback="false"
      type="password"
      :invalid="false"
      size="small"
      placeholder="Konfirmasi Password"
      toggleMask />
    <Button class="mt-5 w-full" size="small">Submit</Button>
    <Divider align="center" type="dotted">
      <b class="text-xs font-light">Or Sign Up With</b>
    </Divider>
    <div>
      <Button
        class="py-3 w-full bg-black text-white rounded-md"
        size="small"
        severity="contrast">
        Sign Up with Google
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// import Checkbox from "primevue/checkbox";
import Divider from "primevue/divider";
import Button from "primevue/button";

const email = ref<string>("");
const phone = ref();
const password = ref<string>("");
// const rememberLogin = ref<boolean>(false);
</script>
