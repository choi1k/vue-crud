<template>

  <div id="app">
    <Navbar />
    <CRUD></CRUD>
    <div class="container">
      <!-- <router-view /> -->
      <Users></Users>
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import CRUD from './components/CRUD.vue'
import Users from './components/Users.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    CRUD,
    Users
}
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
