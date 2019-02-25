<template lang="html">
  <div class="ct1">
      ct1:
      <button v-on:click="changeCt1" type="button" name="button">切换Ct1的内容</button>
      {{ currentCt1 }}
  </div>
</template>

<script>
export default {
  name:"ct1",
  data(){
    return{
      currentCt1:"hello ct1"
    }
  },
  methods:{
    changeCt1(){
      this.currentCt1 = "Hollo Learn Ct1"
    }
  }
}
</script>

<style lang="css">
</style>
