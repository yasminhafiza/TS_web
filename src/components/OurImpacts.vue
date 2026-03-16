<template>
  <section id="impact-metrics" class="bg-white dark:bg-[#000830] transition-colors duration-500 relative w-full py-20 px-6 overflow-hidden">
    <div class="absolute inset-0 pointer-events-none opacity-20 dark:opacity-40">
      <div class="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#ff1e42]/10 blur-[100px] rounded-full"></div>
      <div class="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <div class="mb-12 border-l-4 border-[#ff1e42] pl-6" ref="headRef">
        <h2 class="text-4xl md:text-5xl font-[1000] text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none mb-2">
          OPERATIONAL <span class="text-[#ff1e42]">IMPACT</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4" ref="gridRef">
        
        <div class="md:col-span-2 md:row-span-2 group relative bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-[#ff1e42]/50 shadow-sm">
          <div class="relative z-10">
            <TrendingUp class="w-8 h-8 text-[#ff1e42] mb-6" />
            <h3 class="text-xl font-black text-slate-900 dark:text-white uppercase italic">Process Automation</h3>
          </div>
          
          <div class="space-y-6 mt-12 relative z-10">
            <div v-for="stat in impactStats" :key="stat.label">
              <div class="flex justify-between items-end mb-1">
                <span class="text-[9px] font-black text-slate-400 uppercase tracking-widest">{{ stat.label }}</span>
                <span class="text-2xl font-[1000] text-slate-900 dark:text-white italic leading-none">{{ stat.value }}{{ stat.suffix }}</span>
              </div>
              <div class="h-1 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                <div class="h-full bg-[#ff1e42] transition-all duration-1000" :style="{ width: stat.progress + '%' }"></div>
              </div>
            </div>
          </div>
          <TrendingUp class="absolute -bottom-10 -right-10 w-48 h-48 opacity-[0.03] text-slate-900 dark:text-white pointer-events-none" />
        </div>

        <div class="group relative bg-slate-950 p-8 flex flex-col justify-center border-b-4 border-[#ff1e42]">
          <ShieldCheck class="w-6 h-6 text-[#ff1e42] mb-4" />
          <span class="text-4xl font-[1000] text-white italic tracking-tighter leading-none">99.9%</span>
          <p class="text-[9px] font-black text-slate-500 uppercase tracking-widest mt-2">Uptime Reliability</p>
        </div>

        <div class="group relative bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 flex flex-col justify-center transition-all hover:bg-white dark:hover:bg-white/10">
          <Gauge class="w-6 h-6 text-[#ff1e42] mb-4" />
          <span class="text-4xl font-[1000] text-slate-900 dark:text-white italic tracking-tighter leading-none">-25%</span>
          <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-2">Fuel Cons. Reduction</p>
        </div>

        <div class="md:col-span-2 group relative bg-white dark:bg-[#000a3d]/40 border border-slate-200 dark:border-white/10 p-6 flex items-center gap-6 overflow-hidden">
          <div class="w-12 h-12 bg-[#ff1e42]/10 flex items-center justify-center rounded-lg">
            <Database class="w-6 h-6 text-[#ff1e42]" />
          </div>
          <div>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-[1000] text-slate-900 dark:text-white italic">100%</span>
              <span class="text-[9px] font-black text-[#ff1e42] uppercase tracking-tighter">Verified</span>
            </div>
            <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Master Data Accuracy</p>
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
import { TrendingUp, ShieldCheck, Gauge, Database } from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

const impactStats = [
  { label: 'Reporting Speed', value: '40', suffix: '%', progress: 85 },
  { label: 'Asset Visibility', value: '95', suffix: '%', progress: 95 },
  { label: 'Cost Efficiency', value: '30', suffix: '%', progress: 70 }
]

const headRef = ref(null)
const gridRef = ref(null)

onMounted(() => {
  gsap.from(headRef.value, {
    x: -50, opacity: 0, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: headRef.value, start: 'top 90%' }
  })
  
  gsap.from('.grid > div', {
    y: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power2.out',
    scrollTrigger: { trigger: gridRef.value, start: 'top 85%' }
  })
})
</script>

<style scoped>
/* Menghapus gaya 3D yang berat untuk performa dan tampilan lebih clean */
.grid > div {
  transition: transform 0.3s ease;
}
.grid > div:hover {
  transform: translateY(-5px);
}
</style>