<template>
  <section id="testimonials" class="relative py-20 bg-slate-50 dark:bg-[#020617] overflow-hidden transition-colors duration-500">
    
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-1/4 w-[300px] h-[300px] bg-blue-500/5 blur-[100px]"></div>
      <div class="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#ff1e42]/5 blur-[100px]"></div>
      <div class="absolute inset-0 tech-grid opacity-[0.1] dark:opacity-[0.05]"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto px-6">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16" ref="headRef">
        <div class="max-w-xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#ff1e42]/10 border-l-2 border-[#ff1e42] mb-4">
            <span class="w-1.5 h-1.5 bg-[#ff1e42] animate-pulse"></span>
            <span class="text-[10px] font-bold tracking-widest uppercase text-[#ff1e42]">Testimonials</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight uppercase">
            WALL OF <span class="text-[#ff1e42]">TRUST</span>
          </h2>
        </div>
        <div class="max-w-xs border-l border-slate-300 dark:border-slate-800 pl-4">
          <p class="text-slate-500 dark:text-slate-400 text-[11px] font-medium uppercase tracking-wider leading-relaxed">
            Verified strategic collaborations and high-tier technology deployments.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" ref="gridRef">
        <div v-for="(item, index) in testimonials" :key="index" 
             class="testimonial-card relative group perspective-1000"
             @mousemove="onTilt($event, index)"
             @mouseleave="onReset(index)"
             :ref="el => cardRefs[index] = el">
          
          <div class="relative h-full p-8 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 backdrop-blur-sm transition-all duration-300 group-hover:border-[#ff1e42]/30 shadow-sm group-hover:shadow-xl transform-style-3d">
            
            <div class="absolute top-6 right-6 text-slate-100 dark:text-slate-800 group-hover:text-[#ff1e42]/5 transition-colors">
              <QuoteIcon class="w-12 h-12" />
            </div>

            <div class="relative z-10 flex flex-col h-full">
              <div class="flex gap-1 mb-6">
                <div v-for="star in 5" :key="star" class="w-2 h-2 bg-[#ff1e42] clip-star"></div>
              </div>
              
              <div class="mb-8">
                <p class="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium italic">
                  "{{ item.comment }}"
                </p>
              </div>
              
              <div class="mt-auto flex items-center gap-4">
                <div class="relative w-12 h-12 flex-shrink-0 bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-400 text-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <span class="relative z-10">{{ item.name.charAt(0) }}</span>
                  <div class="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff1e42] group-hover:h-full transition-all duration-300 opacity-10 group-hover:opacity-100"></div>
                </div>
                
                <div>
                  <h4 class="font-bold text-slate-900 dark:text-white text-sm tracking-tight group-hover:text-[#ff1e42] transition-colors">
                    {{ item.name }}
                  </h4>
                  <p class="text-[10px] text-slate-500 dark:text-slate-500 uppercase font-bold tracking-wider">{{ item.role }}</p>
                </div>
              </div>
            </div>

            <div class="spotlight absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" :ref="el => glowRefs[index] = el"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, h, onMounted } from 'vue'
import { gsap } from 'gsap'

const cardRefs = ref([])
const glowRefs = ref([])
const headRef = ref(null)

const QuoteIcon = () => h('svg', { 
  fill: 'currentColor', 
  viewBox: '0 0 24 24',
  xmlns: 'http://www.w3.org/2000/svg'
}, [
  h('path', { d: 'M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V5C14.017 4.44772 14.4647 4 15.017 4H19.017C20.6739 4 22.017 5.34315 22.017 7V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.0166 21L3.0166 18C3.0166 16.8954 3.91203 16 5.0166 16H8.0166C8.56888 16 9.0166 15.5523 9.0166 15V9C9.0166 8.44772 8.56888 8 8.0166 8H4.0166C3.46432 8 3.0166 7.55228 3.0166 7V5C3.0166 4.44772 3.46432 4 4.0166 4H8.0166C9.67345 4 11.0166 5.34315 11.0166 7V15C11.0166 18.3137 8.3303 21 5.0166 21H3.0166Z' })
])

const testimonials = [
  { name: "Andrew Parker", role: "CEO Tech Corp", comment: "Professional deployment. Our digital transformation mission was executed flawlessly and on time." },
  { name: "Sarah Jenkins", role: "Operations Lead", comment: "Results exceeded mission parameters. They are laser-focused on efficiency and quality." },
  { name: "Robert Santos", role: "Founder X-Labs", comment: "Innovative solutions that boosted our field operations by 40% in the first quarter." }
]

const onTilt = (e, i) => {
  const card = cardRefs.value[i]
  const glow = glowRefs.value[i]
  if (!card) return

  const rect = card.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5

  gsap.to(card, {
    rotateY: x * 8, rotateX: -y * 8,
    duration: 0.4, ease: 'power2.out'
  })

  if (glow) {
    const gx = e.clientX - rect.left
    const gy = e.clientY - rect.top
    glow.style.background = `radial-gradient(300px circle at ${gx}px ${gy}px, rgba(255,30,66,0.08), transparent 70%)`
  }
}

const onReset = (i) => {
  const card = cardRefs.value[i]
  if (card) {
    gsap.to(card, { rotateY: 0, rotateX: 0, duration: 1, ease: 'back.out(1.7)' })
  }
}

onMounted(() => {
  gsap.from(headRef.value, { y: 20, opacity: 0, duration: 1, ease: 'power3.out' })
  gsap.from('.testimonial-card', { 
    y: 30, 
    opacity: 0, 
    stagger: 0.1, 
    duration: 0.8, 
    ease: 'power3.out',
    delay: 0.2 
  })
})
</script>

<style scoped>
.tech-grid {
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, currentColor 1px, transparent 1px),
    linear-gradient(to bottom, currentColor 1px, transparent 1px);
}
.perspective-1000 { perspective: 1000px; }
.transform-style-3d { transform-style: preserve-3d; }
.clip-star {
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
</style>