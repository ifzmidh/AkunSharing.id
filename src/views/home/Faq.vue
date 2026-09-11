<template>
  <div
    class="pt-50 2xl:px-[400px] px-50 flex flex-col items-center justify-center lg:mt-0 mt-10"
  >
    <h2 class="font-bold text-4xl">Pertanyaan yang sering diajukan</h2>
    <h3 class="mt-3 mb-5">
      Temukan kejelasan seputar skema akun, sistem klaim garansi, dan teknis
      keamanan.
    </h3>
    <div class="w-full" v-for="(x, index) in data" :key="index">
      <div
        class="mt-7 px-6 py-5 flex flex-col justify-between w-full bg-lime-800 rounded-2xl"
        v-on:click="toggleAccordion(index)"
      >
        <div>
          <p class="text-md font-bold">
            {{ x.message }}
          </p>
        </div>
        <p class="mt-5 text-sm" v-if="active === index">{{ x.desc }}</p>
        <p class="mt-5 text-sm" v-if="x.desc2 && active == index">
          {{ x?.desc2 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const active = ref();
const toggleAccordion = (i: number) => {
  active.value = active.value === i ? null : i;
};

let data = [
  {
    message: "Apa bedanya Akun Sharing dan Akun Private?",
    desc: "Akun Sharing: Satu akun resmi digunakan bersama beberapa member lain dengan pembagian slot/profil khusus ber-PIN. Anda hanya boleh login di 1 device pada satu waktu dengan biaya yang jauh lebih hemat",
    desc2:
      "Akun Private: Satu akun utuh sepenuhnya milik Anda (sering kali didaftarkan dengan email pribadi Anda). Anda bebas login di banyak perangkat (TV, HP, Laptop) tanpa perlu berbagi dengan siapapun.",
  },
  {
    message:
      "Bagaimana jika akun terkena kendala / reset password saat masa aktif?",
    desc: "Semua paket di akunSharing.id dilindungi Garansi Penggantian Penuh 100% selama sisa masa aktif langganan Anda. Cukup kirimkan bukti kendala (screenshot) ke admin WhatsApp kami, dan akun baru atau password pembaruan akan kami kirimkan dalam waktu 5-15 menit.",
  },
  {
    message: "Apakah legal dan aman untuk perangkat pribadi saya?",
    desc: "Sangat aman. Kami tidak menggunakan file APK modifikasi atau software berbahaya. Anda mengunduh aplikasi resmi langsung dari Google Play Store, Apple App Store, atau website resmi penyedia, lalu login dengan kredensial sah yang kami berikan.",
  },
  {
    message: "Metode pembayaran apa saja yang diterima?",
    desc: "Kami menerima pembayaran instan via QRIS yang kompatibel dengan seluruh e-wallet (GoPay, OVO, DANA, ShopeePay, LinkAja) serta semua aplikasi Mobile Banking nasional (BCA, Mandiri, BNI, BRI, SeaBank, Bank Jago). Verifikasi otomatis tanpa biaya admin tersembunyi.",
  },
];
</script>
