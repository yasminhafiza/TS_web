<template>
  <div class="bg-slate-50 dark:bg-[#000839] text-slate-900 dark:text-white transition-colors duration-500 min-h-screen relative overflow-x-hidden">
    <div class="absolute inset-0 pointer-events-none opacity-20 dark:opacity-100 transition-opacity duration-500 bg-[size:50px_50px] bg-[linear-gradient(rgba(255,30,66,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,30,66,0.03)_1px,transparent_1px)] [transform:rotateX(60deg)_translateY(-20%)_scale(2.5)] origin-top [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" aria-hidden="true"></div>
    
    <div class="ambient-layer z-0">
      <div class="absolute rounded-full blur-[120px] pointer-events-none opacity-20 dark:opacity-40 transition-opacity duration-500 w-[600px] h-[600px] bg-[#ff1e42]/10 top-[-10%] left-[-10%]"></div>
      <div class="absolute rounded-full blur-[120px] pointer-events-none opacity-20 dark:opacity-40 transition-opacity duration-500 w-[500px] h-[500px] bg-[#1e3a8a]/15 bottom-[10%] right-[-5%]"></div>
    </div>

    <Navbar />

    <section class="pt-[140px] pb-[100px] relative z-10">
      <div class="container relative z-10 mx-auto px-6 max-w-7xl">
        
        <div class="mb-8 gsap-header">
          <router-link 
            to="/" 
            class="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[2px] text-slate-500 dark:text-slate-400 hover:text-[#ff1e42] transition-all group"
          >
            <div class="w-10 h-10 rounded-full border border-black/5 dark:border-white/10 flex items-center justify-center bg-white/50 dark:bg-white/5 backdrop-blur-md group-hover:border-[#ff1e42]/30 group-hover:bg-[#ff1e42]/5 transition-all">
              <ArrowLeft class="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </div>
            <span>Back to Home</span>
          </router-link>
        </div>

        <div class="text-center mb-16 gsap-header">
          <div class="inline-block px-[18px] py-1.5 bg-[#ff1e42]/5 dark:bg-[#ff1e42]/10 border border-[#ff1e42]/10 dark:border-[#ff1e42]/20 rounded-[100px] text-[#ff1e42] text-[10px] font-extrabold uppercase tracking-[4px] mb-5">Consultation Center</div>
          <h1 class="uppercase text-[clamp(2.2rem,5vw,4rem)] font-black leading-none tracking-[-0.04em] text-slate-900 dark:text-white transition-colors duration-500">
            Strategic <span class="bg-gradient-to-r from-[#ff1e42] to-[#ff8095] bg-clip-text text-transparent">Transformation</span>
          </h1>
          <p class="text-slate-600 dark:text-[#94a3b8] text-[1.05rem] max-w-[580px] mx-auto mt-6 leading-relaxed transition-colors duration-500">
            Scale your digital infrastructure with expert-led guidance. Choose your preferred way to connect with our team.
          </p>
        </div>

        <div class="flex flex-col lg:flex-row gap-8 items-start justify-center">
          
          <div class="w-full lg:w-[380px] space-y-6 gsap-visual">
            <div class="relative overflow-hidden group bg-white/80 dark:bg-white/[0.02] backdrop-blur-[25px] border border-black/5 dark:border-white/10 rounded-[28px] h-[450px] flex items-center justify-center [perspective:1000px] transition-all duration-500">
              <div class="w-[90px] h-[90px] relative [transform-style:preserve-3d] animate-[rotateCube_24s_infinite_linear]">
                <div class="absolute w-[90px] h-[90px] bg-white/90 dark:bg-[#000524]/90 border-[1.5px] border-[#ff1e42] flex items-center justify-center text-[36px] rounded-xl [transform:translateZ(45px)] transition-colors duration-500">⚡</div>
                <div class="absolute w-[90px] h-[90px] bg-white/90 dark:bg-[#000524]/90 border-[1.5px] border-[#ff1e42] flex items-center justify-center text-[36px] rounded-xl [transform:rotateY(180deg)_translateZ(45px)] transition-colors duration-500">⚙️</div>
                <div class="absolute w-[90px] h-[90px] bg-white/90 dark:bg-[#000524]/90 border-[1.5px] border-[#ff1e42] flex items-center justify-center text-[36px] rounded-xl [transform:rotateY(90deg)_translateZ(45px)] transition-colors duration-500">🛡️</div>
                <div class="absolute w-[90px] h-[90px] bg-white/90 dark:bg-[#000524]/90 border-[1.5px] border-[#ff1e42] flex items-center justify-center text-[36px] rounded-xl [transform:rotateY(-90deg)_translateZ(45px)] transition-colors duration-500">🚀</div>
                <div class="absolute w-[90px] h-[90px] bg-white/90 dark:bg-[#000524]/90 border-[1.5px] border-[#ff1e42] flex items-center justify-center text-[36px] rounded-xl [transform:rotateX(90deg)_translateZ(45px)] transition-colors duration-500">💎</div>
                <div class="absolute w-[90px] h-[90px] bg-white/90 dark:bg-[#000524]/90 border-[1.5px] border-[#ff1e42] flex items-center justify-center text-[36px] rounded-xl [transform:rotateX(-90deg)_translateZ(45px)] transition-colors duration-500">📊</div>
              </div>
              <div class="absolute bottom-5 right-5 bg-white/80 dark:bg-white/[0.05] border border-black/5 dark:border-white/10 px-[22px] py-[14px] rounded-[18px] backdrop-blur-md flex flex-col animate-[float_5s_ease-in-out_infinite] transition-colors duration-500">
                <span class="font-black text-[#ff1e42] text-[22px]">24/7</span>
                <span class="text-[11px] uppercase text-slate-600 dark:text-[#94a3b8] font-extrabold tracking-[1.5px] mt-1 transition-colors duration-500">Live Expert Support</span>
              </div>
            </div>

            <div 
              class="bg-white/80 dark:bg-white/[0.02] backdrop-blur-[25px] border border-black/5 dark:border-white/10 rounded-[28px] p-8 group cursor-pointer border-l-4 border-l-green-500/50 hover:border-l-green-500 transition-all duration-500" 
              @click="openWhatsApp"
            >
              <div class="flex items-center gap-5 mb-4">
                <div class="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                  <MessageCircle class="w-7 h-7" />
                </div>
                <div>
                  <h4 class="font-bold text-slate-900 dark:text-white text-lg transition-colors duration-500">Instant Chat</h4>
                  <div class="flex items-center gap-2">
                    <span class="relative flex h-2 w-2">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <p class="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Online Now</p>
                  </div>
                </div>
              </div>
              <p class="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors duration-500">Need a fast response? Talk to our technical lead directly via WhatsApp.</p>
              <div class="inline-flex items-center gap-2 text-[#ff1e42] text-xs font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                Connect via WhatsApp <ArrowRight class="w-4 h-4" />
              </div>
            </div>
          </div>

          <div 
            class="gsap-form flex-1 w-full max-w-[800px] bg-white/80 dark:bg-white/[0.02] backdrop-blur-[40px] border border-black/5 dark:border-white/10 rounded-[40px] p-[35px] lg:p-[50px] transition-colors duration-500"
            @mousemove="handleTilt"
            @mouseleave="resetTilt"
            ref="formCard"
          >
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-black/5 dark:border-white/5 pb-8 transition-colors duration-500">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-[#ff1e42]/10 flex items-center justify-center text-[#ff1e42]">
                  <CalendarCheck class="w-6 h-6" />
                </div>
                <div>
                  <h3 class="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight transition-colors duration-500">Schedule a Session</h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest transition-colors duration-500">Formal Project Consultation</p>
                </div>
              </div>
              <div class="text-[10px] bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 py-1 rounded-md text-slate-600 dark:text-slate-400 transition-colors duration-500">
                Est. 30-45 Mins
              </div>
            </div>

            <form @submit.prevent="submitConsultation" class="space-y-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex flex-col gap-2">
                  <label class="text-[10px] font-extrabold text-[#ff1e42] uppercase tracking-[1.5px] flex items-center gap-1.5"><User class="w-3 h-3" /> Full Name</label>
                  <input type="text" v-model="form.name" placeholder="e.g. Alexander Pierce" required class="w-full px-[18px] py-4 bg-black/5 dark:bg-white/[0.04] border border-black/5 dark:border-white/[0.08] rounded-[14px] text-[14px] text-slate-900 dark:text-white outline-none transition-all duration-500 focus:border-[#ff1e42]" />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-[10px] font-extrabold text-[#ff1e42] uppercase tracking-[1.5px] flex items-center gap-1.5"><Mail class="w-3 h-3" /> Corporate Email</label>
                  <input type="email" v-model="form.email" placeholder="alex@company.com" required class="w-full px-[18px] py-4 bg-black/5 dark:bg-white/[0.04] border border-black/5 dark:border-white/[0.08] rounded-[14px] text-[14px] text-slate-900 dark:text-white outline-none transition-all duration-500 focus:border-[#ff1e42]" />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex flex-col gap-2">
                  <label class="text-[10px] font-extrabold text-[#ff1e42] uppercase tracking-[1.5px] flex items-center gap-1.5"><Calendar class="w-3 h-3" /> Preferred Date</label>
                  <input type="date" v-model="form.date" required class="w-full px-[18px] py-4 bg-black/5 dark:bg-white/[0.04] border border-black/5 dark:border-white/[0.08] rounded-[14px] text-[14px] text-slate-900 dark:text-white outline-none transition-all duration-500 focus:border-[#ff1e42]" />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-[10px] font-extrabold text-[#ff1e42] uppercase tracking-[1.5px] flex items-center gap-1.5"><Cpu class="w-3 h-3" /> Service Interest</label>
                  <div class="relative">
                    <select v-model="form.service" required class="w-full px-[18px] py-4 bg-black/5 dark:bg-white/[0.04] border border-black/5 dark:border-white/[0.08] rounded-[14px] text-[14px] text-slate-900 dark:text-white outline-none transition-all duration-500 focus:border-[#ff1e42] appearance-none cursor-pointer">
                      <option value="erp" class="bg-white dark:bg-[#000b3d] text-slate-900 dark:text-white py-2.5">Enterprise ERP Solution</option>
                      <option value="infra" class="bg-white dark:bg-[#000b3d] text-slate-900 dark:text-white py-2.5">Network & Infrastructure</option>
                      <option value="fleet" class="bg-white dark:bg-[#000b3d] text-slate-900 dark:text-white py-2.5">Fleet Management System</option>
                      <option value="cyber" class="bg-white dark:bg-[#000b3d] text-slate-900 dark:text-white py-2.5">Cyber Security</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500 dark:text-white/50">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
              </div>

              <transition name="fade-slide">
                <div v-if="selectedServiceInfo" class="bg-[#ff1e42]/5 dark:bg-gradient-to-br dark:from-[#ff1e42]/5 dark:to-white/[0.02] border border-dashed border-[#ff1e42]/20 rounded-2xl p-4 -mt-2 transition-all duration-500">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 bg-[#ff1e42]/10 rounded-xl flex items-center justify-center text-[#ff1e42] shrink-0">
                      <component :is="selectedServiceInfo.icon" class="w-5 h-5" />
                    </div>
                    <div class="flex-1">
                      <div class="flex justify-between items-center mb-1">
                        <span class="text-[10px] font-black uppercase tracking-widest text-[#ff1e42]">Service Insight</span>
                        <span class="text-[10px] bg-green-500/20 text-green-500 dark:text-green-400 px-2 py-0.5 rounded font-bold">Available</span>
                      </div>
                      <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-500">{{ selectedServiceInfo.description }}</p>
                    </div>
                  </div>
                </div>
              </transition>

              <div class="flex flex-col gap-2">
                <label class="text-[10px] font-extrabold text-[#ff1e42] uppercase tracking-[1.5px] flex items-center gap-1.5"><FileText class="w-3 h-3" /> Brief Project Description</label>
                <textarea v-model="form.desc" rows="4" placeholder="Briefly describe your requirements..." class="w-full px-[18px] py-4 bg-black/5 dark:bg-white/[0.04] border border-black/5 dark:border-white/[0.08] rounded-[14px] text-[14px] text-slate-900 dark:text-white outline-none transition-all duration-500 focus:border-[#ff1e42]"></textarea>
              </div>

              <button type="submit" class="group relative w-full p-[22px] bg-[#ff1e42] rounded-2xl text-white font-black uppercase text-[12px] tracking-[3px] border-none cursor-pointer overflow-hidden shadow-[0_15px_35px_rgba(255,30,66,0.35)] disabled:opacity-60 disabled:cursor-wait" :disabled="isSubmitting">
                <span class="relative z-10 flex items-center justify-center gap-3">
                  {{ isSubmitting ? 'Processing...' : 'Confirm Schedule' }}
                  <ArrowRight v-if="!isSubmitting" class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import Navbar from '../Navbar.vue'
import FooterSection from '../FooterSection.vue'
import { 
  MessageCircle, CalendarCheck, ArrowRight, ArrowLeft,
  User, Mail, Calendar, Cpu, FileText,
  ShieldAlert, Network, Truck, Database
} from 'lucide-vue-next'
import { gsap } from 'gsap'

const formCard = ref(null)
const isSubmitting = ref(false)
const form = reactive({
  name: '',
  email: '',
  date: '',
  service: 'erp',
  desc: ''
})

const serviceDetails = {
  erp: {
    description: "Modular system to manage core business processes in real-time.",
    icon: Database
  },
  infra: {
    description: "Robust networking solutions for high-performance enterprise connectivity.",
    icon: Network
  },
  fleet: {
    description: "Advanced GPS and telemetry for efficient logistics management.",
    icon: Truck
  },
  cyber: {
    description: "End-to-end security audit and threat mitigation strategies.",
    icon: ShieldAlert
  }
}

const selectedServiceInfo = computed(() => serviceDetails[form.service])

const openWhatsApp = () => {
  const phone = '628123456789'
  window.open(`https://wa.me/${phone}`, '_blank')
}

const submitConsultation = async () => {
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  alert(`Success! Schedule confirmed for ${form.name}. We will contact you at ${form.email}.`)
  isSubmitting.value = false
}

const handleTilt = (e) => {
  if (!formCard.value) return
  const card = formCard.value
  const rect = card.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5
  gsap.to(card, {
    rotationY: x * 6,
    rotationX: -y * 6,
    transformPerspective: 1500,
    ease: 'power3.out',
    duration: 0.6
  })
}

const resetTilt = () => {
  gsap.to(formCard.value, { 
    rotationY: 0, 
    rotationX: 0, 
    duration: 1, 
    ease: 'elastic.out(1, 0.5)' 
  })
}

onMounted(() => {
  window.scrollTo(0, 0)
  const tl = gsap.timeline()
  tl.from('.gsap-header', { y: 40, opacity: 0, duration: 1, ease: 'expo.out' })
    .from('.gsap-visual', { x: -40, opacity: 0, duration: 1, ease: 'expo.out' }, '-=0.7')
    .from('.gsap-form', { x: 40, opacity: 0, duration: 1, ease: 'expo.out' }, '-=0.9')
})
</script>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.4s ease;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@keyframes rotateCube {
  from { transform: rotateX(0) rotateY(0) rotateZ(0); }
  to { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
}

@keyframes float { 
  0%, 100% { transform: translateY(0); } 
  50% { transform: translateY(-12px); } 
}
</style>