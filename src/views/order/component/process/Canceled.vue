<template>
  <Accordion expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
    <AccordionPanel value="0">
      <AccordionHeader>
        <span class="flex items-center gap-2 w-full">
          <Avatar
            :image="landscape"
            class="mr-2"
            size="normal"
            shape="circle" />
          <div>
            <div>Spotify Premium Family</div>
            <div class="text-xs">No Pesanan: ASID001234142</div>
          </div>
          <div class="ml-auto mr-2">
            <p class="text-sm md:block hidden">Pesanan Dibatalkan</p>
          </div>
        </span>
      </AccordionHeader>
      <AccordionContent>
        <div class="flex flex-col">
          <div
            class="flex md:flex-row flex-col justify-between items-center mb-2 gap-y-2">
            <div
              class="text-xs lg:text-sm flex flex-col md:gap-y-4 gap-y-2 justify-start">
              <p class="w-fit flex gap-x-2">
                <span class="font-bold">Jenis Akun:</span>
                Sharing Profile 4 User
              </p>
              <p class="w-fit flex gap-x-2">
                <span class="font-bold">Email:</span>
                hafizcurup@gmail.com
              </p>
            </div>
            <div
              class="text-xs lg:text-sm flex flex-col md:gap-y-4 gap-y-2 items-end">
              <p class="w-fit flex gap-x-2">
                <span class="font-bold">Tanggal Pembelian:</span>
                5:15 WIB, 12 Desember 2023
              </p>
              <p class="w-fit flex gap-x-2">
                <span class="font-bold">Batas Pembayaran:</span>
                5:15 WIB, 13 Desember 2023
              </p>
            </div>
          </div>
          <Divider type="dashed" />
          <div class="flex items-center justify-center md:justify-end mb-4">
            <p class="text-sm mr-2">Total Pembayaran:</p>
            <p class="text-lg font-bold">Rp. 32.000</p>
          </div>
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-xs text-center md:text-start mb-5 md:mb-0">
              Pesanan anda dibatalkan, anda dapat memesan kembali produk ini.
            </p>
            <Button class="md:max-w-50 w-full self-end" size="small"
              >Pesan Lagi</Button
            >
          </div>
        </div>
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>
<script setup lang="ts">
import landscape from "../../../../assets/landscape.jpg";
</script>
