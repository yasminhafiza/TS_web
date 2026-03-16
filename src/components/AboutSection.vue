<template>
  <section id="about" class="relative w-full py-24 lg:py-32 bg-[#f8fbff] dark:bg-[#000839] overflow-hidden transition-colors duration-500">
    
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-10 left-10 w-[300px] h-[300px] bg-[#ff1e42]/5 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] tech-grid"></div>
      
      <div class="absolute left-4 top-1/4 h-64 w-px bg-gradient-to-b from-transparent via-[#ff1e42]/40 to-transparent hidden lg:block"></div>
      <div class="absolute right-4 bottom-1/4 h-64 w-px bg-gradient-to-b from-transparent via-blue-500/40 to-transparent hidden lg:block"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div class="relative group w-full">
      
          
          <h2 class="text-4xl md:text-5xl font-[1000] text-slate-800 dark:text-white mb-8 tracking-tight leading-[1.2] uppercase italic">
            TECHNOLOGY <br/>
            DRIVEN BY <br/>
            <span class="inline-block pr-8 text-glow-red text-transparent bg-clip-text bg-gradient-to-r from-[#ff1e42] via-rose-500 to-rose-400">
              HUMAN INTEGRITY
            </span>
          </h2>
          
          <div class="relative p-8 bg-white dark:bg-blue-950/20 border border-slate-200 dark:border-blue-400/20 backdrop-blur-md mb-10 group/box transition-all hover:border-[#ff1e42]/50">
            <div class="absolute top-0 left-0 w-full h-[2px] bg-[#ff1e42] animate-scan opacity-40 z-20"></div>
            <div class="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#ff1e42]"></div>
            <div class="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#ff1e42]"></div>
            
            <p class="text-base text-slate-600 dark:text-blue-100/70 leading-relaxed font-medium relative z-10">
              <span class="text-slate-900 dark:text-white font-bold italic">Technology Services</span> 
              is a dedicated unit within <span class="text-[#ff1e42] font-bold">PT Solusi Daya Indonesia</span> providing world-class IT infrastructure. We integrate high-level technical precision with social empathy and robust safety protocols. <span class="animate-pulse text-[#ff1e42]">_</span>
            </p>
          </div>

          <div class="space-y-6 max-w-md">
            <div v-for="(item, index) in values" :key="index" class="group/item">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                  <div class="w-1.5 h-1.5 bg-[#ff1e42] rotate-45 group-hover:scale-125 transition-transform"></div>
                  <span class="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{{ item.title }}</span>
                </div>
                <span class="text-[#ff1e42] font-mono text-[9px] opacity-0 group-hover/item:opacity-100 transition-opacity">SECURE_SYNC</span>
              </div>
              <div class="h-1 w-full bg-slate-200 dark:bg-blue-900/30 overflow-hidden relative border dark:border-white/5">
                <div class="absolute inset-0 bg-gradient-to-r from-[#ff1e42] to-rose-500 w-0 group-hover/item:w-full transition-all duration-[1.5s] ease-out"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="relative perspective-2000 lg:pl-10">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#ff1e42]/10 blur-[120px] animate-pulse"></div>

          <div class="grid grid-cols-2 gap-4 relative z-10 rotate-y-[-10deg] hover:rotate-y-0 transition-all duration-1000">
            <div v-for="(stat, idx) in stats" :key="idx" 
                 :class="[
                   'stat-card group relative p-6 rounded-none border-r-2 border-b-2 bg-white dark:bg-blue-900/10 border-slate-300 dark:border-blue-400/10 backdrop-blur-xl transition-all duration-500',
                   idx % 2 === 1 ? 'translate-y-8' : ''
                 ]">
              <div class="absolute top-2 left-2 w-2 h-2 border-t border-l border-slate-400 dark:border-white/20 group-hover:border-[#ff1e42]"></div>
         
              
              <div class="text-3xl md:text-5xl font-black text-slate-800 dark:text-white mb-1 tracking-tighter transition-all italic group-hover:text-[#ff1e42]">
                {{ stat.value }}
              </div>
              
              <div class="text-[9px] text-slate-500 dark:text-blue-300/60 font-black uppercase tracking-[0.15em] mb-4">
                {{ stat.label }}
              </div>
              
              <div class="relative h-[2px] w-full bg-slate-100 dark:bg-white/5 overflow-hidden">
                <div class="absolute inset-0 bg-[#ff1e42] -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ShieldCheck } from 'lucide-vue-next'



const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: 'PRO', label: 'Tech Expert' },
  { value: '100%', label: 'Safety Record' }
]
</script>

<style scoped>
.tech-grid {
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, currentColor 1px, transparent 1px),
    linear-gradient(to bottom, currentColor 1px, transparent 1px);
}

.text-glow-red {
  filter: drop-shadow(0 0 10px rgba(255, 30, 66, 0.4));
}

.stat-card {
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.03);
}

.dark .stat-card {
  box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.2);
}

.stat-card:hover {
  transform: translate(-5px, -5px);
  box-shadow: 15px 15px 0px rgba(255, 30, 66, 0.15);
}

@keyframes scan {
  0% { top: 0%; opacity: 0; }
  50% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

.animate-scan {
  animation: scan 3s linear infinite;
}

.perspective-2000 {
  perspective: 2000px;
}

.rotate-y-\[-10deg\] {
  transform: rotateY(-10deg);
}

.transition-all {
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}
</style>