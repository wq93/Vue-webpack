<template>
  <div>
    <v-title title="Vue 组件化"></v-title>
    <v-button @click="handleClick">点击按钮</v-button>
    <p>
      <img src="./img.jpg" alt="">
    </p>
    <!--<a href="https://user-gold-cdn.xitu.io/2019/1/20/16869e21c883337f?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1">-->
    <!--点击下载图片-->
    <!--</a>-->
    <input type="file" @change="handleClickUpload($event)">
    <a href="javascript:;" @click="handleClickDownload">下载</a>
  </div>
</template>
<script>
  import vTitle from './title.vue'
  import vButton from './button.vue'

  var FileSaver = require('file-saver');
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
      },
      handleClickDownload() {
        // FileSaver.saveAs("https://b-gold-cdn.xitu.io/v3/static/img/juejin-2018.7b9d1ea.png", "image.png")

        // 写文件
        var file = new File(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(file);
      },
      handleClickUpload($event) {
        var reader = new FileReader()

        let file = $event.target.files[0]
        console.log(file)
        let fileName = file.name
        let fileType = file.type
        console.log(reader.readAsText(file));
        // let outPut = new File(file, fileName, {type: fileType});
        // FileSaver.saveAs(outPut);
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