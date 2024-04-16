<script setup>

import Social_media from './components/Social_media.vue'
import Navigation_menu from './components/Navigation_menu.vue'
import { RouterView } from 'vue-router'

</script>

<template>
  
  <body>
    <header>
      <Navigation_menu/>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <Social_media/>
    </footer> 
  </body>

</template>

<style></style>
