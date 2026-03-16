<template>
  <section id="expertise" class="relative w-full py-24 bg-slate-50 dark:bg-[#000524] overflow-hidden perspective-container transition-colors duration-500">
    
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-[#ff1e42]/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 text-center mb-16">
      <h2 class="text-4xl md:text-6xl font-black text-slate-800 dark:text-white mb-6 tracking-tighter uppercase transition-colors duration-500">
        OUR <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1e42] to-[#ff8095]">EXPERTISE.</span>
      </h2>
    </div>

    <div class="relative flex overflow-hidden group py-12">
      <div class="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-slate-50 dark:from-[#000524] to-transparent z-20 pointer-events-none transition-colors duration-500"></div>
      <div class="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-slate-50 dark:from-[#000524] to-transparent z-20 pointer-events-none transition-colors duration-500"></div>

      <div class="flex animate-marquee-slow whitespace-nowrap items-center gap-8">
        <div 
          v-for="(partner, index) in [...partners, ...partners]" 
          :key="index"
          class="relative flex-shrink-0 group/card"
        >
          <div class="w-48 h-28 md:w-56 md:h-32 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl flex flex-col items-center justify-center p-6 backdrop-blur-md shadow-sm dark:shadow-none
                      transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                      group-hover/card:-translate-y-4 group-hover/card:rotate-x-12 group-hover/card:border-[#ff1e42]/40
                      group-hover/card:bg-white dark:group-hover/card:bg-white/10 group-hover/card:shadow-[0_25px_50px_-12px_rgba(255,30,66,0.25)]">
            
            <img 
              :src="partner.logo" 
              :alt="partner.name"
              class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover/card:scale-110 opacity-100 dark:opacity-100"
            />
          </div>

          <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-black/40 dark:bg-black/60 blur-lg rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const partners = [
  { name: 'Hikvision', logo: new URL('../assets/partner/Hikvision.png', import.meta.url).href },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Astina', logo: new URL('../assets/partner/Astina.png', import.meta.url).href },
  { name: 'Zoom', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg' },
  { name: 'Google Workspace', logo: new URL('../assets/partner/google.png', import.meta.url).href },
  { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' }
]
</script>

<style scoped>
.perspective-container { perspective: 1000px; }

.animate-marquee-slow {
  display: flex;
  width: max-content;
  animation: marquee 40s linear infinite;
}

.group:hover .animate-marquee-slow {
  animation-play-state: paused;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.group\/card { transform-style: preserve-3d; }

img {
  -webkit-user-drag: none;
  user-select: none;
}
</style>