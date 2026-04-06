<template>
  <nav
    :class="[
      'fixed left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]',
      isScrolled 
        ? 'top-4 mx-auto max-w-[95%] lg:max-w-[85%] rounded-full bg-white/80 dark:bg-[#000524]/80 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-lg py-3' 
        : 'top-0 bg-transparent py-6'
    ]"
  >
    <div class="container mx-auto px-8 flex items-center justify-between">
      <div class="flex-shrink-0">
        <a href="#hero" class="flex items-center gap-3 group">
          <img 
            :src="sdiLogo" 
            alt="SDI Logo" 
            class="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
          />
          <div class="flex flex-col leading-tight border-l border-slate-400 dark:border-white/20 pl-3">
            <span class="text-xl font-black tracking-[0.1em] text-slate-800 dark:text-white">SDI</span>
            <span class="text-[9px] font-bold text-[#ff1e42] tracking-[0.3em] uppercase">Technology</span>
          </div>
        </a>
      </div>

      <div class="flex items-center gap-4">
        <div class="hidden lg:flex items-center gap-1 bg-slate-200/50 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/5">
          <a 
            v-for="item in navLinks" 
            :key="item.name" 
            :href="item.link" 
            class="px-5 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-[#ff1e42] dark:hover:text-white transition-colors duration-300"
          >
            {{ item.name }}
          </a>
        </div>

        <button 
          @click="toggleTheme" 
          class="p-2.5 rounded-full bg-white dark:bg-white/10 shadow-sm border border-black/5 dark:border-white/10 hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <span v-if="isDark" class="text-yellow-400 text-lg">☀️</span>
          <span v-else class="text-slate-700 text-lg">🌙</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '../composables/useTheme.js'
import sdiLogo from '../assets/logo/technology-services/SDI.png'

const isScrolled = ref(false)
const { isDark, toggleTheme } = useTheme()

const navLinks = [
  { name: 'Home', link: '#hero' },
  { name: 'Services', link: '#services' },
  { name: 'About', link: '#about' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'About', link: '#about' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>