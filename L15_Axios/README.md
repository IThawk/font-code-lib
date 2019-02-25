参考地址：https://www.kancloud.cn/yunye/axios/234845
参考地址：https://github.com/axios/axios

1.Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
2.优势：
  从浏览器中创建 XMLHttpRequests
  从 node.js 创建 http 请求
  支持 Promise API
  拦截请求和响应
  转换请求数据和响应数据
  取消请求
  自动转换 JSON 数据
  客户端支持防御 XSRF
3.安装：
  npm install axios --save
4.引入：
  import Axios from "axios"
  Vue.prototype.$axios = Axios
5.应用：
  this.$axios({
    method:"get",
    url:"http://www.wwtliu.com/sxtstu/news/juhenews.php",
    params:{
      type:"yule",
      count:30
    }
  })
  .then(res => {
    console.log(res.data)
  })
  .catch(error => {
    console.log(error)
  })


Mock(网络请求模拟数据的方案):
  1.请求自己的JSON格式数据
      缺点：无法进行post请求
  2.自己搭建服务器模拟数据
      挺好的
  3.使用线上已存在的数据
      必须提前存在服务器
