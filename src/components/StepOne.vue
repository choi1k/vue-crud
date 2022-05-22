<script>
export default {
  // component options
  data(){
    return {
      message:'Hello World!',
      titleClass: 'title'
    }
  }
}
</script>

<template>
  <h1 :class="titleClass">{{message.split('').reverse().join('')}}</h1>
</template>

<style>
.title {
  color: red;
}
</style>