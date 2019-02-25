<template lang="html">
  <div class="demo">
    动画：
    <button v-on:click="show = !show">
    Toggle
    </button>
    <transition name="fade">
     <div v-if="show">
       <p>hello</p>
       <p>demo</p>
     </div>
    </transition>
  </div>
</template>

<script>
export default {
  name:"anim",
  data(){
    return{
      show: true
    }
  }
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
