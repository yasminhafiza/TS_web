<template>
  <section 
    id="hero"
    class="relative min-h-screen flex items-center bg-[#f0f4f9] dark:bg-[#000839] overflow-hidden transition-opacity duration-700"
    :style="{ opacity: isMounted ? 1 : 0.01 }" 
    @mousemove="handleGlobalMouseMove"
  >
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div 
        class="absolute inset-0 transition-opacity duration-1000 opacity-20"
        :style="{ background: `radial-gradient(circle at ${mouseRawX}px ${mouseRawY}px, rgba(225, 29, 72, 0.15), transparent 50%)` }"
      ></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="grid lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-5 space-y-10">
          <div class="space-y-4">
            <h1 class="text-6xl md:text-7xl font-[900] leading-none tracking-tighter italic dark:text-white text-slate-900">
              Your Vision <br>
              <span ref="scrambleText" class="text-rose-500 uppercase">Engineered</span>
            </h1>
            <p class="max-w-md text-slate-600 dark:text-blue-200/70 text-lg leading-relaxed pt-2">
              We don't just write code; we architect competitive advantages. In a world defined by digital speed, we ensure your business doesn't just adapt—it leads.
            </p>
          </div>
        </div>

        <div class="lg:col-span-7 relative flex justify-center items-center h-[600px] perspective-2000">
          <div class="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center h-[350px] space-y-2 pointer-events-none hidden md:flex">
            <div class="w-[1px] h-full bg-slate-300 dark:bg-blue-900/50 relative">
              <div 
                class="absolute left-1/2 top-0 -translate-x-1/2 w-[4px] h-[4px] bg-rose-500 rounded-full transition-all duration-500 shadow-[0_0_15px_#f43f5e]"
                :style="{ transform: `translate(-50%, ${(activeIdx >= 0 ? activeIdx : 0) * (350 / stackLayers.length) + (350 / stackLayers.length) / 2}px)` }"
              ></div>
            </div>
          </div>

          <div 
            class="relative w-full max-w-[420px] transition-transform duration-500 ease-out preserve-3d"
            :style="{ transform: `rotateY(${mouseX}deg) rotateX(${mouseY * -1}deg)` }"
          >
            <div v-for="(layer, idx) in stackLayers" :key="idx"
              @mouseenter="activeStep = layer.id"
              class="absolute w-full transition-all duration-300 cursor-pointer preserve-3d"
              :style="getLayerStyle(idx)"
            >
              <div :class="[
                  'w-full h-[65px] flex items-center px-10 border-l-4 transition-all duration-500 rounded-r-sm relative overflow-hidden',
                  activeStep === layer.id 
                    ? 'bg-rose-500 text-white border-rose-600 translate-x-6 shadow-[0_20px_50px_rgba(244,63,94,0.3)]' 
                    : 'bg-white/5 dark:bg-blue-950/20 border-slate-300 dark:border-blue-800/20 text-slate-400 dark:text-blue-100/30 hover:bg-white/10'
                ]"
              >
                <span class="font-mono text-[10px] mr-8 tracking-widest opacity-40">// 0{{ layer.id }}</span>
                <span class="text-lg font-bold italic tracking-tighter uppercase">{{ layer.label }}</span>
                <div 
                  class="absolute bottom-3 left-28 right-10 h-[1px] bg-white/30 transition-all duration-700 transform origin-left"
                  :class="activeStep === layer.id ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'"
                ></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const isMounted = ref(false)
const mouseX = ref(0)
const mouseY = ref(0)
const mouseRawX = ref(0)
const mouseRawY = ref(0)
const activeStep = ref(1)
const scrambleText = ref(null)

const handleGlobalMouseMove = (e) => {
  mouseRawX.value = e.clientX
  mouseRawY.value = e.clientY
  mouseX.value = (e.clientX - window.innerWidth / 2) / 120
  mouseY.value = (e.clientY - window.innerHeight / 2) / 120
}

const stackLayers = [
  { id: 1, label: 'Core Application & Reporting' },
  { id: 2, label: 'Corporate Application' },
  { id: 3, label: 'Web & Mobile Application' },
  { id: 4, label: 'Productivity' },
  { id: 5, label: 'Network Infrastructure' },
  { id: 6, label: 'End User Touchpoint' }
]

const activeIdx = computed(() => stackLayers.findIndex(l => l.id === activeStep.value))

const getLayerStyle = (idx) => {
  const isActive = activeStep.value === stackLayers[idx].id
  return {
    transform: `translateY(${(idx - 2.5) * 80}px) translateZ(${isActive ? '75px' : '0px'})`,
    zIndex: isActive ? 50 : 10 - idx,
    opacity: isActive ? 1 : 0.7,
    // Tambahkan top: 0 agar elemen absolute bertumpuk benar
    top: 0 
  }
}

onMounted(() => {
  isMounted.value = true
  const targetTxt = "ENGINEERED"
  const chars = "X0_/$#[]"
  let iter = 0
  const inv = setInterval(() => {
    if (!scrambleText.value) return
    scrambleText.value.innerText = targetTxt.split("").map((l, i) => 
      i < iter ? targetTxt[i] : chars[Math.floor(Math.random() * chars.length)]
    ).join("")
    if(iter >= targetTxt.length) clearInterval(inv)
    iter += 1/2
  }, 40)
})
</script>

<style scoped>
.perspective-2000 { perspective: 2000px; }
.preserve-3d { transform-style: preserve-3d; }
section { user-select: none; }
</style>