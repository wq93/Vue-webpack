<template>
  <div>
    <v-title title="Vue 组件化"></v-title>
    <v-button @click="handleClick">点击按钮</v-button>
    <p>
      <img src="./img.jpg" alt="">
    </p>
  </div>
</template>
<script>
  import vTitle from './title.vue'
  import vButton from './button.vue'

  export default {
    components: {
      vTitle, vButton
    },
    data() {
      return {
        name: 'wangqi'
      }
    },
    methods: {
      handleClick(e) {
        console.log(e)
      }
    }
  }
</script>
<style scoped>
  div {
    color: #f60;
    font-size: 24px;
  }
</style>