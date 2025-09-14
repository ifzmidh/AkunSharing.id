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
            <p class="text-sm">Menunggu Pembayaran</p>
          </div>
        </span>
      </AccordionHeader>
      <AccordionContent>
        <div class="flex flex-col">
          <div class="flex justify-between items-center mb-2">
            <div>
              <p class="m-0">
                <span class="font-bold">Jenis Akun:</span>
                Sharing Profile 4 User
              </p>
              <p class="m-0">
                <span class="font-bold">Email:</span>
                hafizcurup@gmail.com
              </p>
            </div>
            <div class="text-sm">
              <p class="m-0">
                <span class="font-bold">Tanggal Pembelian:</span>
                5:15 12 Desember 2023
              </p>
              <p class="m-0">
                <span class="font-bold">Batas Pembayaran:</span>
                5:15 13 Desember 2023
              </p>
            </div>
          </div>
          <Divider type="dashed" />
          <div class="flex justify-between items-center mb-2">
            <p class="text-xs">Mohon konfirmasi setelah pembayaran</p>
            <div class="flex items-center mr-2">
              <p class="text-sm mr-2">Total Pembayaran:</p>
              <p class="text-lg font-bold">Rp. 32.000</p>
            </div>
          </div>
          <div class="flex gap-5">
            <Button class="w-full" size="small" severity="danger"
              >Batalkan</Button
            >
            <Button class="w-full" size="small" severity="success"
              >Bayar</Button
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
