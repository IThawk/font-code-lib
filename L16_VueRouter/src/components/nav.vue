<template lang="html">
  <div class="nav">
    <ul>
        <li><router-link  to="/index">首页</router-link></li>
        <li><router-link  to="/hello">hello</router-link></li>
        <!-- <li><router-link  :to="hi">hi</router-link></li> -->
        <!-- <li><router-link  :to="{ path:hi }">hi</router-link></li> -->
        <li><router-link  :to="{ name:'hi',params:{id:'100',count:20} }">hi</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"appnav",
  data(){
    return{
      hi:"/hi"
    }
  }
}
</script>

<style lang="css">


.nav{
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #fff;
}
.nav ul{
  clear: both;
  overflow: hidden;
}

.nav ul li{
  float: left;
  margin: 0 20px;
  list-style: none;
}

.active{
  color: red !important;
}

</style>
