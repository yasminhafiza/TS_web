<template>
  <footer class="relative w-full bg-slate-50 dark:bg-[#000839] border-t border-slate-200 dark:border-white/5 pt-24 pb-12 overflow-hidden transition-colors duration-500">
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#ff1e42]/5 blur-[100px] rounded-full pointer-events-none"></div>
    
    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
        
        <div class="lg:col-span-5 space-y-8">
          <a href="/" class="inline-flex items-center gap-4 group">
            <div class="p-2.5 bg-gradient-to-br from-slate-50 to-white dark:from-white/10 dark:to-white/5 rounded-xl border border-slate-200 dark:border-white/10 group-hover:border-blue-500/50 transition-all duration-500 shadow-xl dark:shadow-2xl shadow-blue-500/10">
              <img src="../assets/logo/technology-services/SDI.png" alt="SDI Logo" class="h-8 w-auto object-contain filter dark:brightness-110 transition-all duration-500" />
            </div>
            <div class="flex flex-col">
              <span class="text-2xl font-black tracking-tighter text-slate-800 dark:text-white leading-none transition-colors duration-500">Technology Services</span>
              <span class="text-[10px] text-blue-600 dark:text-blue-500 font-black uppercase tracking-[0.3em] mt-1.5 transition-colors duration-500">Integrated Digital Solutions</span>
            </div>
          </a>
          
          <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-md font-light transition-colors duration-500">
            Architecting digital ecosystems by integrating strategy, security, and cutting-edge technology to drive sustainable industrial transformation and competitive excellence.
          </p>
          
          <div class="flex items-center gap-3">
            <a v-for="social in socialLinks" :key="social.name" :href="social.link" 
               target="_blank" rel="noopener noreferrer"
               class="w-11 h-11 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 hover:-translate-y-1 transition-all duration-300">
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <div class="lg:col-span-3">
          <h4 class="text-[11px] font-black text-slate-800 dark:text-white uppercase tracking-[0.25em] mb-10 flex items-center gap-3 transition-colors duration-500">
            IT Services
            <span class="w-8 h-[1px] bg-blue-500/50"></span>
          </h4>
          <ul class="space-y-5">
            <li v-for="item in services" :key="item">
              <a href="#" class="text-[13px] text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-all duration-300 flex items-center group">
                <span class="w-0 group-hover:w-3 h-[1.5px] bg-blue-600 dark:bg-blue-500 mr-0 group-hover:mr-3 transition-all"></span>
                {{ item }}
              </a>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-4 space-y-10">
          <div>
            <h4 class="text-[11px] font-black text-slate-800 dark:text-white uppercase tracking-[0.25em] mb-8 transition-colors duration-500">Headquarters</h4>
            <div class="flex items-start gap-4 group">
              <div class="mt-1 p-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/5 text-blue-600 dark:text-blue-500 border border-blue-100 dark:border-blue-500/10 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors duration-500">
                <MapPin class="w-4 h-4" />
              </div>
              <p class="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed transition-colors duration-500">
                <strong class="text-slate-800 dark:text-white block mb-1 font-semibold italic transition-colors duration-500">Graha Aktiva, 5th Floor, Suite 503</strong>
                Jl. HR. Rasuna Said Blok X-1, Kav. 3, Kuningan Timur<br />
                South Jakarta, 12950, Indonesia
              </p>
            </div>
          </div>

      <!-- <div class="p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 space-y-4 transition-colors duration-500">
            <h5 class="text-xs font-bold text-slate-800 dark:text-gray-200 uppercase tracking-widest transition-colors duration-500">Stay Updated</h5>
            <div class="relative">
              <input type="email" placeholder="Enter business email" 
                class="w-full bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs text-slate-800 dark:text-white focus:outline-none focus:border-blue-500/50 transition-all duration-500" />
              <button class="absolute right-2 top-1.5 bottom-1.5 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-500">
                <ArrowRight class="w-4 h-4" />
              </button>
            </div>
          </div> -->
        </div>

      </div>

      <div class="pt-10 border-t border-slate-200 dark:border-white/5 transition-colors duration-500">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p class="text-[10px] text-slate-400 dark:text-gray-600 tracking-[0.15em] uppercase transition-colors duration-500">
              &copy; {{ new Date().getFullYear() }} SDI Technology Services. All Rights Reserved.
            </p>
            <div class="flex items-center gap-6 text-[11px] text-slate-500 dark:text-gray-500 font-medium transition-colors duration-500">
              <a href="#" class="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Privacy Policy</a>
              <a href="#" class="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <div class="flex items-center gap-8">
            <div class="flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 transition-colors duration-500">
              <div class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
              <span class="text-[9px] text-slate-500 dark:text-gray-400 font-bold tracking-widest uppercase transition-colors duration-500">System Status: Operational</span>
            </div>
            <div class="hidden md:flex items-center gap-4">
               <Phone class="w-3.5 h-3.5 text-slate-400 dark:text-gray-600 transition-colors duration-500" />
               <span class="text-[11px] text-slate-500 dark:text-gray-500 transition-colors duration-500">+62 21 2589 3760</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { 
  MapPin, 
  Mail, 
  Linkedin, 
  Phone,
  Globe,
  ArrowRight
} from 'lucide-vue-next'

const services = [
  'Core Application & Reporting',
  'Corporate Application',
  'Network Infrastructure',
  'Web & Mobile Application',
  'Productivity',
  'End User Touchpoint'
]

const socialLinks = [
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    link: 'https://www.linkedin.com/company/pt-solusi-daya-indonesia/' 
  },
  { 
    name: 'Website', 
    icon: Globe, 
    link: 'https://www.solusidaya.id/' 
  },
  {
    name: 'Email',
    icon: Mail,
    link: 'mailto:info@solusidaya.id'
  }
]
</script>

<style scoped>
footer {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom smooth scrolling for the links */
a {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>