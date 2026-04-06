<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center bg-[#f8fafc] dark:bg-[#020617] overflow-hidden"
    @mousemove="handleMouseMove"
  >
    <div class="absolute inset-0 pointer-events-none">
      <div class="hero-grid absolute inset-0 opacity-[0.03] dark:opacity-[0.1]"></div>
      
      <div 
        class="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[120px] animate-pulse"
      ></div>
      <div 
        class="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"
      ></div>

      <div
        class="absolute inset-0 transition-opacity duration-500"
        :style="{
          background: `radial-gradient(600px circle at ${mouseRawX}px ${mouseRawY}px, rgba(244, 63, 94, 0.07), transparent 70%)`,
        }"
      ></div>
    </div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div class="space-y-10 hero-left">
          <div class="space-y-4">
            
            
            <h1 class="text-6xl lg:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[0.85]">
              FUTURE<br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-600">DEFINED.</span>
            </h1>
            
            <p class="text-lg text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              We build resilient digital infrastructure and intelligent IT solutions to accelerate your business in the modern era.
            </p>
          </div>

          <div class="flex gap-12">
            <div v-for="stat in stats" :key="stat.label" class="group">
              <div class="text-3xl font-black text-slate-900 dark:text-white group-hover:text-rose-500 transition-colors">{{ stat.value }}</div>
              <div class="text-xs font-bold uppercase tracking-wider text-slate-400">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <div class="relative flex items-center justify-center h-[600px] hero-right">
          
          <div
            class="relative w-full max-w-[420px] perspective-1000"
            :style="{
              transform: `rotateY(${tiltX}deg) rotateX(${tiltY}deg)`,
              transition: 'transform 0.2s ease-out',
            }"
          >
            <div class="absolute inset-0 bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-[40px] shadow-2xl"></div>

            <div class="relative p-8 space-y-6">
              <div class="flex justify-between items-center">
                <div class="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center shadow-lg shadow-rose-500/40">
                  <Zap class="text-white w-6 h-6" />
                </div>
                <div class="text-right">
                  <div class="text-[10px] uppercase tracking-widest text-slate-400 font-bold">System Status</div>
                  <div class="text-xs font-bold text-green-500 flex items-center gap-1 justify-end">
                    <span class="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Optimal
                  </div>
                </div>
              </div>

              <div class="space-y-3">
                <div 
                  v-for="(item, i) in servicePoints.slice(0, 4)" 
                  :key="i"
                  class="p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/50 dark:border-white/10 flex items-center gap-4 group hover:bg-rose-500 transition-all duration-300 cursor-pointer"
                >
                  <div class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center group-hover:bg-white/20">
                    <component :is="item.icon" class="w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-white" />
                  </div>
                  <span class="font-bold text-sm text-slate-700 dark:text-slate-200 group-hover:text-white">{{ item.label }}</span>
                </div>
              </div>
            </div>

            <div class="absolute -top-10 -right-6 z-20 animate-float">
              <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-white/10">
                <div class="text-2xl font-black text-rose-500">20+</div>
                <div class="text-[9px] font-bold uppercase text-slate-400">Trusted Clients</div>
              </div>
            </div>

            <div class="absolute -bottom-8 -left-8 z-20 animate-float-slow">
              <div class="bg-slate-900 dark:bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4">
                <div class="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center">
                  <Shield class="text-white w-5 h-5" />
                </div>
                <div>
                  <div class="text-sm font-black text-white dark:text-slate-900 italic">SECURE</div>
                  <div class="text-[9px] font-bold uppercase text-slate-400">Enterprise Grade</div>
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
import { ref, onMounted } from 'vue'
import { Server, Shield, Smartphone, Network, Zap, Cpu, Globe } from 'lucide-vue-next'

const mouseRawX = ref(0)
const mouseRawY = ref(0)
const tiltX = ref(0)
const tiltY = ref(0)

onMounted(() => {
  mouseRawX.value = window.innerWidth / 2
  mouseRawY.value = window.innerHeight / 2
})

const handleMouseMove = (e) => {
  mouseRawX.value = e.clientX
  mouseRawY.value = e.clientY
  
  const rect = e.currentTarget.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  
  // Smoother tilt effect
  tiltX.value = (e.clientX - centerX) / 40
  tiltY.value = -((e.clientY - centerY) / 40)
}

const servicePoints = [
  { label: 'Corporate Application', icon: Globe },
  { label: 'Enterprise ERP', icon: Server },
  { label: 'Network Infrastructure', icon: Shield },
  { label: 'Cloud Productivity', icon: Cpu },
]

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '24/7', label: 'Tech Support' },
  { value: '100%', label: 'Safety Record' },
]
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

.hero-grid {
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, currentColor 1px, transparent 1px),
    linear-gradient(to bottom, currentColor 1px, transparent 1px);
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(15px) scale(1.05); }
}

.animate-float { animation: float 5s ease-in-out infinite; }
.animate-float-slow { animation: float-slow 7s ease-in-out infinite; }

/* Disable text selection for a better interactive experience */
section {
  user-select: none;
}
</style>