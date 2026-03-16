<template>
  <div class="bg-slate-50 dark:bg-[#000524] transition-colors duration-500 min-h-screen relative overflow-x-hidden">
    <div class="z-0 absolute inset-0 pointer-events-none opacity-30 dark:opacity-100 transition-opacity duration-500 [transform:rotateX(60deg)_translateY(-10%)_scale(2)] origin-top [mask-image:linear-gradient(to_bottom,black,transparent)] bg-[size:50px_50px] bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]" aria-hidden="true"></div>
    <div class="ambient-layer z-0">
      <div class="w-[450px] h-[450px] bg-[#3b82f6]/10 bottom-auto top-[5%] right-auto left-[-5%] absolute rounded-full blur-[100px] pointer-events-none opacity-30 dark:opacity-80 transition-opacity duration-500"></div>
      <div class="w-[350px] h-[350px] bg-[#6366f1]/10 top-auto bottom-[10%] left-auto right-[-5%] absolute rounded-full blur-[100px] pointer-events-none opacity-30 dark:opacity-80 transition-opacity duration-500"></div>
    </div>

    <Navbar />

    <section class="pt-[140px] pb-[100px] relative z-10">
      <div class="container relative z-10 mx-auto px-6">
        <div class="text-center mb-16 gsap-header">
          <div class="inline-block px-[18px] py-2 bg-white dark:bg-white/[0.04] border border-[#3b82f6]/15 rounded-full text-[#3b82f6] text-[11px] font-extrabold uppercase tracking-[2px] mb-6 shadow-[0_4px_15px_rgba(59,130,246,0.05)] transition-colors duration-500">Consultation Center</div>
          <h1 class="text-[clamp(2.5rem,6vw,4.5rem)] font-black text-slate-800 dark:text-white leading-[1.05] tracking-[-0.02em] transition-colors duration-500">
            Service <span class="bg-clip-text text-transparent bg-gradient-to-br from-[#3b82f6] to-[#6366f1]">Consultation</span>
          </h1>
          <p class="text-[#64748b] dark:text-[#cbd5e1] text-lg max-w-[600px] mx-auto mt-6 leading-relaxed transition-colors duration-500">
            Experience our next-gen digital transformation. Let's build your future today with a precise and scalable roadmap.
          </p>
        </div>

        <div class="flex flex-col lg:flex-row gap-12 items-center justify-center">
          
          <div class="hidden lg:block lg:w-1/3 gsap-visual">
            <div class="relative h-[450px] flex items-center justify-center [perspective:1000px]">
              <div class="w-[120px] h-[120px] relative [transform-style:preserve-3d] animate-[rotateCube_25s_infinite_linear]">
                <div class="absolute w-[120px] h-[120px] border-2 border-[#3b82f6]/30 flex items-center justify-center text-[45px] rounded-[24px] shadow-[inset_0_0_30px_rgba(59,130,246,0.05)] bg-white/95 dark:bg-[#000524]/90 [transform:translateZ(60px)] transition-colors duration-500">🔷</div>
                <div class="absolute w-[120px] h-[120px] border-2 border-[#3b82f6]/30 flex items-center justify-center text-[45px] rounded-[24px] shadow-[inset_0_0_30px_rgba(59,130,246,0.05)] bg-white/95 dark:bg-[#000524]/90 [transform:rotateY(180deg)_translateZ(60px)] transition-colors duration-500">⚙️</div>
                <div class="absolute w-[120px] h-[120px] border-2 border-[#3b82f6]/30 flex items-center justify-center text-[45px] rounded-[24px] shadow-[inset_0_0_30px_rgba(59,130,246,0.05)] bg-white/95 dark:bg-[#000524]/90 [transform:rotateY(90deg)_translateZ(60px)] transition-colors duration-500">🚀</div>
                <div class="absolute w-[120px] h-[120px] border-2 border-[#3b82f6]/30 flex items-center justify-center text-[45px] rounded-[24px] shadow-[inset_0_0_30px_rgba(59,130,246,0.05)] bg-white/95 dark:bg-[#000524]/90 [transform:rotateY(-90deg)_translateZ(60px)] transition-colors duration-500">🛡️</div>
                <div class="absolute w-[120px] h-[120px] border-2 border-[#3b82f6]/30 flex items-center justify-center text-[45px] rounded-[24px] shadow-[inset_0_0_30px_rgba(59,130,246,0.05)] bg-white/95 dark:bg-[#000524]/90 [transform:rotateX(90deg)_translateZ(60px)] transition-colors duration-500">💎</div>
                <div class="absolute w-[120px] h-[120px] border-2 border-[#3b82f6]/30 flex items-center justify-center text-[45px] rounded-[24px] shadow-[inset_0_0_30px_rgba(59,130,246,0.05)] bg-white/95 dark:bg-[#000524]/90 [transform:rotateX(-90deg)_translateZ(60px)] transition-colors duration-500">⚡</div>
              </div>
              
              <div class="absolute bottom-[5%] left-0 bg-white dark:bg-white/[0.04] px-[30px] py-[20px] rounded-[28px] shadow-[0_20px_40px_rgba(0,0,0,0.05)] flex flex-col border border-white dark:border-white/10 animate-[float_6s_ease-in-out_infinite] transition-colors duration-500">
                <span class="font-black text-[#3b82f6] text-[28px] leading-none">24/7</span>
                <span class="text-[11px] uppercase text-[#64748b] dark:text-[#cbd5e1] font-extrabold tracking-[1.5px] mt-1.5 transition-colors duration-500">Live Expert Support</span>
              </div>
            </div>
          </div>

          <div 
            class="gsap-form flex-1 w-full max-w-[750px] p-8 md:p-[50px] rounded-[40px] relative overflow-hidden [transform-style:preserve-3d] transition-colors duration-500 bg-white/75 dark:bg-white/[0.03] backdrop-blur-[30px] border border-white dark:border-white/10 shadow-[0_40px_100px_-20px_rgba(59,132,246,0.15)]"
            @mousemove="handleTilt"
            @mouseleave="resetTilt"
            ref="formCard"
          >
            <div class="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500" ref="formGlow"></div>
            
            <form v-if="!isSubmitted" @submit.prevent="handleSubmit" class="space-y-6 relative z-10">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex flex-col gap-2 relative">
                  <label class="text-[13px] font-bold text-[#64748b] dark:text-[#cbd5e1] ml-1 transition-colors duration-500">Full Name</label>
                  <input v-model="formData.name" type="text" placeholder="John Doe" required class="w-full px-5 py-4 rounded-[18px] text-[15px] outline-none transition-all duration-300 bg-white dark:bg-white/[0.04] border border-[#e2e8f0] dark:border-white/10 text-slate-800 dark:text-white focus:border-[#3b82f6] focus:translate-y-[-2px] focus:shadow-[0_0_0_5px_rgba(59,130,246,0.08)]" />
                </div>
                <div class="flex flex-col gap-2 relative">
                  <label class="text-[13px] font-bold text-[#64748b] dark:text-[#cbd5e1] ml-1 transition-colors duration-500">Company Email</label>
                  <input v-model="formData.email" type="email" placeholder="john@company.com" required class="w-full px-5 py-4 rounded-[18px] text-[15px] outline-none transition-all duration-300 bg-white dark:bg-white/[0.04] border border-[#e2e8f0] dark:border-white/10 text-slate-800 dark:text-white focus:border-[#3b82f6] focus:translate-y-[-2px] focus:shadow-[0_0_0_5px_rgba(59,130,246,0.08)]" />
                </div>
              </div>

              <div class="flex flex-col gap-2 relative">
                <label class="text-[13px] font-bold text-[#64748b] dark:text-[#cbd5e1] ml-1 transition-colors duration-500">Service Interest</label>
                <div>
                  <select v-model="formData.service" class="w-full px-5 py-4 rounded-[18px] text-[15px] outline-none transition-all duration-300 bg-white dark:bg-white/[0.04] border border-[#e2e8f0] dark:border-white/10 text-slate-800 dark:text-white focus:border-[#3b82f6] focus:translate-y-[-2px] focus:shadow-[0_0_0_5px_rgba(59,130,246,0.08)]">
                    <option class="bg-white dark:bg-[#000524] text-slate-800 dark:text-white">Enterprise ERP Solution</option>
                    <option class="bg-white dark:bg-[#000524] text-slate-800 dark:text-white">Network & Infrastructure</option>
                    <option class="bg-white dark:bg-[#000524] text-slate-800 dark:text-white">Fleet Management System</option>
                    <option class="bg-white dark:bg-[#000524] text-slate-800 dark:text-white">Cyber Security</option>
                    <option class="bg-white dark:bg-[#000524] text-slate-800 dark:text-white">Cloud Transformation</option>
                  </select>
                </div>
              </div>

              <div class="flex flex-col gap-2 relative">
                <label class="text-[13px] font-bold text-[#64748b] dark:text-[#cbd5e1] ml-1 transition-colors duration-500">Project Details</label>
                <textarea v-model="formData.details" rows="4" placeholder="Tell us about your digital infrastructure needs..." class="w-full px-5 py-4 rounded-[18px] text-[15px] outline-none transition-all duration-300 bg-white dark:bg-white/[0.04] border border-[#e2e8f0] dark:border-white/10 text-slate-800 dark:text-white focus:border-[#3b82f6] focus:translate-y-[-2px] focus:shadow-[0_0_0_5px_rgba(59,130,246,0.08)]"></textarea>
              </div>

              <button type="submit" class="w-full p-5 bg-gradient-to-br from-[#3b82f6] to-[#6366f1] rounded-[22px] text-white font-extrabold flex items-center justify-center gap-3 border-none cursor-pointer transition-all hover:-translate-y-1 hover:scale-[1.02] shadow-[0_20px_40px_-10px_rgba(99,102,241,0.35)] hover:shadow-[0_30px_60px_-10px_rgba(99,102,241,0.45)] disabled:opacity-60 disabled:cursor-wait" :disabled="isLoading">
                <span v-if="!isLoading" class="flex items-center gap-2">
                  Schedule Consultation
                  <ArrowRight class="w-5 h-5" />
                </span>
                <span v-else>Processing Request...</span>
              </button>
            </form>

            <div v-else class="success-content relative z-10 text-center py-10 transition-colors duration-500">
              <div class="flex justify-center mb-6">
                <div class="w-24 h-24 bg-blue-50 dark:bg-blue-900/40 rounded-full flex items-center justify-center animate-pulse transition-colors duration-500">
                  <CheckCircle class="w-16 h-16 text-blue-500 dark:text-blue-400" />
                </div>
              </div>
              <h3 class="text-[32px] font-extrabold text-slate-800 dark:text-white mb-2 transition-colors duration-500">Request Received!</h3>
              <p class="text-slate-500 dark:text-[#cbd5e1] mb-8 max-w-sm mx-auto transition-colors duration-500">
                Thank you, <strong>{{ formData.name }}</strong>. Our expert team will reach out to <strong>{{ formData.email }}</strong> to finalize your roadmap.
              </p>
              <button @click="resetForm" class="px-8 py-3 bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-xl font-bold text-slate-600 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-500">
                Send New Request
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '../Navbar.vue'
import FooterSection from '../FooterSection.vue'
import { gsap } from 'gsap'
import { ArrowRight, CheckCircle } from 'lucide-vue-next'

// State
const formCard = ref(null)
const formGlow = ref(null)
const isSubmitted = ref(false)
const isLoading = ref(false)

const formData = ref({
  name: '',
  email: '',
  service: 'Enterprise ERP Solution',
  details: ''
})

// 3D Tilt & Glow Effect
const handleTilt = (e) => {
  const card = formCard.value
  const glow = formGlow.value
  if (!card) return

  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  const rotateY = (x / rect.width - 0.5) * 10
  const rotateX = -(y / rect.height - 0.5) * 10

  gsap.to(card, {
    rotationY: rotateY,
    rotationX: rotateX,
    transformPerspective: 1000,
    ease: 'power2.out',
    duration: 0.5
  })

  if (glow) {
    glow.style.opacity = '1'
    glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(59, 130, 246, 0.1), transparent 80%)`
  }
}

const resetTilt = () => {
  gsap.to(formCard.value, {
    rotationY: 0,
    rotationX: 0,
    duration: 1,
    ease: 'elastic.out(1, 0.5)'
  })
  if (formGlow.value) formGlow.value.style.opacity = '0'
}

// Actions
const handleSubmit = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    isSubmitted.value = true
    
    // Smooth transition for success message
    setTimeout(() => {
      gsap.from('.success-content', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'expo.out'
      })
    }, 50)
  }, 1800)
}

const resetForm = () => {
  isSubmitted.value = false
  formData.value = {
    name: '',
    email: '',
    service: 'Enterprise ERP Solution',
    details: ''
  }
}

// Animations on Load
onMounted(() => {
  const tl = gsap.timeline()
  tl.from('.gsap-header', { y: 60, opacity: 0, duration: 1.2, ease: 'expo.out' })
    .from('.gsap-form', { scale: 0.9, opacity: 0, duration: 1, ease: 'power4.out' }, '-=0.8')
    .from('.gsap-visual', { x: -40, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.6')
})
</script>

<style scoped>
@keyframes rotateCube {
  from { transform: rotateX(0) rotateY(0) rotateZ(0); }
  to { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(-1deg); }
  50% { transform: translateY(-25px) rotate(1.5deg); }
}
</style>