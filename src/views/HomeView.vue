<script setup lang="ts">
import TheWelcome from '_c/TheWelcome.vue'
import { useUserInfoStore } from '@/stores/modules/userInfo'
const store = useUserInfoStore()
store.changeNum()
console.log(store.name);
console.log(store.num);
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
