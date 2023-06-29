<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
 <h1>vite 单页应用</h1>
 {{count}}
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
