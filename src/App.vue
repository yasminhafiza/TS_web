<template>
  <div class="app-bg bg-slate-50 dark:bg-[#000524] text-slate-900 dark:text-slate-100 transition-colors duration-500 min-h-screen">
    
    <div class="ambient-layer"></div>

    <RouterView />

  </div>
</template>

<script setup>
// Logic script Anda di sini
</script>

<style scoped>
/* Opsional: Tambahkan gaya untuk ambient-layer jika diperlukan */
.ambient-layer {
  /* Contoh: position: fixed; top: 0; ... */
}
</style>