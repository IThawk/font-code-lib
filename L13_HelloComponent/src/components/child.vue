<template lang="html">
  <div class="child">
    我是儿子
    父亲给你的:{{ title }}-{{ hello }} -{{world}}-{{obj }}

    <button v-on:click="sendMsg" type="button" name="button">发送</button>
  </div>
</template>

<script>
export default {
  name:"child",
  data(){
    return{
      initMsg:[
        {
          name:"child",
          age:10
        },
        {
          name:"iwen",
          age:20
        }
      ]
    }
  },
  props:{
    title:String,
    hello:{
      type:Number,
      required:true
    },
    world:{
      type:String,
      default:"hello world"
    },
    obj:{
      type: Object,
      default:function(){
        return{
          name:"name"
        }
      }
    }
  },
  methods:{
    sendMsg(event){
      // 儿子准备好发送数据
      this.$emit("getInfo",this.initMsg);
    }
  }
}
</script>

<style lang="css">
</style>
