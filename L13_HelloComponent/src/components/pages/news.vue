<template lang="html">
  <div class="">
    <Block>
      <p slot-scope="props">{{ props.title }}</p>
    </Block>
  </div>
</template>

<script>

import Block from "./block"

export default {
  name:"news",
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
