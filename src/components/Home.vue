<template>
  <div class="relative w-full bg-[#f8fbff] dark:bg-[#000830]">
    <Navbar />
    
    <section id="hero">
      <Hero />
    </section>

    <main class="relative z-10">
      <section id="services" class="relative">
        <Service />
      </section>

      <section id="about" class="scroll-reveal">
        <AboutSection />
      </section>

      <div class="bg-slate-50/50 dark:bg-[#000a3d]/30 py-20 space-y-32">
        <section id="impacts" class="relative">
          </section>
        
        <section id="testimonials" class="scroll-reveal">
          <Testimonials />
        </section>
      </div>

      <div class="py-20 border-y border-slate-200 dark:border-white/5">
        <ClientTrust />
        <Enterprise class="mt-20" />
      </div>

      <section id="why-choose" class="relative">
        <WhyChooseUs />
      </section>

      <CTASection />
    </main>

    <FooterSection />
    <AIChatWidget />
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Components
import Navbar from './Navbar.vue'
import Hero from './Hero.vue'
import Service from './Service.vue'
import AboutSection from './AboutSection.vue'
import Testimonials from './Testimonials.vue'
import Enterprise from './Enterprise.vue'
import ClientTrust from './ClientTrust.vue'
import WhyChooseUs from './WhyChooseUs.vue'
import CTASection from './CTASection.vue'
import FooterSection from './FooterSection.vue'
import AIChatWidget from './AIChatWidget.vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(async () => {
  await nextTick()

  if (document.readyState === 'complete') {
    ScrollTrigger.refresh()
  } else {
    window.addEventListener('load', () => ScrollTrigger.refresh())
  }

  document.documentElement.classList.add('js-ready')

  // Intersection Observer for Scroll Reveal
  const targets = document.querySelectorAll('.scroll-reveal')
  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('in-view'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  )

  targets.forEach((el) => observer.observe(el))
})
</script>

<style>
/* Smooth scrolling behavior */
html {
  scroll-behavior: smooth;
}

/* Offset for fixed navbar so content isn't hidden behind it */
section {
  scroll-margin-top: 100px;
}

.js-ready .scroll-reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.js-ready .scroll-reveal.in-view {
  opacity: 1;
  transform: translateY(0);
}
</style>