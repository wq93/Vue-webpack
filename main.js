import './style.css'
// 导入vue
import Vue from 'vue'
import App from './app.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

document.getElementById('app').innerHTML = 'Hello webpack.';
