<template>
  <div
    class="h-screen flex xl:px-28 xl:py-10 md:px-16 md:py-10 gap-x-10 transition-all duration-300">
    <DarkButton />
    <div class="w-[50%] border rounded-xl hidden xl:flex">
      <Image
        imageClass="bg-cover bg-center w-full h-full rounded-xl"
        :src="landscape"
        alt="Image" />
    </div>
    <div
      class="w-full flex flex-col pt-28 items-center md:border rounded-xl transition-all duration-300">
      <div class="flex flex-col">
        <div class="card">
          <Tabs value="0">
            <TabList pt:tabList:class="flex justify-center">
              <Tab value="0" pt:root:class="flex grow justify-center"
                >Login</Tab
              >
              <Tab value="1" pt:root:class="flex grow justify-center"
                >Register</Tab
              >
            </TabList>
            <TabPanels>
              <TabPanel value="0">
                <Login class="w-100 pt-5" />
              </TabPanel>
              <TabPanel value="1">
                <Register class="w-100 pt-5" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Login from "./Login.vue";
import landscape from "../../assets/landscape.jpg";
import Register from "./Register.vue";
import DarkButton from "../../components/darkButton.vue";
</script>
