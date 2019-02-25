import Vue from "vue"

// 全局自定义指令
Vue.directive('focus',{
  inserted(el){
      el.focus();
  }
})

Vue.directive("mycss",{
  inserted(el){
    el.style.color = "#f00";
  }
})
