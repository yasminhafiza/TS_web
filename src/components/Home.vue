<template>
  <div class="relative w-full overflow-hidden bg-[#f8fbff] dark:bg-[#000830]">
    <Navbar />

    <Hero />

    <main class="relative z-10">
      <section id="services" data-animate class="reveal-element py-20">
        <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff1e42] to-transparent shadow-[0_0_20px_#ff1e42]"></div>
        <Service />
      </section>

      <section id="about" data-animate class="reveal-element">
        <AboutSection />
      </section>

      <section id="why-choose" data-animate class="reveal-element">
        <WhyChooseUs />
      </section>

      <div class="bg-slate-50/50 dark:bg-[#000a3d]/30 py-20 space-y-32">
        <section id="impacts" data-animate class="reveal-element">
          <OurImpacts />
        </section>
        <section id="testimonials" data-animate class="reveal-element">
          <Testimonials />
        </section>
      </div>

      <div class="py-20 border-y border-slate-200 dark:border-white/5">
        <ClientTrust />
        <PartnerCloud class="mt-20" />
      </div>

      <CTASection />
    </main>

    <FooterSection />
    <AIChatWidget />
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'

// Import path pastikan sudah benar (tanpa /components/ lagi)
import Navbar from './Navbar.vue'
import Hero from './Hero.vue'
import Service from './Service.vue'
import AboutSection from './AboutSection.vue'
import WhyChooseUs from './WhyChooseUs.vue'
import OurImpacts from './OurImpacts.vue'
import Testimonials from './Testimonials.vue'
import PartnerCloud from './PartnerCloud.vue'
import ClientTrust from './ClientTrust.vue'
import CTASection from './CTASection.vue'
import FooterSection from './FooterSection.vue'
import AIChatWidget from './AIChatWidget.vue'

onMounted(async () => {
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }

  await nextTick();

  // Deteksi semua elemen yang harus muncul
  const targets = document.querySelectorAll('[data-animate]');

  // FALLBACK: Jika browser tidak support IntersectionObserver, langsung tampilkan semua
  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Logic aman: Jika masuk layar atau posisi sudah lewat, munculkan.
      if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 }); // Threshold kecil agar lebih sensitif

  targets.forEach((el) => observer.observe(el));
});
</script>

<style>
/* Pastikan ini ada agar elemen tidak hilang permanen */
.reveal-element {
  opacity: 0;
  transform: translateY(30px);
  filter: blur(5px);
  transition: all 0.8s ease-out;
}

.reveal-element.active {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
</style>