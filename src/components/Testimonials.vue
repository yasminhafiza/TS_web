<template>
  <section id="testimonials" class="relative py-28 bg-[#f8fafc] dark:bg-[#020617] transition-colors duration-1000 overflow-hidden">
    
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-rose-500/[0.08] dark:bg-rose-500/[0.03] rounded-full blur-[120px]"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/[0.08] dark:bg-blue-600/[0.03] rounded-full blur-[120px]"></div>

      <div class="absolute inset-0 transform-style-3d" ref="parallaxContainer">
        <div class="absolute top-[10%] left-[5%] w-40 h-40 border border-slate-200 dark:border-white/5 rotate-45 parallax-element" data-depth="0.05"></div>
        <div class="absolute top-[40%] right-[8%] w-64 h-64 border border-rose-500/10 dark:border-white/5 rounded-full parallax-element" data-depth="0.1"></div>
        <div v-for="n in 8" :key="n" 
             :style="{ top: `${n * 12}%`, left: `${(n % 3) * 30 + 10}%` }"
             class="absolute w-1 h-1 bg-rose-500/20 rounded-full parallax-element" 
             :data-depth="n * 0.02">
        </div>
      </div>

      <div class="absolute bottom-0 inset-x-0 h-[40vh] opacity-[0.05] dark:opacity-[0.1]" 
           style="background-image: linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px); background-size: 40px 40px; transform: perspective(1000px) rotateX(70deg); transform-origin: bottom;">
      </div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto px-6">
      
      <div class="flex flex-col items-center text-center mb-24 space-y-4" ref="headerRef">
        
        <h2 class="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none">
          Wall of <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-600">Trust.</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10" ref="gridRef">
        <div v-for="(item, index) in testimonials" :key="index" 
             class="testimonial-wrapper group perspective-1000"
             @mousemove="handle3DTilt($event, index)"
             @mouseleave="reset3DTilt(index)">
          
          <div :ref="el => cardRefs[index] = el" 
               class="relative h-full p-10 rounded-[40px] bg-white/40 dark:bg-white/[0.02] border border-white dark:border-white/10 backdrop-blur-2xl transition-all duration-300 transform-style-3d shadow-xl shadow-slate-200/50 dark:shadow-none group-hover:border-rose-500/30">
            
            <div class="absolute -top-6 -right-2 transform-translate-z-50 opacity-10 group-hover:opacity-100 transition-all duration-500">
              <span class="text-8xl font-serif text-rose-500">“</span>
            </div>

            <div class="relative z-10 flex flex-col h-full transform-translate-z-30">
              <div class="flex gap-1.5 mb-8">
                <div v-for="i in 5" :key="i" class="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]"></div>
              </div>

              <p class="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-10 italic">
                "{{ item.comment }}"
              </p>
              
              <div class="mt-auto flex items-center gap-5 transform-translate-z-40">
                <div class="w-14 h-14 rounded-2xl bg-slate-900 dark:bg-rose-500 flex items-center justify-center font-black text-white text-xl shadow-2xl transition-transform group-hover:rotate-12 group-hover:scale-110">
                  {{ item.name.charAt(0) }}
                </div>
                <div>
                  <h4 class="font-bold text-slate-900 dark:text-white text-[15px] tracking-tight uppercase">{{ item.name }}</h4>
                  <p class="text-[10px] font-black text-rose-500 uppercase tracking-widest opacity-80">{{ item.role }}</p>
                </div>
              </div>
            </div>

            <div class="spotlight absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
                 :ref="el => glowRefs[index] = el"></div>
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

const cardRefs = ref([])
const glowRefs = ref([])
const headerRef = ref(null)
const gridRef = ref(null)
const parallaxContainer = ref(null)

const testimonials = [
  { name: "Andrew Parker", role: "CEO Tech Corp", comment: "The deployment was seamless. Our digital transformation mission was executed with precision and ahead of schedule." },
  { name: "Sarah Jenkins", role: "Operations Lead", comment: "Absolute efficiency. The team's focus on enterprise-grade reliability has fundamentally optimized our workflow." },
  { name: "Robert Santos", role: "Founder X-Labs", comment: "Innovative solutions that delivered a measurable 40% boost in operational performance within the first quarter." }
]

const handle3DTilt = (e, i) => {
  const card = cardRefs.value[i]
  const glow = glowRefs.value[i]
  if (!card) return
  
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  // Smooth tilt (12 deg max)
  const rotateX = (y - centerY) / 12
  const rotateY = (centerX - x) / 12
  
  gsap.to(card, {
    rotateX: rotateX,
    rotateY: rotateY,
    scale: 1.05,
    duration: 0.4,
    ease: 'power2.out'
  })
  
  if (glow) {
    glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(244,63,94,0.08), transparent 80%)`
  }
}

const reset3DTilt = (i) => {
  if (cardRefs.value[i]) {
    gsap.to(cardRefs.value[i], {
      rotateX: 0, rotateY: 0, scale: 1,
      duration: 1.2, ease: 'elastic.out(1, 0.6)'
    })
  }
}

onMounted(() => {
  // Parallax Background items
  const elements = parallaxContainer.value.querySelectorAll('.parallax-element')
  elements.forEach(el => {
    const depth = el.getAttribute('data-depth')
    gsap.to(el, {
      y: depth * 400,
      rotation: 90,
      ease: 'none',
      scrollTrigger: {
        trigger: '#testimonials',
        scrub: true,
        start: 'top bottom',
        end: 'bottom top'
      }
    })
  })

  // Reveal grid
  gsap.from('.testimonial-wrapper', {
    y: 100, opacity: 0, stagger: 0.2, duration: 1.5, ease: 'expo.out',
    scrollTrigger: { trigger: gridRef.value, start: 'top 85%' }
  })
})
</script>

<style scoped>
.perspective-1000 { perspective: 1000px; }
.transform-style-3d { transform-style: preserve-3d; }
.transform-translate-z-30 { transform: translateZ(30px); }
.transform-translate-z-40 { transform: translateZ(40px); }
.transform-translate-z-50 { transform: translateZ(50px); }

/* Custom Text selection color */
::selection {
  background: #f43f5e;
  color: white;
}
</style>