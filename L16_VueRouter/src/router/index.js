import Vue from 'vue'
import VueRouter from "vue-router"
import HelloWorld from "../components/HelloWorld"
import Hi from "../components/Hi"
import Index from "../components/index"
import Hello1 from "../pages/hello1"
import Hello2 from "../pages/hello2"

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass:"active",
  mode: 'history',
  routes:[
    {
      path:"/",
      redirect:"/index"
    },
    {
      path:"/hello",
      component:HelloWorld,
      redirect:"/hello/hello1",
      children:[
        {
          path:'hello1',
          component:Hello1
        },
        {
          path:'hello2',
          component:Hello2
        }
      ]
    },
    {
      path:"/hi/:id/:count",
      name:"hi",
      component:Hi
    },
    {
      path:"/index",
      component:Index
    }
  ]
})
