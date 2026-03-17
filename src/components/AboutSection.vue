<template>
  <section id="about" class="relative w-full py-24 lg:py-32 bg-[#f0f4f8] dark:bg-[#020617] overflow-hidden transition-colors duration-700">
    
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-20 right-[10%] w-32 h-32 animate-float-slow opacity-20 dark:opacity-30">
        <svg viewBox="0 0 24 24" fill="none" class="w-full h-full text-rose-500">
          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="0.5"/>
          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" stroke="currentColor" stroke-width="0.5"/>
        </svg>
      </div>

      <div class="absolute -left-20 top-1/3 w-64 h-96 bg-white/20 dark:bg-blue-500/5 rounded-[40px] rotate-12 blur-sm border border-white/30 dark:border-white/5"></div>
      
      <div class="absolute top-0 left-1/4 w-[600px] h-[600px] bg-rose-500/[0.08] dark:bg-rose-500/[0.1] rounded-full blur-[120px]"></div>
      <div class="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/[0.08] dark:bg-blue-600/[0.1] rounded-full blur-[120px]"></div>

      <div class="absolute inset-0 opacity-[0.2] dark:opacity-[0.4]" 
           style="background-image: radial-gradient(#64748b 0.5px, transparent 0.5px); background-size: 50px 50px;">
      </div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div class="lg:col-span-7 space-y-10">
          <div class="space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
              <span class="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              <span class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Our Identity</span>
            </div>
            
            <h2 class="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter uppercase">
              Technology <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-600">Precision.</span>
            </h2>
            
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-medium border-l-4 border-rose-500 pl-6">
              <span class="text-slate-900 dark:text-white font-bold italic">Technology Services</span> 
              is a dedicated unit within <span class="text-rose-500 font-bold">PT Solusi Daya Indonesia</span>. We bridge the gap between complex infrastructure and human-centric solutions.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div v-for="(item, index) in values" :key="index" class="group p-4 bg-white/40 dark:bg-white/5 rounded-2xl border border-white dark:border-white/10 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-500">
                  <component :is="item.icon" class="w-4 h-4" />
                </div>
                <span class="text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200">{{ item.title }}</span>
              </div>
              <div class="h-1 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div class="h-full bg-rose-500 w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 relative">
          <div class="grid grid-cols-2 gap-6 perspective-2000">
            <div 
              v-for="(stat, idx) in stats" 
              :key="idx" 
              class="stat-card relative p-8 rounded-[32px] bg-white dark:bg-white/5 border border-white dark:border-white/10 shadow-xl dark:shadow-2xl transition-all duration-500 hover:translate-z-10"
              :class="idx % 2 === 1 ? 'lg:mt-12' : ''"
              @mousemove="handleCardTilt($event, idx)"
              @mouseleave="resetCardTilt(idx)"
              :ref="el => { if (el) cardRefs[idx] = el }"
            >
              <div class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter italic">
                {{ stat.value }}
              </div>
              <div class="text-[10px] font-black uppercase tracking-widest text-rose-500">
                {{ stat.label }}
              </div>
              <div class="absolute top-0 right-0 p-4 opacity-10">
                <div class="w-8 h-8 border-t-2 border-r-2 border-slate-900 dark:border-white"></div>
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
import { gsap } from 'gsap'
import { Shield, Target, Heart, Cpu } from 'lucide-vue-next'

const cardRefs = ref([])

const values = [
  { title: 'Technical Precision', icon: Cpu },
  { title: 'Social Empathy', icon: Heart },
  { title: 'Safety Protocol', icon: Shield },
  { title: 'Human Integrity', icon: Target }
]

const stats = [
  { value: '15+', label: 'Years Exp' },
  { value: '500+', label: 'Projects' },
  { value: 'PRO', label: 'Tech Expert' },
  { value: '100%', label: 'Safety' }
]

const handleCardTilt = (e, i) => {
  const card = cardRefs.value[i]
  const rect = card.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5
  
  gsap.to(card, {
    rotateY: x * 15,
    rotateX: -y * 15,
    z: 20,
    duration: 0.4,
    ease: 'power2.out'
  })
}

const resetCardTilt = (i) => {
  gsap.to(cardRefs.value[i], {
    rotateY: 0,
    rotateX: 0,
    z: 0,
    duration: 0.8,
    ease: 'elastic.out(1, 0.6)'
  })
}
</script>

<style scoped>
/* 3D Perspective Setup */
.perspective-2000 {
  perspective: 2000px;
}

.stat-card {
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

/* Background Animations */
@keyframes float-slow {
  0%, 100% { transform: translateY(0) rotate(12deg) scale(1); }
  50% { transform: translateY(-30px) rotate(15deg) scale(1.1); }
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(20px, -20px); }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Custom Depth shadow for light mode */
.bg-white\/40 {
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);
}

::selection {
  background: #f43f5e;
  color: white;
}
</style>