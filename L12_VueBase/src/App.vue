<template>
  <div class="root">
    <input v-model.trim.lazy="msg" type="text" name="" value="">
    <p>{{ msg }}</p>
    <button v-on:click="getMSG" type="button" name="button">按钮</button>

    <ul>
      <li v-for="name in names">{{ name }}</li>
    </ul>
    <button v-on:click="addInfo" type="button" name="button">去吧皮卡丘</button>

    <div>
      <p v-bind:class="{ active: isActive }">哈哈</p>
      <p v-bind:class="{ active: 0<10,demo:true }">哈哈</p>
      <p v-bind:class='[h1,h2]'>1111</p>
      <p v-bind:class="[{'hello1':0>10},'hello2']">hhh</p>
    </div>

    <ul>
      <li v-bind:class="[{'active':index%2 == 0},'hello']" v-for="(item,index) in names">{{ item }}</li>
    </ul>

    <div class="">
      <p v-bind:style="myStyle">字体</p>
    </div>

    <div>
      {{ massageInfo }}
      {{ massageInfo }}

      {{ mtMassgeInfo() }}
    </div>
    <Hello />
  </div>
</template>

<script>

import Hello from "./components/hello"

export default {
  name:"App",
  data(){
    return{
      msg:"hello",
      names:["iwen","ime","ice"],
      isActive:false,
      h1:"hhh1",
      h2:"hhh2",
      myStyle:{
        color:'#ff0',
        fontSize:"30px"
      },
      message:"hello"
    }
  },
  components:{
    Hello
  },
  methods:{
    getMSG(event){
      console.log(this.msg);
    },
    addInfo(event){
      // this.names.push("二哥")
      this.names.concat(["二哥"]);
    },
    mtMassgeInfo(){
      return this.message.split('').reverse().join('')
    }
  },
  computed:{
    massageInfo(){
      return this.message.split('').reverse().join('')
    }
  }
}
</script>

<style lang="css">

</style>
