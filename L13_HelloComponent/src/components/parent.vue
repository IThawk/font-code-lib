<template>
  <div class="">
    我是父亲
    <ul>
      <li v-for="item in initMessage">{{ item.name }}-{{ item.age }}</li>
    </ul>
    <Child v-on:getInfo="getInfos" title="我是父亲要传递给儿子数据" v-bind:hello="hello" world="我是world" v-bind:obj="obj" />

  </div>

</template>

<script>

import Child from "./child"

export default {
  name:"parent",
  data(){
    return{
      hello:111,
      obj:{
        name:"iwen",
        age:20
      },
      initMessage:[]
    }
  },
  components:{
    Child
  },
  methods:{
    getInfos(data){
      this.initMessage = data;
    }
  }
}
</script>

<style lang="css">

</style>
