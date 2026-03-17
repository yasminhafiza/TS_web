<template>
  <section id="cta" class="relative w-full py-24 px-6 md:px-12 bg-slate-50 dark:bg-[#020617] overflow-hidden transition-colors duration-500">
    
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-0 w-full h-full tech-grid opacity-[0.05] dark:opacity-[0.1] text-[#000a40] dark:text-blue-500"></div>
      <div class="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] rounded-full bg-[#ff1e42]/5 blur-[120px]"></div>
      <div class="absolute -bottom-[10%] -left-[5%] w-[500px] h-[500px] rounded-full bg-[#000a40]/5 dark:bg-blue-600/10 blur-[120px]"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto [perspective:2000px]">
      <div
        class="cta-card relative bg-white/80 dark:bg-[#000a40]/30 backdrop-blur-2xl rounded-[2.5rem] border border-slate-200 dark:border-white/10 p-8 md:p-16 lg:p-20 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center shadow-[0_40px_100px_-20px_rgba(0,10,64,0.15)] transition-all duration-700 [transform-style:preserve-3d]"
        ref="ctaCard"
        @mousemove="onTilt"
        @mouseleave="onReset"
      >
        
        <div class="absolute top-10 right-10 flex flex-col items-end gap-3 z-50">
          <div class="flex gap-2">
            <div v-for="i in 3" :key="i" 
                 @click="powerUp(i)"
                 class="w-10 h-1.5 rounded-full cursor-pointer transition-all duration-500"
                 :class="powerLevel >= i ? 'bg-[#ff1e42] shadow-[0_0_15px_rgba(255,30,66,0.5)]' : 'bg-slate-200 dark:bg-slate-800'">
            </div>
          </div>
          <span class="text-[10px] font-bold font-mono text-[#000a40]/40 dark:text-white/40 tracking-widest uppercase">
            System_Load: {{ powerLevel === 0 ? 'Optimal' : (powerLevel * 33) + '%' }}
          </span>
        </div>

        <div class="cta-content relative z-10 [transform-style:preserve-3d]">
          <div class="inline-flex items-center gap-2.5 bg-[#ff1e42]/10 text-[#ff1e42] px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.15em] mb-8 [transform:translateZ(30px)] border border-[#ff1e42]/20">
            <Zap class="w-3.5 h-3.5" :class="{'animate-pulse': powerLevel === 3}" />
            Scale to Excellence
          </div>

          <h2 class="text-5xl md:text-7xl font-bold text-[#000a40] dark:text-white leading-[1] mb-8 [transform:translateZ(60px)] tracking-tight">
            Ready to build <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1e42] via-[#ff4d6a] to-[#000a40] dark:to-blue-400">the future?</span>
          </h2>

          <p class="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10 max-w-lg [transform:translateZ(40px)]">
            Deploy robust, scalable, and high-performance infrastructure designed for elite business operations.
          </p>

          <div class="flex flex-wrap gap-5 [transform:translateZ(50px)]">
            <button 
              @click="goToConsultation"
              class="group relative px-10 py-5 bg-[#ff1e42] hover:bg-[#d91937] text-white font-bold rounded-2xl flex items-center gap-4 shadow-xl shadow-[#ff1e42]/30 transition-all hover:-translate-y-1 active:scale-95"
            >
              Start Consultation
              <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button class="px-10 py-5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[#000a40] dark:text-white font-bold rounded-2xl flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-white/10 transition-all hover:-translate-y-1">
              <Mail class="w-5 h-5" />
              Contact Sales
            </button>
          </div>
        </div>

        <div class="cta-visual relative h-[450px] hidden lg:flex items-center justify-center [transform-style:preserve-3d]">
          <div class="relative transition-all duration-1000 ease-out" 
               :style="{ transform: `translateZ(100px) translateY(${powerLevel * -25}px) rotateX(${powerLevel * -5}deg)` }">
            
            <div class="relative w-64 h-64 [transform-style:preserve-3d]">
              <div class="absolute inset-0 bg-[#000a40] dark:bg-slate-800 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,10,64,0.4)] flex items-center justify-center text-[#ff1e42]">
                <Rocket class="w-28 h-28 transition-all duration-500" 
                        :class="powerLevel === 3 ? 'animate-bounce text-white drop-shadow-[0_0_20px_#ff1e42]' : ''" />
              </div>
              
              <div class="absolute -inset-10 border border-[#ff1e42]/20 rounded-[3rem] animate-[spin_12s_linear_infinite] opacity-40"></div>
              <div class="absolute -inset-20 border border-[#000a40]/10 dark:border-white/10 rounded-[4rem] animate-[spin_20s_linear_infinite_reverse] opacity-20"></div>
            </div>

            <div v-if="powerLevel === 3" class="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div class="w-2 h-24 bg-gradient-to-t from-transparent via-[#ff1e42] to-[#ff1e42] rounded-full blur-md animate-pulse"></div>
            </div>
          </div>

          <div class="absolute top-4 -left-8 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-2xl border-b-4 border-[#ff1e42] [transform:translateZ(150px)] animate-float">
            <span class="block text-4xl font-bold text-[#000a40] dark:text-white">99.9%</span>
            <span class="text-[10px] font-black text-[#ff1e42] uppercase tracking-[0.2em]">Uptime Guarantee</span>
          </div>

          <div class="absolute bottom-8 -right-8 bg-[#000a40] dark:bg-slate-800 p-6 rounded-3xl shadow-2xl border border-white/10 [transform:translateZ(130px)] animate-float-slow">
            <div class="flex items-center gap-3">
              <div class="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              <span class="block text-xl font-bold text-white uppercase tracking-tighter italic">Elite Engineer</span>
            </div>
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 block">Global Network</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Rocket, ArrowRight, Mail, Zap } from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()
const ctaCard = ref(null)
const powerLevel = ref(0)

const powerUp = (val) => {
  powerLevel.value = powerLevel.value === val ? 0 : val
}

const goToConsultation = () => {
  router.push('/consultation')
}

const onTilt = (e) => {
  const card = ctaCard.value
  if (!card) return
  const rect = card.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5
  
  // Subtle professional tilt
  gsap.to(card, { 
    rotateX: -y * 8, 
    rotateY: x * 8, 
    duration: 0.6, 
    ease: 'power2.out' 
  })
}

const onReset = () => {
  gsap.to(ctaCard.value, { 
    rotateX: 0, 
    rotateY: 0, 
    duration: 1.5, 
    ease: 'elastic.out(1, 0.7)' 
  })
}

onMounted(() => {
  setTimeout(() => {
    ScrollTrigger.refresh()
    gsap.fromTo(ctaCard.value,
      { y: 80, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1.4, ease: 'expo.out',
        scrollTrigger: { 
          trigger: ctaCard.value, 
          start: 'top 90%', 
          once: true 
        }
      }
    )
  }, 100)
})
</script>

<style scoped>
.tech-grid {
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, currentColor 1px, transparent 1px),
    linear-gradient(to bottom, currentColor 1px, transparent 1px);
}

@keyframes float {
  0%, 100% { transform: translateZ(150px) translateY(0); }
  50% { transform: translateZ(150px) translateY(-15px); }
}

@keyframes float-slow {
  0%, 100% { transform: translateZ(130px) translateY(0); }
  50% { transform: translateZ(130px) translateY(12px); }
}

.animate-float { animation: float 6s ease-in-out infinite; }
.animate-float-slow { animation: float-slow 9s ease-in-out infinite; }

/* Custom Scrollbar for dark mode compatibility */
.cta-card::-webkit-scrollbar {
  width: 4px;
}
</style>