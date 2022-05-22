<script>
export default {
  // component options
  data(){
    return {
      message:'Hello World!',
      titleClass: 'title',
      count: 0
    }
  },
  methods:{
    increment(){
      this.count++
    }
  }
}
</script>

<template>
<H3>Step 1&2</H3>
  <h1 :class="titleClass">{{message.split('').reverse().join('')}}</h1>
  <button @click="increment">count is: {{ count }}</button>

</template>

<style>
.title {
  color: red;
}
</style>