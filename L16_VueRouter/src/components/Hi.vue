<template lang="html">
  <div class="">
    HI组件:
    {{ $route.params.id }}
    -
    {{ $route.params.count }}
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:"ehllo"
    }
  },
  methods:{
  }
}
</script>

<style lang="css">
</style>
