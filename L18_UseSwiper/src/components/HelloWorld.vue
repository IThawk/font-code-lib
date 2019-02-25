<template>
  <div class="hello">
     <swiper :options="swiperOption"  ref="mySwiper">
       <swiper-slide v-for="slide in bannerData.banner">
         <img :src="slide.img" alt="slide.title">
       </swiper-slide>
       <div class="swiper-pagination"  slot="pagination"></div>
       <div class="swiper-button-prev" slot="button-prev"></div>
       <div class="swiper-button-next" slot="button-next"></div>
     </swiper>
     <button @click="getIndex" type="button" name="button">按钮</button>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
        swiperSlides: [1, 2, 3, 4, 5],
        bannerData:{
          banner:[]
        }
    }
  },
  computed:{
    swiper() {
        return this.$refs.mySwiper.swiper
    }
  },
  mounted(){
    // 网络请求
    this.$axios.get("/sxtstu/blueberrypai/getIndexBanner.php")
    .then(res => {
      this.bannerData = res.data
    })
    .catch(error => {
      console.log(error)
    })
  },
  methods:{
    getIndex(){
      // 读到swiper对象
      console.log(this.swiper.getTranslate());
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello{
  width: 400px;
  height: 250px;
}

.hello img{
  width: 400px;
  height: 250px;
}

</style>
