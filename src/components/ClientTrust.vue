<template>
  <section id="clients" class="relative w-full py-24 lg:py-32 bg-white dark:bg-[#000839] overflow-hidden transition-colors duration-500">
    
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,30,66,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,30,66,0.08),transparent_70%)]"></div>
    <div class="absolute inset-0 pointer-events-none opacity-10 dark:opacity-20 bg-[size:60px_60px] bg-[linear-gradient(rgba(255,30,66,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,30,66,0.05)_1px,transparent_1px)]" aria-hidden="true"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 gsap-header" ref="headerRef">
        <div class="max-w-2xl">
          <div class="flex items-center gap-3 mb-4">
            <span class="w-12 h-[1px] bg-[#ff1e42]"></span>
          </div>
          <h2 class="text-4xl md:text-6xl font-black text-slate-800 dark:text-white leading-none tracking-tighter">
            OUR <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1e42] to-[#ff8095]">CLIENTS.</span>
          </h2>
        </div>
        <p class="text-slate-500 dark:text-slate-300 max-w-xs text-sm leading-relaxed border-l border-slate-200 dark:border-white/10 pl-6 uppercase tracking-wider font-medium">
          Collaborating with industry leaders to deliver high-level operational excellence and innovation.
        </p>
      </div>

      <div class="relative flex overflow-hidden py-12 mask-fade">
        <div class="flex flex-nowrap gap-6 animate-marquee items-center">
          <div 
            v-for="(client, index) in [...clients, ...clients]" 
            :key="index"
            class="flex-shrink-0 w-40 h-32 relative group flex items-center justify-center"
          >
            <div class="absolute inset-0 scale-75 bg-[#ff1e42]/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
            
            <div class="relative h-full w-full flex items-center justify-center p-4">
              <img 
                :src="client.logo" 
                :alt="client.name"
                :style="client.scale ? { transform: `scale(${client.scale})` } : {}"
                class="max-h-full max-w-full object-contain transition-all duration-700 group-hover:scale-110 opacity-100"
              />
            </div>

            <span class="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-[#ff1e42] text-white text-[9px] font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none uppercase tracking-widest z-20 shadow-xl whitespace-nowrap">
              {{ client.name }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const headerRef = ref(null)

const clients = ref([
  { id: 1, name: 'Global Makara Teknik', logo: new URL('../assets/logo/GMT.png', import.meta.url).href },
  { id: 2, name: 'Ombilin Fusi Nusantara', logo: new URL('../assets/logo/OFN.png', import.meta.url).href },
  { id: 3, name: 'Ombilin Energi', logo: new URL('../assets/logo/OE.png', import.meta.url).href },
  { id: 4, name: 'Trans Energi Indonesia', logo: new URL('../assets/logo/TEI.png', import.meta.url).href },
  { id: 5, name: 'Timur Satria Perkasa', logo: new URL('../assets/logo/TSP.png', import.meta.url).href },
  { id: 6, name: 'Fajar Surya Swadaya', logo: new URL('../assets/logo/FJS.png', import.meta.url).href, scale: 1.25 }
])

onMounted(() => {
  setTimeout(() => {
    ScrollTrigger.refresh()
    if (headerRef.value) {
      gsap.fromTo(headerRef.value,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, ease: 'power4.out',
          scrollTrigger: { 
            trigger: headerRef.value, 
            start: 'top 95%', 
            once: true, 
            invalidateOnRefresh: true 
          }
        }
      )
    }
  }, 100)
})
</script>

<style scoped>
.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 40s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.mask-fade {
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}

/* Efek hover default untuk memperbesar sedikit (berlaku untuk semua) */
.group:hover img {
  filter: drop-shadow(0 10px 15px rgba(255, 30, 66, 0.15));
  /* Jika logo FJS di-hover, dia akan dikalikan lagi skalanya dari 1.25 menjadi sekitar 1.37 */
  transform: scale(1.1) !important; 
}
</style>