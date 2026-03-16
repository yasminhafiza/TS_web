<template>
  <Teleport to="body">
    <div class="fixed bottom-6 right-6 z-[9999] font-sans flex flex-col items-end">
      
      <transition name="chat-anim">
        <div 
          v-if="isOpen" 
          class="mb-4 w-[90vw] sm:w-[380px] h-[500px] bg-white dark:bg-[#0a0f2d] border border-gray-200 dark:border-rose-900/30 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden"
        >
          <div class="bg-rose-600 p-4 text-white flex items-center justify-between shadow-md">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-lg">🤖</div>
              <h3 class="font-bold text-sm">SDI Assistant</h3>
            </div>
            <button @click="isOpen = false" class="opacity-70 hover:opacity-100">✕</button>
          </div>

          <div ref="chatContainer" class="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f8fbff] dark:bg-[#000524]">
            <div v-for="(msg, index) in messages" :key="index" 
                 :class="['flex w-full', msg.role === 'user' ? 'justify-end' : 'justify-start']">
              <div :class="[
                'max-w-[85%] px-4 py-2 rounded-2xl text-sm shadow-sm',
                msg.role === 'user' ? 'bg-rose-600 text-white rounded-tr-none' : 'bg-white dark:bg-gray-800 dark:text-gray-200 rounded-tl-none border dark:border-gray-700'
              ]">
                {{ msg.text }}
              </div>
            </div>
            <div v-if="isTyping" class="text-xs text-gray-400 animate-pulse">Mengetik...</div>
          </div>

          <div class="p-4 bg-white dark:bg-[#0a0f2d] border-t dark:border-gray-800">
            <form @submit.prevent="handleSendMessage" class="flex gap-2">
              <input v-model="userInput" type="text" placeholder="Tulis pesan..." 
                     class="flex-1 bg-gray-100 dark:bg-gray-900 border-none rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-rose-600 outline-none dark:text-white" />
              <button type="submit" class="bg-rose-600 text-white p-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </transition>

      <button 
        @click="isOpen = !isOpen"
        class="w-14 h-14 bg-rose-600 hover:bg-rose-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
      >
        <span v-if="!isOpen" class="text-2xl">💬</span>
        <span v-else class="text-xl">✕</span>
      </button>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, nextTick, watch } from 'vue'

const isOpen = ref(false)
const userInput = ref('')
const isTyping = ref(false)
const chatContainer = ref(null)
const messages = ref([{ role: 'ai', text: 'Halo! Ada yang bisa saya bantu?' }])

const scrollToBottom = async () => {
  await nextTick()
  if (chatContainer.value) chatContainer.value.scrollTop = chatContainer.value.scrollHeight
}

const handleSendMessage = () => {
  if (!userInput.value.trim()) return
  messages.value.push({ role: 'user', text: userInput.value })
  const userText = userInput.value
  userInput.value = ''
  scrollToBottom()

  isTyping.value = true
  setTimeout(() => {
    isTyping.value = false
    messages.value.push({ role: 'ai', text: `Anda baru saja mengatakan: "${userText}".` })
    scrollToBottom()
  }, 1000)
}

watch(messages, () => scrollToBottom(), { deep: true })
</script>

<style scoped>
.chat-anim-enter-active, .chat-anim-leave-active { transition: all 0.3s ease; }
.chat-anim-enter-from, .chat-anim-leave-to { opacity: 0; transform: scale(0.8) translateY(20px); transform-origin: bottom right; }
</style>