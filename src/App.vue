<template>
  <v-app>
    <v-main>
    <router-view/>
  </v-main>
  
    <AppBar/>
  </v-app>
</template>

<script setup>
  import AppBar from '@/views/AppBar.vue'
</script>
