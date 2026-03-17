<template>
  <div class="min-h-screen bg-[#f8fafc] dark:bg-[#020617] selection:bg-rose-500 selection:text-white font-sans transition-colors duration-500">
    
    <section id="services" class="relative w-full py-24 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-500/[0.04] rounded-full blur-[120px]"></div>
        <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-[120px]"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="flex flex-col items-center text-center mb-20 space-y-5" ref="headRef">
          <div class="px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-md">
            <span class="text-[10px] font-black uppercase tracking-[0.3em] text-rose-600 dark:text-rose-400">Solution Ecosystem</span>
          </div>
          <h2 class="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic leading-none">
            OUR <span class="text-transparent bg-clip-text bg-gradient-to-b from-rose-500 to-rose-800">SOLUTIONS.</span>
          </h2>
          <p class="max-w-xl text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">
            PT SDI delivers end-to-end IT ecosystems designed to scale with enterprise-grade reliability and high-level security protocols.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="group relative card-scene"
            @mousemove="onTilt($event, index)"
            @mouseleave="onReset(index)"
            :ref="el => { if (el) cardEls[index] = el }"
          >
            <div class="relative h-full bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[40px] p-8 md:p-10 transition-all duration-500 overflow-hidden flex flex-col hover:border-rose-500/40 shadow-xl shadow-slate-200/50 dark:shadow-none">
              
              <div class="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" :style="glowStyles[index]"></div>
              
              <div class="flex justify-between items-start mb-8">
                <div class="w-14 h-14 rounded-2xl bg-slate-900 dark:bg-rose-600 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-xl shadow-rose-500/20">
                  <component :is="service.icon" class="w-7 h-7" />
                </div>
                <a :href="service.docLink" class="group/link flex items-center gap-2 p-2 rounded-full hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors duration-300">
                   <span class="text-[10px] font-bold uppercase tracking-tighter text-rose-600 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">
                    View Docs
                  </span>
                  <div class="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center bg-white dark:bg-white/5 group-hover/link:border-rose-500 transition-colors duration-300">
                    <ArrowUpRight class="w-5 h-5 text-slate-400 group-hover/link:text-rose-500 transition-transform group-hover/link:rotate-45" />
                  </div>
                </a>
              </div>

              <h3 class="text-2xl font-bold text-slate-900 dark:text-white uppercase italic tracking-tighter mb-4">
                {{ service.title }}
              </h3>
              <p class="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-10 flex-grow">
                {{ service.description }}
              </p>

              <div class="pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <span class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Enterprise Ready</span>
                <div class="flex gap-1">
                  <div class="w-1.5 h-1.5 rounded-full bg-rose-500/30"></div>
                  <div class="w-1.5 h-1.5 rounded-full bg-rose-500/60"></div>
                  <div class="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="why-sdi" class="relative w-full py-32 bg-slate-50/50 dark:bg-[#040a1f] border-t border-slate-200 dark:border-white/5 overflow-hidden">
      <div class="container mx-auto px-6 relative z-10">
        <div class="flex flex-col lg:flex-row gap-16 lg:items-start">
          
          <div class="lg:w-1/3 space-y-8 lg:sticky lg:top-32" ref="faqTitleRef">
            <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20">
              <span class="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              <span class="text-[10px] font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400">Strategic Advantage</span>
            </div>
            <h2 class="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic leading-[0.9]">
              DRIVING <br/> 
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">EXCELLENCE.</span>
            </h2>
            <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
              We build resilient digital foundations to ensure your business sustainability through precise system integration and military-grade security standards.
            </p>
            <div class="flex items-center gap-6 pt-4">
              <div>
                <div class="text-3xl font-black text-slate-900 dark:text-white">99.9%</div>
                <div class="text-[10px] uppercase tracking-widest font-bold text-slate-400">Uptime Rate</div>
              </div>
              <div class="w-px h-10 bg-slate-200 dark:bg-white/10"></div>
              <div>
                <div class="text-3xl font-black text-slate-900 dark:text-white">24/7</div>
                <div class="text-[10px] uppercase tracking-widest font-bold text-slate-400">Global Support</div>
              </div>
            </div>
          </div>

          <div class="lg:w-2/3 space-y-4">
            <div v-for="(faq, index) in faqs" :key="index" class="faq-item group">
              <div 
                @click="toggleFaq(index)"
                :class="[
                  'cursor-pointer transition-all duration-500 rounded-[32px] border p-6 md:p-8',
                  faq.isOpen 
                    ? 'bg-white dark:bg-white/[0.04] border-rose-500/30 shadow-2xl shadow-rose-500/10' 
                    : 'bg-white/40 dark:bg-transparent border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20'
                ]"
              >
                <div class="flex justify-between items-center gap-6">
                  <div class="flex gap-6 items-center">
                    <span class="text-rose-500/30 font-black text-xl italic tracking-tighter">0{{ index + 1 }}</span>
                    <h3 :class="['text-sm md:text-base font-bold uppercase tracking-tight transition-colors duration-300', faq.isOpen ? 'text-rose-500' : 'text-slate-700 dark:text-slate-200']">
                      {{ faq.question }}
                    </h3>
                  </div>
                  <div class="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center transition-all duration-500" :class="faq.isOpen ? 'rotate-180 bg-rose-500 border-rose-500 text-white' : 'text-slate-400'">
                    <ChevronDown class="w-5 h-5" />
                  </div>
                </div>
                <div class="overflow-hidden transition-all duration-500 ease-in-out" :style="{ maxHeight: faq.isOpen ? '200px' : '0px', opacity: faq.isOpen ? '1' : '0' }">
                  <div class="pl-14 pt-6">
                    <p class="text-[13px] md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium max-w-2xl">
                      {{ faq.answer }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  ShieldCheck, Layers, Settings, Radio, 
  LayoutDashboard, HardDrive, ChevronDown, ArrowUpRight 
} from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

// Refs for GSAP
const headRef = ref(null)
const faqTitleRef = ref(null)
const cardEls = ref([])
const glowStyles = reactive([])

// Data: English Services with Documentation Links
const services = [
  { title: 'ERP Integration', description: 'Centralized management for logistics, assets, and finance tailored for high-complexity operations.', icon: LayoutDashboard, docLink: '/docs/erp' },
  { title: 'Cloud Systems', description: 'Ultra-secure corporate email and encrypted file servers for high-stakes business data.', icon: Layers, docLink: '/docs/cloud' },
  { title: 'Fleet Tracking', description: 'Real-time mobility solutions using IoT for precision logistics and automation.', icon: Radio, docLink: '/docs/fleet' },
  { title: 'Cyber Security', description: 'Military-grade network protocols, firewall management, and smart surveillance systems.', icon: ShieldCheck, docLink: '/docs/cyber' },
  { title: 'Smart Productivity', description: 'Integrated IP-PBX, Zoom Enterprise, and high-performance digital collaboration tools.', icon: Settings, docLink: '/docs/productivity' },
  { title: 'Infra Support', description: 'Full hardware lifecycle, biometric systems, and radio frequency management.', icon: HardDrive, docLink: '/docs/infra' }
]

// Data: English FAQs (Strategic Advantage)
const faqs = ref([
  { 
    question: "What is the core strategic value of PT SDI?", 
    answer: "We integrate 'interoperable' IT ecosystems that eliminate data silos and maximize operational efficiency through unified architecture and automated workflows.", 
    isOpen: true 
  },
  { 
    question: "How do you ensure infrastructure scalability?", 
    answer: "Every solution is engineered with a modular framework, ensuring that the systems built today remain upgradeable and capable of handling future volume growth.", 
    isOpen: false 
  },
  { 
    question: "What post-implementation support do you provide?", 
    answer: "We offer SLA-based dedicated support teams and 24/7 proactive monitoring to ensure zero downtime for your mission-critical infrastructure.", 
    isOpen: false 
  },
  { 
    question: "How do you handle data security standards?", 
    answer: "We adopt multi-layered security protocols, from AES-256 encryption to AI-driven intrusion detection systems, ensuring global protection for your digital assets.", 
    isOpen: false 
  }
])

// Initializing glow states for each card
services.forEach(() => glowStyles.push({ background: '' }))

// UI Logic
const toggleFaq = (index) => {
  faqs.value.forEach((item, i) => { if (i !== index) item.isOpen = false })
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}

const onTilt = (e, i) => {
  const card = cardEls.value[i]; if (!card) return
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  gsap.to(card, {
    rotateX: -((y / rect.height) - 0.5) * 10,
    rotateY: ((x / rect.width) - 0.5) * 10,
    scale: 1.02, duration: 0.4, ease: 'power2.out', transformPerspective: 1000
  })
  glowStyles[i].background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(244, 63, 94, 0.15), transparent 80%)`
}

const onReset = (i) => {
  gsap.to(cardEls.value[i], { rotateX: 0, rotateY: 0, scale: 1, duration: 1, ease: 'elastic.out(1, 0.75)' })
}

// Lifecycle Hooks for Animations
let ctx
onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from(headRef.value, { y: 30, opacity: 0, duration: 1, ease: 'power3.out' })
    gsap.from('.card-scene', { 
        y: 60, opacity: 0, duration: 0.8, stagger: 0.15, 
        scrollTrigger: { trigger: '#services', start: 'top 75%' }
    })
    gsap.from(faqTitleRef.value, { x: -40, opacity: 0, duration: 1, scrollTrigger: { trigger: '#why-sdi', start: 'top 70%' }})
    gsap.from('.faq-item', { 
        opacity: 0, x: 30, duration: 0.6, stagger: 0.12, 
        scrollTrigger: { trigger: '.faq-item', start: 'top 85%' }
    })
  })
})

onUnmounted(() => ctx?.revert())
</script>

<style scoped>
.card-scene { perspective: 2000px; }
</style>