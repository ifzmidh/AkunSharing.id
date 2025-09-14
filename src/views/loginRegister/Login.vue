<template>
  <div class="flex flex-col">
    <h2 class="font-bold text-4xl">Login</h2>
    <p class="mt-2 text-sm">kalau bisa lanjut, kenapa harus dari awal?</p>
    <p class="mt-5 font-medium text-sm">
      Username/Email<i class="text-red-500">*</i>
    </p>
    <InputText
      class="w-full mt-2"
      v-model="username"
      type="text"
      :invalid="false"
      size="small"
      placeholder="Username/Email" />
    <p class="mt-5 font-medium text-sm">
      Password<i class="text-red-500">*</i>
    </p>
    <InputText
      class="w-full mt-2"
      type="password"
      v-model="Password"
      size="small"
      :invalid="false"
      placeholder="Password" />
    <div class="mt-5 flex items-center justify-between gap-2">
      <div>
        <Checkbox
          v-model="rememberLogin"
          inputId="remember"
          name="rememberLogin"
          value="Cheese" />
        <label for="remember" class="text-xs text-black dark:text-white/80">
          Remember Me
        </label>
      </div>
      <p
        class="text-xs text-blue-800 hover:grayscale-50 cursor-pointer dark:text-blue-400 hover:dark:text-blue-500 transition-all">
        Forgot Your Password?
      </p>
    </div>
    <RouterLink to="/order"
      ><Button class="mt-5 w-full" size="small">Submit</Button></RouterLink
    >
    <Divider align="center" type="dotted">
      <b class="text-xs font-light">Or Login With</b>
    </Divider>
    <div>
      <Button
        class="py-3 w-full bg-black text-white rounded-md"
        size="small"
        severity="contrast">
        Sign In with Google
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Checkbox from "primevue/checkbox";
import Divider from "primevue/divider";
import Button from "primevue/button";

const username = ref<string>("");
const Password = ref<string>("");
const rememberLogin = ref<boolean>(false);
</script>
