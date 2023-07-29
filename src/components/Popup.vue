<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TabItem from './TabItem.vue'

const tabs = ref<chrome.tabs.Tab[]>([])

onMounted(async () => {
  tabs.value = await chrome.tabs.query({ audible: true })
})
</script>

<template>
  <div class="w-80 p1 font-sans">
    <div v-if="tabs">
      <TabItem v-for="tab in tabs" :key="tab.id" :tab="tab" />
    </div>
  </div>
</template>
