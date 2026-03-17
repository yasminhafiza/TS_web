<template>
  <section id="services" class="py-32 bg-slate-50 dark:bg-[#020410] relative overflow-hidden transition-colors duration-700">
    
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-[10%] left-[5%] w-32 h-32 bg-gradient-to-br from-rose-500/20 to-orange-500/20 rounded-3xl rotate-12 animate-float-slow blur-sm"></div>
      <div class="absolute bottom-[20%] right-[10%] w-48 h-48 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full animate-float blur-md"></div>
      
      <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-500/[0.05] dark:bg-rose-500/[0.08] rounded-full blur-[120px]"></div>
      <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/[0.05] dark:bg-blue-600/[0.08] rounded-full blur-[120px]"></div>
      
      <div class="absolute inset-0 opacity-[0.2] dark:opacity-[0.4]" 
           style="background-image: radial-gradient(#64748b 0.5px, transparent 0.5px); background-size: 40px 40px;">
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      
      <div class="flex flex-col items-center text-center mb-24 space-y-6">
        <div class="px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-md">
          <span class="text-[10px] font-black uppercase tracking-[0.3em] text-rose-600 dark:text-rose-400">Expertise & Solutions</span>
        </div>
        <h2 class="text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.8]">
          OUR <span class="text-transparent bg-clip-text bg-gradient-to-b from-rose-500 to-rose-700">SERVICES.</span>
        </h2>
        <p class="max-w-xl text-slate-500 dark:text-slate-400 text-lg font-medium">
          Integrated technology ecosystem designed to empower Indonesia's leading industries.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          class="group relative"
          @mousemove="handleCardInteraction($event, index)"
          @mouseleave="resetCardInteraction(index)"
          :ref="el => { if (el) cardRefs[index] = el }"
        >
          <div class="relative h-full bg-white/70 dark:bg-white/[0.03] backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-[40px] p-8 transition-all duration-500 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] group-hover:shadow-rose-500/20 group-hover:dark:border-rose-500/40 overflow-hidden flex flex-col">
            
            <div 
              class="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              :style="glowStyles[index]"
            ></div>

            <div class="relative z-10 mb-8">
              <div class="relative h-48 w-full rounded-[24px] overflow-hidden mb-6 shadow-inner">
                <img :src="service.image" :alt="service.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div class="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white dark:bg-rose-500 flex items-center justify-center text-slate-900 dark:text-white shadow-2xl transition-transform duration-500 group-hover:rotate-6">
                  <component :is="service.icon" class="w-6 h-6" />
                </div>
              </div>
              <span class="text-[9px] font-black uppercase tracking-widest text-rose-500">
                {{ service.category }}
              </span>
            </div>

            <div class="relative z-10 flex-grow space-y-4">
              <h3 class="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                {{ service.title }}
              </h3>
              <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed italic border-l-2 border-slate-100 dark:border-white/10 pl-4 group-hover:border-rose-500 transition-colors">
                {{ service.description }}
              </p>
            </div>

            <div class="relative z-10 mt-10 flex flex-wrap gap-2">
              <span v-for="tag in service.tags" :key="tag" 
                class="px-3 py-1 text-[9px] font-black rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-300 border border-slate-200 dark:border-white/5 uppercase tracking-tighter">
                {{ tag }}
              </span>
            </div>

            <button @click="openCard = openCard === index ? null : index" 
              class="relative z-20 mt-8 w-full py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-rose-600 dark:hover:bg-rose-500 hover:text-white transition-all transform active:scale-95 shadow-lg">
              {{ openCard === index ? 'Collapse Info' : 'Explore Details' }}
            </button>

            <div v-if="openCard === index" class="mt-8 pt-8 border-t border-slate-100 dark:border-white/10 space-y-6 animate-slide-down relative z-10">
              <div v-for="detail in service.details" :key="detail.label" class="space-y-3">
                <h4 class="text-[10px] font-black text-rose-500 uppercase tracking-widest">{{ detail.label }}</h4>
                <div class="grid grid-cols-1 gap-2">
                  <div v-for="item in detail.items" :key="item" class="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                    <div class="w-1 h-1 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.6)]"></div>
                    {{ item }}
                  </div>
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
import { ref, reactive } from 'vue'
import { gsap } from 'gsap'
import { 
  LayoutGrid, Building2, Smartphone, 
  Zap, Network, UserSquare2 
} from 'lucide-vue-next'

import imgInfrastructure from '../assets/infrasturucture.webp' 

const openCard = ref(null)
const cardRefs = ref([])
const glowStyles = reactive([])

const services = [
  {
    id: 1,
    icon: LayoutGrid,
    category: 'Application',
    title: 'Core ERP Systems',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    description: 'Integrated solutions for high-scale asset and financial management.',
    tags: ['EAM', 'HRIS', 'Procurement'],
    details: [
      { label: 'Operational', items: ['Enterprise Asset Management', 'Warehouse & Inventory', 'Purchase Management', 'Production'] },
      { label: 'Management', items: ['Finance & Accounting', 'HRIS', 'Safety Management', 'Project Service'] }
    ]
  },
  {
    id: 2,
    icon: Building2,
    category: 'Corporate',
    title: 'Business Ecosystem',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    description: 'Centralized administrative services and secure digital identity.',
    tags: ['Email', 'Web', 'Helpdesk'],
    details: [
      { label: 'Infrastructure', items: ['Email System', 'Official Website', 'Service Desk', 'File Server'] }
    ]
  },
  {
    id: 3,
    icon: Smartphone,
    category: 'Mobility',
    title: 'Web & Mobile Apps',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    description: 'Real-time tracking and logistics automation for enterprise fleets.',
    tags: ['GPS', 'Fleet System', 'Real-time'],
    details: [
      { label: 'Logistics', items: ['Fleet Management System'] }
    ]
  },
  {
    id: 4,
    icon: Zap,
    category: 'Efficiency',
    title: 'Productivity Suite',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop',
    description: 'Seamless collaboration tools for modern distributed teams.',
    tags: ['Office365', 'Zoom', 'Intranet'],
    details: [
      { label: 'Collaboration', items: ['Zoom Video Conference', 'Office365 Suite', 'Intranet Portal'] }
    ]
  },
  {
    id: 5,
    icon: Network,
    category: 'Network',
    title: 'Infrastructure',
    image: imgInfrastructure,
    description: 'Resilient connectivity and intelligent surveillance systems.',
    tags: ['LAN', 'CCTV', 'Security'],
    details: [
      { label: 'Connectivity', items: ['Wired & Wireless LAN', 'Network & Security', 'DNS'] },
      { label: 'Surveillance', items: ['CCTV System'] }
    ]
  },
  {
    id: 6,
    icon: UserSquare2,
    category: 'Support',
    title: 'End User Touchpoint',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop',
    description: 'Comprehensive hardware support and communication management.',
    tags: ['Hardware', 'Radio', 'PBX'],
    details: [
      { label: 'Devices', items: ['Desktop, Laptop, Printer', 'Finger Scan Attendance'] },
      { label: 'Communication', items: ['Radio Rig & HT (Freq Mgmt)', 'Telephony & PBX System'] }
    ]
  }
]

// Initialize glow effects
services.forEach(() => glowStyles.push({ background: '' }))

const handleCardInteraction = (e, i) => {
  const card = cardRefs.value[i]
  if (!card) return
  
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  glowStyles[i].background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(244, 63, 94, 0.15), transparent 80%)`

  const rotateX = -((y / rect.height) - 0.5) * 8
  const rotateY = ((x / rect.width) - 0.5) * 8
  
  gsap.to(card, {
    rotateX, rotateY,
    scale: 1.02,
    duration: 0.5,
    ease: 'power2.out',
    transformPerspective: 1000
  })
}

const resetCardInteraction = (i) => {
  if (!cardRefs.value[i]) return
  
  gsap.to(cardRefs.value[i], {
    rotateX: 0, rotateY: 0, scale: 1,
    duration: 1, ease: 'elastic.out(1, 0.75)'
  })
}
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(10deg); }
}

@keyframes float-slow {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(20px, 40px) rotate(-15deg); }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 12s ease-in-out infinite;
}

.animate-slide-down {
  animation: slideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

::selection {
  background: #f43f5e;
  color: white;
}
</style>