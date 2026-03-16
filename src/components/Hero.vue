<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center bg-[#f0f4f9] dark:bg-[#000839]"
    @mousemove="handleMouseMove"
  >
    <div class="absolute inset-0 pointer-events-none">
      <div class="hero-grid absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"></div>
      <div
        class="absolute inset-0"
        :style="{
          background: `radial-gradient(800px circle at ${mouseRawX}px ${mouseRawY}px, rgba(255,30,66,0.06), transparent 60%)`,
        }"
      ></div>
      <div
        class="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-rose-500/5 dark:bg-rose-500/10 rounded-full blur-[120px]"
      ></div>
      <div
        class="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[100px]"
      ></div>
    </div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <!-- KIRI -->
        <div class="space-y-8 relative z-20 hero-left">

          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 dark:bg-rose-500/20 border border-rose-500/20 text-rose-600 dark:text-rose-400"
          >
            <span class="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
            <span class="text-[10px] font-black uppercase tracking-[0.3em]"
              >IT Services — SDI Technology</span
            >
          </div>

          <h1
            class="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter uppercase text-slate-900 dark:text-white"
          >
            YOUR<br />
            VISION<br />
            <span class="text-rose-500 italic">ENGINEERED</span>
          </h1>

          <p
            class="text-slate-600 dark:text-blue-200/70 text-base leading-relaxed max-w-md border-l-2 border-rose-500/30 pl-4"
          >
            We architect competitive advantages — from enterprise ERP to network
            infrastructure. End-to-end IT solutions that power Indonesia's leading
            industries.
          </p>

          <div class="grid grid-cols-2 gap-3">
            <div
              v-for="point in servicePoints"
              :key="point.label"
              class="flex items-center gap-3 px-4 py-3 bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm hover:border-rose-500/40 transition-all duration-300 group"
            >
              <div
                class="w-8 h-8 bg-slate-900 dark:bg-rose-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-500 transition-colors"
              >
                <component
                  :is="point.icon"
                  class="w-4 h-4 text-rose-500 group-hover:text-white transition-colors"
                />
              </div>
              <span
                class="text-[11px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-300"
                >{{ point.label }}</span
              >
            </div>
          </div>



          <div class="flex gap-8 pt-4 border-t border-slate-200 dark:border-white/10">
            <div v-for="stat in stats" :key="stat.label">
              <div class="text-2xl font-black text-slate-900 dark:text-white">
                {{ stat.value }}
              </div>
              <div class="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>

        <!-- KANAN -->
        <div class="relative flex items-center justify-center h-[580px] z-10 hero-right">

          <!-- Tilt wrapper — transform hanya dari mouse, TIDAK ada initial offset -->
          <div
            class="relative w-full max-w-[380px] h-full"
            :style="{
              transform: `rotateY(${tiltX}deg) rotateX(${tiltY}deg)`,
              transition: 'transform 0.1s ease-out',
            }"
          >

            <!-- Main card -->
            <div
              class="absolute inset-x-0 top-[8%] bg-white dark:bg-[#000a3d] border border-slate-200 dark:border-blue-900/50 p-6 shadow-2xl"
            >
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div class="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span
                  class="text-[9px] font-mono text-slate-400 dark:text-blue-400/60 uppercase tracking-widest"
                  >sdi_services.exe</span
                >
              </div>

              <div class="font-mono text-[11px] space-y-2 mb-6">
                <div class="text-slate-400 dark:text-blue-400/50">
                  // SDI Technology Stack
                </div>
                <div>
                  <span class="text-rose-500">const</span>
                  <span class="text-slate-700 dark:text-blue-200"> services</span>
                  <span class="text-slate-400"> =</span>
                  <span class="text-green-600 dark:text-green-400"> [</span>
                </div>
                <div
                  v-for="(svc, i) in codeLines"
                  :key="i"
                  class="pl-4 flex items-center gap-2 py-1 transition-all duration-300 cursor-default"
                  :class="
                    activeService === i
                      ? 'bg-rose-500/10 border-l-2 border-rose-500'
                      : 'border-l-2 border-transparent'
                  "
                  @mouseenter="activeService = i"
                >
                  <span class="text-slate-400 dark:text-blue-400/40 text-[9px]">{{
                    String(i + 1).padStart(2, '0')
                  }}</span>
                  <span class="text-amber-600 dark:text-amber-400">"{{ svc }}"</span>
                  <span v-if="i < codeLines.length - 1" class="text-slate-400">,</span>
                  <span v-if="activeService === i" class="ml-auto text-[9px] text-rose-500 font-bold"
                    >▶ ACTIVE</span
                  >
                </div>
                <div>
                  <span class="text-green-600 dark:text-green-400">]</span>
                </div>
              </div>

              <div
                class="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/10"
              >
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span class="text-[10px] font-mono text-slate-500 dark:text-blue-300/50"
                    >System Online</span
                  >
                </div>
                <span class="text-[10px] font-mono text-rose-500">99.9% uptime</span>
              </div>
            </div>

            <!-- Badge 1 — top right -->
            <div class="absolute -top-6 right-0 z-20 animate-float">
              <div
                class="bg-rose-500 text-white px-4 py-3 shadow-[0_10px_30px_rgba(255,30,66,0.4)]"
              >
                <div class="text-2xl font-black leading-none">5+</div>
                <div class="text-[9px] font-bold uppercase tracking-wider opacity-80">Years Exp</div>
              </div>
            </div>

            <!-- Badge 2 — bottom left -->
            <div class="absolute bottom-10 -left-4 z-20 animate-float-slow">
              <div class="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-3 shadow-xl">
                <div class="text-2xl font-black leading-none">20+</div>
                <div class="text-[9px] font-bold uppercase tracking-wider opacity-60">Projects</div>
              </div>
            </div>

            <!-- Badge 3 — bottom right -->
            <div class="absolute bottom-4 right-0 z-20 animate-float-mid">
              <div
                class="bg-white dark:bg-[#000a3d] border border-slate-200 dark:border-rose-500/30 px-4 py-3 shadow-xl"
              >
                <div class="text-2xl font-black leading-none text-rose-500">100%</div>
                <div class="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Safety Record
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
import { Server, Shield, Smartphone, Monitor, Network, Users, Zap } from 'lucide-vue-next'

// ✅ FIX: Mouse raw position diinit ke tengah layar agar radial gradient tidak mulai dari (0,0)
const mouseRawX = ref(typeof window !== 'undefined' ? window.innerWidth / 2 : 760)
const mouseRawY = ref(typeof window !== 'undefined' ? window.innerHeight / 2 : 400)

// ✅ FIX: tiltX & tiltY diinit ke 0 — tidak ada initial offset yang menyembunyikan konten
const tiltX = ref(0)
const tiltY = ref(0)

const activeService = ref(0)

// ✅ FIX: Set mouseRawX/Y ke tengah layar saat mount agar hero langsung tampil sempurna
onMounted(() => {
  mouseRawX.value = window.innerWidth / 2
  mouseRawY.value = window.innerHeight / 2
})

const handleMouseMove = (e) => {
  mouseRawX.value = e.clientX
  mouseRawY.value = e.clientY
  // ✅ FIX: Tilt dihitung relatif terhadap section, bukan window,
  //    sehingga tidak ada lompatan posisi saat pertama kali mouse masuk
  const rect = e.currentTarget.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  tiltX.value = (e.clientX - centerX) / 150
  tiltY.value = -((e.clientY - centerY) / 150)
}

const servicePoints = [
  { label: 'ERP Systems', icon: Server },
  { label: 'Network Infra', icon: Network },
  { label: 'Web & Mobile', icon: Smartphone },
  { label: 'End-User Support', icon: Monitor },
  { label: 'Cybersecurity', icon: Shield },
  { label: 'IT Consulting', icon: Users },
]

const codeLines = [
  'Core ERP & Reporting',
  'Corporate Application',
  'Web & Mobile Apps',
  'Network Infrastructure',
  'Productivity Suite',
  'End-User Touchpoint',
]

const stats = [
  { value: '5+', label: 'Years' },
  { value: '20+', label: 'Projects' },
  { value: '99.9%', label: 'Uptime' },
]
</script>

<style scoped>
.hero-grid {
  background-size: 50px 50px;
  background-image:
    linear-gradient(to right, currentColor 1px, transparent 1px),
    linear-gradient(to bottom, currentColor 1px, transparent 1px);
}

section {
  user-select: none;
}

/* ✅ FIX: Pastikan hero-left dan hero-right SELALU visible dari awal
   Tidak ada opacity:0, translateY, atau visibility:hidden di initial state */
.hero-left,
.hero-right {
  opacity: 1 !important;
  transform: none;
  visibility: visible !important;
}

/* Float animations untuk badge */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-8px); }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-6px); }
}

@keyframes float-mid {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
}

.animate-float     { animation: float      4s ease-in-out infinite; }
.animate-float-slow{ animation: float-slow 6s ease-in-out infinite; }
.animate-float-mid { animation: float-mid  5s ease-in-out infinite; }
</style>