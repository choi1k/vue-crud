<script>
export default {
    data() {
        return {
            text: ''
        }
    },
    //   methods: {
    //     onInput(e) {
    //       this.text = e.target.value
    //     }
    //   }
}
</script>

<template>
    <H3>Step 3</H3>
    <!-- <input :value="text" @input="onInput" placeholder="Type here"> -->
    <input v-model="text" placeholder="Type here">
    <p>{{ text }}</p>
    <!--
        automatically suncs the <input>'s value with the bound state 
        no longer need to use a event handler
        v-model은 text inputs, checkbox, radio button, select dropdown에도 이용가능
    -->
</template>