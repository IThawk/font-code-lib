<template lang="html">
  <div class="mod-songlists">
    <div class="hd">
        <h2>热门歌单</h2>
    </div>
    <div class="container">
      <div class="wrapper">
        <SingerList :key="index" v-for="(item,index) in singerListData" :singerid="item" />
      </div>
    </div>
  </div>
</template>

<script>

import SingerList from "../components/SingerList"

export default {
  name:"singer",
  data(){
    return{
      singerListData:["2517","132632388","1117","1094","1067","821050"]
    }
  },
  components:{
    SingerList
  }
}
</script>

<style scoped>

.mod-songlists {
    background-color: #fff;
    margin-top: 10px;
    padding: 10px 17px;
}

.hd {
    margin: 14px 0 18px 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}

.hd h2 {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    margin: 0;
    padding: 0;
    font-size: 20px;
}

.wrapper{
  border: none;
  margin: 0 -5px;
  overflow: hidden;
  position: relative;
  width: auto;
}


</style>
