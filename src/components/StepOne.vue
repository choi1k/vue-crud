<script>
export default {
  // component options
  data(){
    return {
      message:'Hello World!'
    }
  }
}
</script>

<template>
  <h1>{{message.split('').reverse().join('')}}</h1>
</template>