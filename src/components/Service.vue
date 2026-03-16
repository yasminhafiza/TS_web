<template>
  <section id="services" class="py-24 bg-white dark:bg-[#000830] relative overflow-hidden transition-colors duration-500">
    <div class="absolute inset-0 pointer-events-none opacity-40">
      <div class="absolute top-[-10%] -right-24 w-[500px] h-[500px] bg-[#ff1e42]/10 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-[-10%] -left-24 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]"></div>
      <div class="absolute inset-0 tech-grid opacity-[0.05] dark:opacity-[0.1]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div class="max-w-2xl">
          <h2 class="text-6xl md:text-8xl font-[1000] text-slate-900 dark:text-white leading-[0.8] italic tracking-tighter uppercase">
            OUR <br/>
            <span class="text-[#ff1e42] drop-shadow-[0_0_15px_rgba(255,30,66,0.3)]">SERVICES</span>
          </h2>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 services-grid">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          class="service-card"
          :style="{ zIndex: openCard === index ? 50 : 10 }"
        >
          <div
            class="group h-full p-8 rounded-none border-b-4 border-r-4 border-slate-200 dark:border-blue-900/30 bg-white dark:bg-[#000a3d]/40 backdrop-blur-3xl transition-all duration-500 flex flex-col relative overflow-hidden"
            :ref="el => { if (el) cardRefs[index] = el }"
            @mousemove="handleTilt($event, index)"
            @mouseleave="resetTilt(index)"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-[#ff1e42]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="absolute top-0 left-0 w-full h-[1px] bg-[#ff1e42]/30 group-hover:animate-scan-fast"></div>

            <div class="flex justify-between items-start mb-10 relative z-10">
              <div class="w-16 h-16 rounded-none flex items-center justify-center bg-slate-900 dark:bg-white/5 text-white group-hover:bg-[#ff1e42] group-hover:rotate-[15deg] transition-all duration-500 shadow-2xl group-hover:shadow-[#ff1e42]/50 border border-white/10">
                <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-html="service.iconPath"></svg>
              </div>
            </div>

            <h3 class="text-2xl font-[1000] mb-3 text-slate-900 dark:text-white italic uppercase tracking-tighter group-hover:text-[#ff1e42] transition-colors">
              {{ service.title }}
            </h3>

            <p class="text-[11px] text-slate-500 dark:text-blue-200/60 mb-8 font-black uppercase tracking-widest leading-relaxed border-l-2 border-slate-200 dark:border-blue-800/50 pl-4">
              {{ service.subtitle }}
            </p>

            <div class="flex flex-wrap gap-2 mt-auto relative z-10">
              <span v-for="tag in service.mainTags" :key="tag"
                class="text-[9px] font-black px-3 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-blue-300 border border-transparent dark:group-hover:border-[#ff1e42]/30 transition-all">
                # {{ tag }}
              </span>
            </div>

            <button
              type="button"
              @click.prevent="toggleDetail(index)"
              class="mt-10 pt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between group/btn cursor-pointer w-full relative z-30"
            >
              <span class="text-[10px] font-black tracking-[0.3em] text-slate-400 group-hover/btn:text-[#ff1e42] transition-colors">
                {{ openCard === index ? '[ MINIMIZE_DATA ]' : '[ More Details ]' }}
              </span>
              <div class="w-8 h-8 rounded-none border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover/btn:border-[#ff1e42] group-hover/btn:bg-[#ff1e42]/10 transition-all">
                <svg class="w-4 h-4 text-slate-400 group-hover/btn:text-[#ff1e42] transition-transform duration-500" :class="{'rotate-180': openCard === index}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 9l-7 7-7-7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </button>

            <div v-if="openCard === index" class="mt-8 space-y-4 animate-data-unfold relative z-10">
              <div v-for="group in service.details" :key="group.title" class="p-5 bg-slate-50 dark:bg-black/40 border-l-2 border-[#ff1e42]">
                <p class="text-[9px] font-black text-[#ff1e42] uppercase mb-4 tracking-[0.3em] flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-[#ff1e42]"></span>
                  {{ group.title }}
                </p>
                <div class="grid grid-cols-1 gap-2">
                  <div v-for="item in group.items" :key="item" class="flex items-center gap-3 text-[11px] font-bold text-slate-700 dark:text-blue-100/80 leading-tight italic uppercase">
                    <div class="w-1 h-px bg-[#ff1e42]/50"></div>
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
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const openCard = ref(null)
const cardRefs = ref([])

const toggleDetail = (index) => {
  openCard.value = openCard.value === index ? null : index
}

const handleTilt = (e, i) => {
  const card = cardRefs.value[i]
  if (!card || openCard.value === i) return
  const rect = card.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5
  gsap.to(card, {
    rotateY: x * 15,
    rotateX: -y * 15,
    scale: 1.02,
    transformPerspective: 1200,
    duration: 0.4
  })
}

const resetTilt = (i) => {
  const card = cardRefs.value[i]
  if (card) {
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 1,
      ease: 'elastic.out(1, 0.6)'
    })
  }
}

const services = [
  {
    id: 1,
    category: 'Application',
    title: 'Core ERP Systems',
    subtitle: 'Integrated ERP solutions for asset & finance management.',
    iconPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />',
    mainTags: ['Asset', 'Finance', 'HRIS'],
    details: [
      { title: 'Operational', items: ['Enterprise Asset Management', 'Warehouse Management', 'Purchase Management'] },
      { title: 'Management', items: ['Finance Management', 'Accounting Management', 'HRIS'] }
    ]
  },
  {
    id: 2,
    category: 'Corporate',
    title: 'Corporate Application',
    subtitle: 'Full administrative ecosystem and digital identity.',
    iconPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />',
    mainTags: ['Email', 'Web', 'Server'],
    details: [
      { title: 'Core Services', items: ['Email System', 'Official Website', 'Service Desk', 'File Server'] }
    ]
  },
  {
    id: 3,
    category: 'Innovative',
    title: 'Web & Mobile',
    subtitle: 'High-mobility monitoring via fleet-specific platforms.',
    iconPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />',
    mainTags: ['Fleet', 'GPS', 'Real-time'],
    details: [
      { title: 'Fleet System', items: ['Fleet Management System'] }
    ]
  },
  {
    id: 4,
    category: 'Efficiency',
    title: 'Productivity Suite',
    subtitle: 'Modern tools for seamless team collaboration.',
    iconPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />',
    mainTags: ['Office365', 'Zoom', 'Intranet'],
    details: [
      { title: 'Tools', items: ['Zoom Video Conference', 'Office365', 'Intranet Portal/Apps'] }
    ]
  },
  {
    id: 5,
    category: 'Network',
    title: 'Infrastructure',
    subtitle: 'Reliable network with integrated surveillance systems.',
    iconPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.343 6.572c5.857-5.858 15.355-5.858 21.213 0" />',
    mainTags: ['LAN', 'CCTV', 'DNS'],
    details: [
      { title: 'Connectivity', items: ['Wired & Wireless LAN', 'Network & Security', 'DNS'] },
      { title: 'Security', items: ['Surveillance System/CCTV'] }
    ]
  },
  {
    id: 6,
    category: 'Support',
    title: 'End-User Points',
    subtitle: 'Full hardware support and daily communications.',
    iconPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />',
    mainTags: ['Devices', 'Radio', 'Windows'],
    details: [
      { title: 'Hardware', items: ['Desktop, Laptop, Printer', 'Finger Scan'] },
      { title: 'Radio & Telp', items: ['Radio Rig & HT', 'PBX System'] }
    ]
  }
]

onMounted(() => {
  setTimeout(() => {
    ScrollTrigger.refresh()
    gsap.fromTo('.service-card',
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 95%',
          once: true,
          invalidateOnRefresh: true
        },
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'expo.out'
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

@keyframes scan-fast {
  0% { top: 0; }
  100% { top: 100%; }
}

.group-hover\:animate-scan-fast {
  animation: scan-fast 1.5s linear infinite;
}

.animate-data-unfold {
  animation: unfold 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes unfold {
  from { opacity: 0; transform: scaleY(0); transform-origin: top; }
  to { opacity: 1; transform: scaleY(1); transform-origin: top; }
}

.service-card { perspective: 1500px; }

.transition-all {
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}
</style>