<template>
  <div class="hello">
    <ul>
      <li v-for="item in axiosData.banner">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      axiosData:{
        banner:[]
      }
    }
  },
  created(){
    // this.$axios.get("http://www.wwtliu.com/sxtstu/news/juhenews.php",{
    //   params:{
    //     type:"yule",
    //     count:10
    //   }
    // })
    // .then(res => {
    //   console.log(res.data)
    //   // this.axiosData = res.data
    // })
    // .catch(error => {
    //   console.log(error);
    // })
    // get请求带参数地址：http://www.wwtliu.com/sxtstu/blueberrypai/getSongInfo.php?song=mo
    this.$axios({
      method:"get",
      url:"http://www.wwtliu.com/sxtstu/news/juhenews.php",
      params:{
        type:"yule",
        count:30
      }
    })
    .then(res => {
      console.log(res.data)
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
