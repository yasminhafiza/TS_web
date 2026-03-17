<template>
  <section id="impact" class="minimal-impact-section">
    <div class="relative z-10 max-w-6xl mx-auto px-6">
      
      <div class="text-center mb-16 space-y-2" ref="headerRef">
        <h2 class="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white uppercase italic">
          System <span class="text-rose-500">Impact.</span>
        </h2>
        <p class="text-slate-500 dark:text-slate-400 max-w-md mx-auto text-xs font-bold uppercase tracking-widest opacity-60">
          High-performance infrastructure telemetry
        </p>
      </div>

      <div class="metrics-grid" ref="listRef">
        <div v-for="(stat, index) in stats" :key="index" class="metric-item group">
          
          <div class="flex items-center gap-3 mb-1">
            <component :is="stat.icon" class="w-4 h-4 text-rose-500/50 group-hover:text-rose-500 transition-colors" />
            <div class="flex items-baseline">
              <span class="text-5xl font-black tracking-tighter text-slate-900 dark:text-white counter italic" 
                    :data-target="stat.value" 
                    :data-decimals="stat.decimals">
                0
              </span>
              <span class="text-lg font-black text-rose-500 ml-1">{{ stat.suffix }}</span>
            </div>
          </div>

          <div class="w-full space-y-2">
            <p class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
              {{ stat.label }}
            </p>
            <div class="h-[1px] w-8 bg-slate-200 dark:bg-white/10 group-hover:w-full group-hover:bg-rose-500 transition-all duration-700"></div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, markRaw } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// Minimalistic icons
import { Zap, ShieldCheck, TrendingUp, Cpu, Globe, Activity } from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

const headerRef = ref(null)

const stats = [
  { label: 'Network Speed', value: 40, decimals: 0, suffix: '%', icon: markRaw(Zap) },
  { label: 'System Uptime', value: 99.9, decimals: 1, suffix: '%', icon: markRaw(ShieldCheck) },
  { label: 'Data Latency', value: 12, decimals: 0, suffix: 'ms', icon: markRaw(Activity) },
  { label: 'Global Reach', value: 15, decimals: 0, suffix: 'Nodes', icon: markRaw(Globe) },
  { label: 'Processing', value: 3.5, decimals: 1, suffix: 'GHz', icon: markRaw(Cpu) },
  { label: 'ROI Growth', value: 30, decimals: 0, suffix: '%', icon: markRaw(TrendingUp) }
]

onMounted(() => {
  // Animate Header
  gsap.from(headerRef.value, {
    y: 20, opacity: 0, duration: 1, ease: 'power2.out',
    scrollTrigger: { trigger: headerRef.value, start: 'top 90%' }
  })

  // Animate Numbers
  const counters = document.querySelectorAll('.counter')
  counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'))
    const decimals = parseInt(counter.getAttribute('data-decimals'))
    
    let obj = { val: 0 }
    gsap.to(obj, {
      val: target,
      duration: 2.5,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: counter,
        start: 'top 95%',
        once: true
      },
      onUpdate: () => {
        counter.innerText = obj.val.toFixed(decimals)
      }
    })
  })
})
</script>

<style scoped>
.minimal-impact-section {
  @apply relative w-full py-20 bg-[#f8fafc] dark:bg-[#020617] transition-colors duration-700;
}

/* Grid: 2 cols on mobile, 3 on tablet, 6 on desktop */
.metrics-grid {
  @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-16;
}

.metric-item {
  @apply flex flex-col items-start;
}

.counter {
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

/* Custom Selection Color */
::selection {
  background: #f43f5e;
  color: white;
}
</style>