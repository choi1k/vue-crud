<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <StepOne/>
  <StepThree/>
  <StepSix/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import StepOne from './components/tutorial/StepOne.vue'
import StepThree from './components/tutorial/StepThree.vue'
import StepSix from './components/tutorial/StepSix.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    StepOne,
    StepThree,
    StepSix
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
