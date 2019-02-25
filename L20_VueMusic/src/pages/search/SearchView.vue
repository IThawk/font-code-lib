<template lang="html">
  <div class="">
    <SearchList :content="$route.params.searchcontent"/>
  </div>
</template>

<script>
import SearchList from "../../components/SearchList"
export default {
  name:"searchview",
  data(){
    return{

    }
  },
  components:{
    SearchList
  }
}
</script>

<style lang="css">
</style>
