<template lang="html">
  <div class="">
    baidu
    <p ref="myp">哈哈</p>
    <p :class="hello">哈哈</p>
    <button @click="myHandler" type="button" name="button">哈哈</button>
    <ul>
      <li v-for="(item,index) in music.song_list">{{ item.album_title }}</li>
    </ul>

    <ul ref="ul" @click="getLI">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
    <ul>
      <li :key="index" :class="{active:nowIndex == index}"  @click="getcurrentLI(index)" v-for="(name,index) in names">{{ name }}</li>
    </ul>
  </div>
</template>

<script>

import $ from "jquery"
export default {
  name:"baidu",
  data(){
    return{
      music:{
        song_list:[]
      },
      hello:"hello",
      names:["iwen","ime","ice"],
      flag:false,
      nowIndex:0
    }
  },
  mounted(){
    var myp = this.$refs.myp
    var ul = this.$refs.ul;
    // myp.addEventListener("click",function(){
    //   console.log("干啥")
    // })
    // $(myp).css("color","red")
    // $(ul).on("click","li",function(event){
    //   console.log($(this).html());
    // })
  },
  created(){
    // 网络请求
    var url =  this.HOST+"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=1&offset=0";
    this.$axios.get(url)
    // this.$axios.get("/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0")
    .then(res => {
      this.music = res.data
      console.log(res)
    })
    .catch(error => {
      console.log(error);
    })
  },
  methods:{
    myHandler(event){
      console.log(111);
    },
    getLI(event){
      if(event.target){
        console.log(event.target.innerHTML);
      }
    },
    getcurrentLI(index){
      this.nowIndex = index;
      console.log(this.names[index]);
    }
  }
}
</script>

<style lang="css">

.active{
  background: red;
}

</style>
