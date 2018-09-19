<template>
  <h1>
    <a :href="'#'+title">{{title}}</a>
  </h1>
</template>

<script>
  export default {
    name: "title",
    props: {
      title: {
        type: String
      }
    }
  }
</script>

<style scoped>
  hl a {
    color: #3399ff;
    font-size: 24px;
  }
</style>