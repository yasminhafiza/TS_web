<template>
  <section id="cta" class="relative w-full py-32 px-6 md:px-12 bg-[#d1d9e6] dark:bg-[#000a40] overflow-hidden transition-colors duration-500">
    
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-0 w-full h-full tech-grid opacity-20"></div>
      <div class="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#ff1e42]/10 blur-[120px] animate-pulse"></div>
      <div class="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto [perspective:2000px]">
      <div
        class="cta-card relative bg-white/40 dark:bg-[#000a3d]/60 backdrop-blur-3xl rounded-none border-b-8 border-r-8 border-slate-400/50 dark:border-blue-900/50 p-8 md:p-20 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center shadow-2xl transition-all duration-500 [transform-style:preserve-3d]"
        ref="ctaCard"
        @mousemove="onTilt"
        @mouseleave="onReset"
      >
        <div class="absolute top-6 right-10 flex gap-4 z-50">
          <div v-for="i in 3" :key="i" 
               @click="powerUp(i)"
               class="w-10 h-2 border border-[#ff1e42]/30 cursor-pointer transition-all duration-300"
               :class="powerLevel >= i ? 'bg-[#ff1e42] shadow-[0_0_15px_#ff1e42]' : 'bg-transparent'">
          </div>
          <span class="text-[8px] font-mono text-[#ff1e42] uppercase animate-pulse">Engine_Charge: {{ powerLevel * 33 }}%</span>
        </div>

        <div class="cta-content relative z-10 [transform-style:preserve-3d]">
          <div class="inline-flex items-center gap-3 bg-[#ff1e42]/10 text-[#ff1e42] border-l-4 border-[#ff1e42] px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] mb-10 [transform:translateZ(30px)]">
            <Zap class="w-4 h-4" :class="{'animate-bounce': powerLevel === 3}" />
            System_Ready: Final_Phase
          </div>

          <h2 class="text-5xl md:text-7xl font-[1000] text-slate-900 dark:text-white leading-[0.85] mb-8 [transform:translateZ(60px)] uppercase tracking-tighter italic">
            READY TO LAUNCH<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1e42] via-[#ff4d6a] to-rose-400 drop-shadow-[0_0_20px_rgba(255,30,66,0.4)]">THE FUTURE?</span>
          </h2>

          <p class="text-sm text-slate-600 dark:text-blue-100/60 font-bold uppercase tracking-widest leading-relaxed mb-12 max-w-lg [transform:translateZ(40px)] border-l-2 border-slate-300 dark:border-blue-900 pl-6">
            >> Deploying transformation roadmap. Precise, scalable, and adaptive infrastructure for elite business operations. _
          </p>

          <div class="flex flex-wrap gap-6 [transform:translateZ(50px)]">
            <button 
              @click="goToConsultation"
              class="group relative overflow-hidden px-10 py-6 bg-[#ff1e42] text-white font-[1000] uppercase text-xs tracking-[0.2em] flex items-center gap-4 shadow-[0_20px_40px_-10px_rgba(255,30,66,0.5)] hover:scale-105 active:scale-95 transition-all"
            >
              <div class="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              START CONSULTATION
              <ArrowRight class="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>

            <button class="px-10 py-6 bg-slate-900 dark:bg-white/5 border border-slate-700 dark:border-white/10 text-white font-[1000] uppercase text-xs tracking-[0.2em] flex items-center gap-4 hover:bg-[#ff1e42] hover:border-[#ff1e42] transition-all">
              <Mail class="w-5 h-5" />
              CONTACT_HQ
            </button>
          </div>
        </div>

        <div class="cta-visual relative h-[500px] hidden lg:flex items-center justify-center [transform-style:preserve-3d]">
          <div class="relative transition-all duration-700" 
               :style="{ transform: `translateZ(100px) translateY(${powerLevel * -20}px)` }">
            
            <div class="relative w-48 h-48 [transform-style:preserve-3d]">
              <div class="absolute inset-0 bg-slate-900 dark:bg-white/5 rounded-none border border-[#ff1e42]/30 flex items-center justify-center text-[#ff1e42] backdrop-blur-xl">
                <Rocket class="w-20 h-20 transition-all duration-500" 
                        :class="powerLevel === 3 ? 'animate-wiggle text-white shadow-glow' : ''" />
              </div>
              
              <div class="absolute -inset-10 border border-[#ff1e42]/20 animate-[spin_8s_linear_infinite] [transform:rotateX(75deg)]"></div>
              <div class="absolute -inset-20 border border-slate-400 dark:border-white/10 animate-[spin_12s_linear_infinite_reverse] [transform:rotateY(75deg)]"></div>
            </div>

            <div v-if="powerLevel === 3" class="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div class="w-8 h-20 bg-gradient-to-t from-transparent via-[#ff1e42] to-[#ff1e42] blur-md animate-pulse"></div>
            </div>
          </div>

          <div class="v-badge absolute top-0 left-0 bg-white/80 dark:bg-slate-900 p-6 border-b-4 border-[#ff1e42] [transform:translateZ(150px)] animate-float">
            <span class="block text-4xl font-[1000] text-slate-900 dark:text-white">99.9%</span>
            <span class="text-[9px] font-black text-[#ff1e42] uppercase tracking-widest">Uptime_Guaranteed</span>
          </div>

          <div class="v-badge absolute bottom-0 right-0 bg-white/80 dark:bg-slate-900 p-6 border-b-4 border-[#ff1e42] [transform:translateZ(130px)] animate-float-slow">
            <span class="block text-4xl font-[1000] text-slate-900 dark:text-white">Elite</span>
            <span class="text-[9px] font-black text-[#ff1e42] uppercase tracking-widest">Engineer_Rank</span>
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
  if (powerLevel.value < val) powerLevel.value = val
  else powerLevel.value = 0
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
  gsap.to(card, { rotateX: -y * 10, rotateY: x * 10, duration: 0.5, ease: 'power2.out' })
}

const onReset = () => {
  gsap.to(ctaCard.value, { rotateX: 0, rotateY: 0, duration: 1, ease: 'elastic.out(1, 0.5)' })
}

onMounted(() => {
  setTimeout(() => {
    ScrollTrigger.refresh()
    gsap.fromTo(ctaCard.value,
      { y: 100, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1.5, ease: 'expo.out',
        scrollTrigger: { trigger: ctaCard.value, start: 'top 95%', once: true, invalidateOnRefresh: true }
      }
    )
  }, 100)
})
</script>

<style scoped>
.tech-grid {
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, rgba(255, 30, 66, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 30, 66, 0.05) 1px, transparent 1px);
}
@keyframes float {
  0%, 100% { transform: translateZ(150px) translateY(0); }
  50% { transform: translateZ(150px) translateY(-20px); }
}
@keyframes float-slow {
  0%, 100% { transform: translateZ(130px) translateY(0); }
  50% { transform: translateZ(130px) translateY(15px); }
}
@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}
.animate-float { animation: float 5s ease-in-out infinite; }
.animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
.animate-wiggle { animation: wiggle 0.2s ease-in-out infinite; }
.shadow-glow { filter: drop-shadow(0 0 15px rgba(255, 30, 66, 1)); }
</style>