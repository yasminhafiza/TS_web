<template>
  <section id="cta" class="relative w-full py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-slate-50 dark:bg-[#020617] overflow-hidden transition-colors duration-500">
    
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-0 w-full h-full tech-grid opacity-[0.05] dark:opacity-[0.1] text-[#000a40] dark:text-blue-500"></div>
      <div class="absolute -top-[10%] -right-[5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-[#ff1e42]/5 blur-[80px] md:blur-[120px]"></div>
      <div class="absolute -bottom-[10%] -left-[5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-[#000a40]/5 dark:bg-blue-600/10 blur-[80px] md:blur-[120px]"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto [perspective:2000px]">
      <div
        class="cta-card relative bg-white/80 dark:bg-[#000a40]/30 backdrop-blur-2xl rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 dark:border-white/10 p-6 md:p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center shadow-[0_40px_100px_-20px_rgba(0,10,64,0.15)] transition-all duration-700 [transform-style:preserve-3d]"
        ref="ctaCard"
        @mousemove="onTilt"
        @mouseleave="onReset"
      >
        
        <div class="absolute top-6 right-6 md:top-10 md:right-10 flex flex-col items-end gap-2 md:gap-3 z-50 hidden sm:flex">
          <div class="flex gap-2">
            <div v-for="i in 3" :key="i" 
                 @click="powerUp(i)"
                 class="w-6 h-1 md:w-10 md:h-1.5 rounded-full cursor-pointer transition-all duration-500"
                 :class="powerLevel >= i ? 'bg-[#ff1e42] shadow-[0_0_15px_rgba(255,30,66,0.5)]' : 'bg-slate-200 dark:bg-slate-800'">
            </div>
          </div>
          <span class="text-[8px] md:text-[10px] font-bold font-mono text-[#000a40]/40 dark:text-white/40 tracking-widest uppercase">
            System_Load: {{ powerLevel === 0 ? 'Optimal' : (powerLevel * 33) + '%' }}
          </span>
        </div>

        <div class="cta-content relative z-10 [transform-style:preserve-3d]">
          <div class="inline-flex items-center gap-2.5 bg-[#ff1e42]/10 text-[#ff1e42] px-4 py-1.5 md:px-5 md:py-2 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-[0.15em] mb-6 md:mb-8 [transform:translateZ(30px)] border border-[#ff1e42]/20">
            <Zap class="w-3 h-3 md:w-3.5 md:h-3.5" :class="{'animate-pulse': powerLevel === 3}" />
            Scale to Excellence
          </div>

          <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#000a40] dark:text-white leading-[1.1] md:leading-[1] mb-6 md:mb-8 [transform:translateZ(60px)] tracking-tight">
            Ready to build <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1e42] via-[#ff4d6a] to-[#000a40] dark:to-blue-400">the future?</span>
          </h2>

          <p class="text-sm md:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 md:mb-10 max-w-lg [transform:translateZ(40px)]">
            Deploy robust, scalable, and high-performance infrastructure designed for elite business operations.
          </p>

          <div class="flex flex-wrap gap-3 sm:gap-4 md:gap-5 [transform:translateZ(50px)]">
            <button 
              @click="goToConsultation"
              class="group relative px-6 py-3.5 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-[#ff1e42] hover:bg-[#d91937] text-white text-sm md:text-base font-bold rounded-xl md:rounded-2xl flex items-center gap-3 md:gap-4 shadow-xl shadow-[#ff1e42]/30 transition-all hover:-translate-y-1 active:scale-95"
            >
              Start Consultation
              <ArrowRight class="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button class="px-6 py-3.5 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[#000a40] dark:text-white text-sm md:text-base font-bold rounded-xl md:rounded-2xl flex items-center gap-3 md:gap-4 hover:bg-slate-50 dark:hover:bg-white/10 transition-all hover:-translate-y-1">
              <Mail class="w-4 h-4 md:w-5 md:h-5" />
              Contact Sales
            </button>
          </div>
        </div>

        <div class="cta-visual relative h-[300px] md:h-[400px] lg:h-[450px] hidden lg:flex items-center justify-center [transform-style:preserve-3d]">
          <div class="relative transition-all duration-1000 ease-out" 
               :style="{ transform: `translateZ(100px) translateY(${powerLevel * -25}px) rotateX(${powerLevel * -5}deg)` }">
            
            <div class="relative w-48 h-48 md:w-64 md:h-64 [transform-style:preserve-3d]">
              <div class="absolute inset-0 bg-[#000a40] dark:bg-slate-800 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,10,64,0.4)] flex items-center justify-center text-[#ff1e42]">
                <Rocket class="w-20 h-20 md:w-28 md:h-28 transition-all duration-500" 
                        :class="powerLevel === 3 ? 'animate-bounce text-white drop-shadow-[0_0_20px_#ff1e42]' : ''" />
              </div>
              
              <div class="absolute -inset-6 md:-inset-10 border border-[#ff1e42]/20 rounded-[2.5rem] md:rounded-[3rem] animate-[spin_12s_linear_infinite] opacity-40"></div>
              <div class="absolute -inset-12 md:-inset-20 border border-[#000a40]/10 dark:border-white/10 rounded-[3rem] md:rounded-[4rem] animate-[spin_20s_linear_infinite_reverse] opacity-20"></div>
            </div>

            <div v-if="powerLevel === 3" class="absolute -bottom-12 md:-bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div class="w-1.5 md:w-2 h-16 md:h-24 bg-gradient-to-t from-transparent via-[#ff1e42] to-[#ff1e42] rounded-full blur-md animate-pulse"></div>
            </div>
          </div>

          <div class="absolute top-0 md:top-4 -left-4 md:-left-8 bg-white dark:bg-slate-900 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl border-b-4 border-[#ff1e42] [transform:translateZ(150px)] animate-float">
            <span class="block text-2xl md:text-4xl font-bold text-[#000a40] dark:text-white">99.9%</span>
            <span class="text-[8px] md:text-[10px] font-black text-[#ff1e42] uppercase tracking-[0.2em]">Uptime Guarantee</span>
          </div>

          <div class="absolute bottom-4 md:bottom-8 -right-4 md:-right-8 bg-[#000a40] dark:bg-slate-800 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl border border-white/10 [transform:translateZ(130px)] animate-float-slow">
            <div class="flex items-center gap-2 md:gap-3">
              <div class="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-ping"></div>
              <span class="block text-base md:text-xl font-bold text-white uppercase tracking-tighter italic">Elite Engineer</span>
            </div>
            <span class="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 block">Global Network</span>
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
  if (window.innerWidth < 768) return; // Disable hover tilt on mobile
  
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
  if (ctaCard.value) {
    gsap.to(ctaCard.value, { 
      rotateX: 0, 
      rotateY: 0, 
      duration: 1.5, 
      ease: 'elastic.out(1, 0.7)' 
    })
  }
}

onMounted(() => {
  setTimeout(() => {
    ScrollTrigger.refresh()
    if (ctaCard.value) {
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
    }
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