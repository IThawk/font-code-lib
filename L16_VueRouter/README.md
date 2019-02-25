1.安装：
  npm install --save vue-router
2.编写代码
  1.引入
    import VueRouter from "vue-router"
    Vue.use(VueRouter)
  2.创建Router
    const router = new VueRouter({
      routes:[
        {
          path:"/hello",
          component:HelloWorld
        }
      ]
    })
  3.注入router
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  4.显示路由组件
    <router-view></router-view>
3.router-link描述：
  <router-link> 比起写死的 <a href="..."> 会好一些，理由如下：
  无论是 HTML5 history 模式还是 hash 模式，它的表现行为一致，所以，当你要切换路由模式，或者在 IE9 降级使用 hash 模式，无须作任何变动。
  在 HTML5 history 模式下，router-link 会守卫点击事件，让浏览器不再重新加载页面。
  当你在 HTML5 history 模式下使用 base 选项之后，所有的 to 属性都不需要写（基路径）了
4.重定向：
  {
    path:"/",
    redirect:"/index"
  }
5.路由嵌套
  children
  显示的位置：父级在哪里，显示的位置就在那里
6.参数传递
  1.配置路由信息
    path:"/hi/:id/:count",
  2.配置路由跳转路径信息
    <router-link  :to="{ name:'hi',params:{id:'100',count:20} }">hi</router-link>
  3.读取信息
    {{ $route.params.id }}-{{ $route.params.count }}
7.高亮
  
