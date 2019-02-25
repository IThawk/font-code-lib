<template lang="html">
  <div class="">
     <Block>
       <h3 slot-scope="props">{{ props.title }}</h3>
     </Block>
  </div>
</template>

<script>

import Block from "./block"

export default {
  name:"tiyu",
  data(){
    return{

    }
  },
  components:{
    Block
  }
}
</script>

<style lang="css">
</style>
