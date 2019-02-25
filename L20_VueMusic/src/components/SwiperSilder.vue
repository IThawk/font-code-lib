<template lang="html">
  <div class="silder">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="../assets/banner/b1.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/banner/b2.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/banner/b3.jpg" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name:"slider",
  data(){
    return{
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
        loop:true
      }
    }
  }
}
</script>

<style scoped>

</style>
