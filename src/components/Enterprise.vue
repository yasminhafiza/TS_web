<template>
  <section id="ecosystem" class="relative w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-[#000524] overflow-hidden transition-colors duration-500">
    
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,30,66,0.06),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,30,66,0.1),transparent_70%)]"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-16 md:mb-20">
        <div class="max-w-2xl text-left">
          <div class="flex items-center gap-3 mb-3 md:mb-4">
            <span class="w-8 md:w-12 h-[1px] bg-[#ff1e42]"></span>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 dark:text-white leading-[1.1] md:leading-none tracking-tighter">
            OUR<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1e42] to-[#ff8095]">ENTERPRISE SERVICES</span>
          </h2>
        </div>
        <p class="text-slate-500 dark:text-slate-300 max-w-xs text-xs md:text-sm leading-relaxed border-l border-slate-200 dark:border-white/10 pl-4 md:pl-6 uppercase tracking-wider font-medium">
          A seamless network of world-class tools, integrated to accelerate your business performance.
        </p>
      </div>

      <div class="relative flex overflow-hidden py-12 md:py-20 mask-fade">
        <div class="flex animate-marquee-slow items-center gap-6 md:gap-10 lg:gap-16">
          <div 
            v-for="(partner, index) in [...partners, ...partners]" 
            :key="index"
            class="relative flex-shrink-0"
            :style="{ animationDelay: `${index * 0.5}s` }"
          >
            <div class="animate-float">
              <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-white/5 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none
                          group relative flex items-center justify-center transition-all duration-500
                          hover:border-[#ff1e42]/30 hover:shadow-[0_20px_50px_-12px_rgba(255,30,66,0.15)] hover:-translate-y-1 md:hover:-translate-y-2">
                
                <div class="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#ff1e42]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <img 
                  :src="partner.logo" 
                  :alt="partner.name"
                  class="relative z-10 max-h-full max-w-full object-contain p-5 sm:p-6 md:p-8 lg:p-10 transition-transform duration-700 group-hover:scale-110"
                />

                <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-bottom-4 md:group-hover:-bottom-5 transition-all duration-300 pointer-events-none">
                  <span class="bg-slate-900 dark:bg-[#ff1e42] text-white text-[8px] md:text-[10px] font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full whitespace-nowrap shadow-xl uppercase tracking-tighter">
                    {{ partner.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const partners = ref([
  { name: 'Hikvision', logo: new URL('../assets/partner/Hikvision.png', import.meta.url).href },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Astina', logo: new URL('../assets/partner/Astina.png', import.meta.url).href },
  { name: 'Odoo', logo: new URL('../assets/partner/Odoo.png', import.meta.url).href },
  { name: 'Zoom', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg' },
  { name: 'Google Workspace', logo: new URL('../assets/partner/google.png', import.meta.url).href },
  { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' }
])
</script>

<style scoped>
.animate-marquee-slow {
  display: flex;
  width: max-content;
  animation: marquee 45s linear infinite;
}

.animate-marquee-slow:hover {
  animation-play-state: paused;
}

/* Animasi Utama Marquee */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Animasi Floating (Naik Turun Pelan) */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Kita buat delay per item secara acak di dalam loop V-for menggunakan style binding */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

/* Masking efek pudar kanan kiri */
.mask-fade {
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}

/* Menghilangkan seleksi gambar */
img {
  -webkit-user-drag: none;
  user-select: none;
}
</style>