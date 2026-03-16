<template>
  <section id="why-choose-us" class="relative w-full px-6 py-32 overflow-hidden bg-[#eef2f7] dark:bg-[#000830] transition-colors duration-500">

    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute rounded-full blur-[120px] w-[600px] h-[600px] bg-[#ff1e42]/5 dark:bg-[#ff1e42]/10 top-[-10%] right-[-5%]" aria-hidden="true"></div>
      <div class="absolute rounded-full blur-[120px] w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-900/10 bottom-[-10%] left-[-5%]" aria-hidden="true"></div>
      <div class="absolute inset-0 tech-grid opacity-[0.2] dark:opacity-[0.15]"></div>
      <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff1e42]/20 to-transparent animate-scan-slow"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto">

      <div class="text-center mb-24" ref="headRef">
        <h2 class="text-4xl md:text-7xl font-[1000] text-slate-900 dark:text-white leading-[1.2] mb-8 uppercase tracking-tighter italic">
          <span class="inline-block">WHY PARTNER</span> <br/>
          <span class="relative inline-block py-3 pr-6 text-transparent bg-clip-text bg-gradient-to-r from-[#ff1e42] to-rose-400 drop-shadow-[0_0_15px_rgba(255,30,66,0.3)]">
            WITH OUR EXPERTISE?
          </span>
        </h2>
        <p class="text-slate-500 dark:text-blue-200/60 max-w-2xl mx-auto text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed italic">
          >> INITIALIZING SYSTEM: Integrated technology ecosystems for zero-friction business operations. _
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(feature, index) in features" :key="index" class="card-scene h-full">
          <div
            class="group relative bg-white/80 dark:bg-[#000a3d]/40 border border-slate-300 dark:border-blue-900/30 backdrop-blur-3xl p-10 flex flex-col h-full transition-all duration-500 hover:border-[#ff1e42]/50 hover:shadow-xl dark:hover:shadow-[0_0_40px_rgba(255,30,66,0.1)]"
            @mousemove="onTilt($event, index)"
            @mouseleave="onReset(index)"
            :ref="el => { if (el) cardEls[index] = el }"
          >
            <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ff1e42] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ff1e42] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

            <div class="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" :ref="el => { if (el) glowEls[index] = el }"></div>

            <div class="flex justify-between items-start mb-12 relative z-10">
              <div class="w-16 h-16 bg-slate-900 dark:bg-white/5 border border-slate-800 dark:border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#ff1e42] group-hover:shadow-[0_0_30px_rgba(255,30,66,0.5)] group-hover:rotate-[15deg]">
                <component :is="feature.icon" class="w-8 h-8 text-[#ff1e42] group-hover:text-white transition-colors" />
              </div>
            </div>

            <h3 class="text-2xl font-[1000] text-slate-900 dark:text-white mb-4 uppercase tracking-tighter italic group-hover:text-[#ff1e42] transition-colors">
              {{ feature.title }}
            </h3>

            <p class="text-[10px] text-slate-600 dark:text-blue-100/50 leading-relaxed font-black uppercase tracking-widest mb-10 border-l-2 border-slate-200 dark:border-blue-900 group-hover:border-[#ff1e42] pl-4 transition-colors">
              {{ feature.description }}
            </p>

            <a :href="feature.link" class="mt-auto inline-flex items-center gap-4 text-[10px] font-black uppercase text-slate-500 dark:text-blue-400 group-hover:text-[#ff1e42] tracking-[0.3em] transition-all">
              <span class="relative">
                ACCESS_DOCS
                <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ff1e42] group-hover:w-full transition-all"></span>
              </span>
              <div class="w-8 h-8 border border-slate-300 dark:border-blue-900 flex items-center justify-center group-hover:bg-[#ff1e42] group-hover:border-[#ff1e42] transition-all">
                <ArrowUpRight class="w-4 h-4 group-hover:text-white transition-colors" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ShieldCheck, Layers, Settings, Radio, LayoutDashboard, HardDrive, ArrowUpRight } from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

const headRef = ref(null)
const cardEls = ref([])
const glowEls = ref([])

const features = [
  { title: 'Core ERP & Reporting', description: 'Enterprise Management: Assets, Warehouse (Inventory), Procurement, Finance, Accounting, HRIS, Production, and Safety.', icon: LayoutDashboard, link: '#doc-erp' },
  { title: 'Corporate Application', description: 'Enterprise Email Systems, Official Website, Service Desk, and secure File Server infrastructure.', icon: Layers, link: '#doc-corp' },
  { title: 'Web & Mobile Apps', description: 'Custom software solutions including integrated Fleet Management Systems for real-time operation tracking.', icon: Radio, link: '#doc-apps' },
  { title: 'Network & Security', description: 'Wired & Wireless LAN, Network Security devices, DNS management, and Surveillance/CCTV systems.', icon: ShieldCheck, link: '#doc-network' },
  { title: 'Digital Productivity', description: 'Zoom Enterprise, Office365, Intranet Portals, and modern IP-Telephony/PBX systems integration.', icon: Settings, link: '#doc-prod' },
  { title: 'End-User Touchpoint', description: 'Workstations, Biometric Attendance, Radio Rig/HT Frequency Management, and Software Compliance.', icon: HardDrive, link: '#doc-hw' }
]

const onTilt = (e, i) => {
  const card = cardEls.value[i]
  const glow = glowEls.value[i]
  if (!card) return
  const b = card.getBoundingClientRect()
  const x = (e.clientX - b.left) / b.width - 0.5
  const y = (e.clientY - b.top) / b.height - 0.5
  gsap.to(card, { rotateY: x * 12, rotateX: -y * 12, scale: 1.02, duration: 0.4, ease: 'power2.out' })
  if (glow) {
    const gx = (e.clientX - b.left)
    const gy = (e.clientY - b.top)
    glow.style.background = `radial-gradient(300px circle at ${gx}px ${gy}px, rgba(255,30,66,0.15), transparent 80%)`
  }
}

const onReset = (i) => {
  const card = cardEls.value[i]
  const glow = glowEls.value[i]
  if (card) gsap.to(card, { rotateY: 0, rotateX: 0, scale: 1, duration: 1, ease: 'elastic.out(1, 0.7)' })
  if (glow) glow.style.background = 'none'
}

let ctx
onMounted(() => {
  ctx = gsap.context(() => {
    gsap.fromTo(headRef.value,
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1.5, ease: 'expo.out',
        scrollTrigger: { trigger: headRef.value, start: 'top 90%', once: true }
      }
    )
    gsap.fromTo('.card-scene',
      { y: 80, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out',
        scrollTrigger: { trigger: '.card-scene', start: 'top 85%', once: true }
      }
    )
  })
})
onUnmounted(() => ctx?.revert())
</script>

<style scoped>
.tech-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, rgba(255, 30, 66, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 30, 66, 0.05) 1px, transparent 1px);
}
.card-scene { perspective: 2000px; }
@keyframes scan-slow {
  0% { transform: translateY(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}
.animate-scan-slow { animation: scan-slow 8s linear infinite; }
</style>