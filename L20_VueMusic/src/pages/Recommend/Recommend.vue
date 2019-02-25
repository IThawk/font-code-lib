<template lang="html">
  <div class="">
    <RecommendList :musictype="$route.params.musictype" />
  </div>
</template>

<script>
import RecommendList from "../../components/RecommendList"
export default {
  name:"recommend",
  data(){
    return{

    }
  },
  components:{
    RecommendList
  }
}
</script>

<style scoped>
</style>
