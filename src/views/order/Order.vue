<template>
  <div class="h-screen">
    <Navbar />
    <div
      class="flex pt-30 xl:px-28 sm:px-16 px-8 py-10 gap-10 h-full transition-all duration-300">
      <div class="w-[40%] border rounded-xl hidden xl:block">
        <Image
          imageClass="bg-cover bg-center w-full h-full rounded-xl"
          :src="landscape"
          alt="Image" />
      </div>
      <div
        class="w-full lg:p-10 p-7 pb-0 lg:pb-0 flex flex-col border rounded-xl overflow-hidden">
        <h2 class="lg:mb-5 mb-3 font-bold text-4xl">Pesanan</h2>
        <div class="flex flex-col">
          <div class="card">
            <Tabs :value="activeTab" scrollable>
              <TabList>
                <Tab
                  v-for="tab in tabs"
                  :key="tab.value"
                  :value="tab.value"
                  class="flex items-center text-xs lg:text-sm">
                  {{ tab.label }}
                  <Badge
                    v-if="tab.length != 0"
                    :value="tab.length"
                    class="ms-2"
                    size="small" />
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel
                  v-for="tab in tabs"
                  :key="tab.value"
                  :value="tab.value">
                  <h2 v-if="tab.length == 0">Pesanan anda tidak ada.</h2>
                  <ScrollPanel style="width: 100%; height: 600px">
                    <component
                      :is="tab.component"
                      v-for="i in tab.length"
                      :key="i" />
                  </ScrollPanel>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import landscape from "../../assets/landscape.jpg";
import Navbar from "../../components/Navbar.vue";
import Active from "./component/process/Active.vue";
import Canceled from "./component/process/Canceled.vue";
import Expired from "./component/process/Expired.vue";
import Payment from "./component/process/Payment.vue";
import Process from "./component/process/Process.vue";

const tabs = [
  { value: 0, label: "Pembayaran", component: Payment, length: 5 },
  { value: 1, label: "Proses", component: Process, length: 4 },
  { value: 2, label: "Aktif", component: Active, length: 6 },
  { value: 3, label: "Kadarluasa", component: Expired, length: 4 },
  { value: 4, label: "Dibatalkan", component: Canceled, length: 0 },
];

const activeTab = ref(0);
</script>
