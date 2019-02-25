<template>
  <div class="hello">
    <!-- <img v-lazy="imgObj"/> -->
    <div class="container" v-lazy:background-image="imgObj"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      imgObj: {
       src: 'http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner1.jpg',
       error: require("../assets/error.jpg"),
       loading: require("../assets/loading.gif")
     }
    }
  }
}
</script>

<style scoped>
.container{
  width: 400px;
  height: 250px;
  background-size: cover;
}
</style>
