<template lang="html">
  <div class="">
    <button v-on:click="changeData" type="button" name="button">改变</button>
    {{ mydata }}
  </div>
</template>

<script>
export default {
  name:"demo",
  data(){
    return{
      mydata:'改变之前的数据'
    }
  },
  methods:{
    changeData(){
      this.mydata ="数据改变之后"
    }
  },
  // 组件被创建之前
  beforeCreate(){
    console.log("组件被创建之前")
  },
  created(){
    console.log("组件被创建之后")
  },
  // 组件被渲染之前
  beforeMount(){
    console.log("组件被渲染之前")
  },
  // 组件被渲染之后
  mounted(){
    console.log("组件被渲染之后")
  },
  // 数据改变重新渲染之前
  beforeUpdate(){
    console.log("数据改变渲染之前")
  },
  // 数据改变渲染之后
  updated(){
    console.log("数据改变渲染之后")
  },
  // 组件销毁之前
  beforeDestory(){
    console.log("组件销毁之前")
  },
  // 组件销毁之后
  destoryed(){
    console.log("组件销毁之后")
  }
}
</script>

<style lang="css">
</style>
