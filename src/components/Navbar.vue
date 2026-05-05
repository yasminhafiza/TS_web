<template>
  <nav
    :class="[
      'fixed left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]',
      isScrolled 
        ? 'top-2 md:top-4 mx-auto max-w-[95%] lg:max-w-[85%] rounded-full bg-white/80 dark:bg-[#000524]/80 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-lg py-2 md:py-3' 
        : 'top-0 bg-transparent py-4 md:py-6'
    ]"
  >
    <div class="container mx-auto px-4 md:px-8 flex items-center justify-between">
      <div class="flex-shrink-0 z-50 relative">
        <a href="#hero" class="flex items-center gap-2 md:gap-3 group">
          <img 
            :src="sdiLogo" 
            alt="SDI Logo" 
            class="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105" 
          />
          <div class="flex flex-col leading-tight border-l border-slate-400 dark:border-white/20 pl-2 md:pl-3">
            <span class="text-lg md:text-xl font-black tracking-[0.1em] text-slate-800 dark:text-white">SDI</span>
            <span class="text-[7px] md:text-[9px] font-bold text-[#ff1e42] tracking-[0.2em] md:tracking-[0.3em] uppercase">Technology</span>
          </div>
        </a>
      </div>

      <div class="flex items-center gap-2 md:gap-4 z-50 relative">
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
          class="p-2 md:p-2.5 rounded-full bg-white dark:bg-white/10 shadow-sm border border-black/5 dark:border-white/10 hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <span v-if="isDark" class="text-yellow-400 text-base md:text-lg">☀️</span>
          <span v-else class="text-slate-700 text-base md:text-lg">🌙</span>
        </button>

        <!-- Mobile Menu Toggle -->
        <button 
          @click="toggleMobileMenu" 
          class="lg:hidden p-2 rounded-full bg-white dark:bg-white/10 shadow-sm border border-black/5 dark:border-white/10 hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-5 h-5 text-slate-700 dark:text-slate-200" />
          <X v-else class="w-5 h-5 text-slate-700 dark:text-slate-200" />
        </button>
      </div>

      <!-- Mobile Menu Overlay -->
      <div 
        v-if="isMobileMenuOpen"
        class="fixed inset-0 top-0 left-0 w-full h-screen bg-white/95 dark:bg-[#000524]/95 backdrop-blur-3xl z-40 lg:hidden flex flex-col items-center justify-center transition-all duration-500"
      >
        <div class="flex flex-col items-center gap-8">
          <a 
            v-for="item in navLinks" 
            :key="item.name" 
            :href="item.link" 
            @click="closeMobileMenu"
            class="text-2xl font-bold uppercase tracking-widest text-slate-800 dark:text-slate-100 hover:text-[#ff1e42] dark:hover:text-[#ff1e42] transition-colors duration-300"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { useTheme } from '../composables/useTheme.js'
import sdiLogo from '../assets/logo/technology-services/SDI.png'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const { isDark, toggleTheme } = useTheme()

const navLinks = [
  { name: 'Home', link: '#hero' },
  { name: 'Services', link: '#services' },
  { name: 'About', link: '#about' },
  { name: 'Testimonials', link: '#testimonials' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>