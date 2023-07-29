<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const props = defineProps<{
  tab: chrome.tabs.Tab
}>()

const tabId = props.tab.id!
const muted = ref(false)
onMounted(async () => {
  const currentTab = await chrome.tabs.get(tabId)
  const currentState = currentTab.mutedInfo?.muted
  muted.value = !!currentState
})

watch(muted, (state) => {
  chrome.tabs.update(tabId, { muted: state })
})

const toggleMute = () => {
  muted.value = !muted.value
}
</script>

<template>
  <button class="flex items-center w-full gap-2 h-14 mb-1 p-2 last:mb-0 text-left cursor-pointer hover:bg-slate-900/10"
    @click="toggleMute">
    <div class="line-clamp-2">
      {{ tab.title }}
    </div>
    <div class="ml-auto text-xl">
      <div v-if="muted" class="i-uil-volume-mute text-slate-600/50" />
      <div v-else class="i-uil-volume text-slate-600" />
    </div>
  </button>
</template>
