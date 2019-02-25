<template lang="html">
  <div class="hello">
    <button v-on:click="flag = !flag" type="button" name="button">去吧</button>
    <transition  name="custom-classes-transition" enter-active-class="animated rotateInUpRight" leave-active-class="animated rotateOutDownLeft">
      <p class="myhello" v-show="flag">哈哈</p>
    </transition>
  </div>
</template>

<script>
export default {
  name:"an",
  data(){
    return{
      flag:true
    }
  },
  methods:{
    change(event){

    }
  }
}
</script>

<style lang="css">

.myhello{
  position: absolute;
  left: 50%;
}

/* .hello-leave , .hello-enter-to{
  transform: translateX(0);
}
.hello-leave-to,.hello-enter{
  transform: translateX(100px);
}
.hello-leave-active, .hello-enter-active{
  transition: all 2s ease;
} */

</style>
