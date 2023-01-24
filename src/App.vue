<script setup>
// 处理menu数据持久化
import { useStore } from 'vuex';
const store = useStore();
store.commit('addMenu')
</script>

<template>
  <router-view />
</template>

<style scoped>

</style>
