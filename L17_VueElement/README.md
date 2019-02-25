1.安装element-ui
  npm i element-ui -S
2.按需加载
  npm install babel-plugin-component -D
  修改.babelrc
  {
    "presets": [
      ["es2015", { "modules": false }]
    ],
    "plugins": [["component", [
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]]]
  }
3.使用
  import { Button, Select,Option, Steps,Step } from 'element-ui'
  Vue.use(Button)
  copy
4.常用第三方组件
  1.swiper
    安装：npm install vue-awesome-swiper --save
    引入:
    import VueAwesomeSwiper from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    Vue.use(VueAwesomeSwiper, /* { default global options } */)
    参考官方API
