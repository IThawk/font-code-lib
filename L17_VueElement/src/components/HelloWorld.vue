<template>
  <div class="hello">
    <el-button type="primary">主要按钮</el-button>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <div class="progress">
      <el-steps :active="active" finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
    </div>
    <div class="btn">
      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>

    <div class="rate">
      <el-rate v-model="value1"></el-rate>
    </div>

    <el-form ref="form" :model="form" label-width="80px" >
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
        <el-input v-model="form.age"></el-input>
        <el-button @click="getInfo">提交</el-button>
      </el-form-item>
    </el-form>



    <div class="myswiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <img src="http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner1.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner2.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner3.jpg" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop:true,
        pagination: {
          el: '.swiper-pagination',
        }
      },
      form:{
        name:"iwen",
        age:20
      },
      value1: null,
      active: 0,
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
    }
  },
  methods: {
     next() {
       if (this.active++ > 2) this.active = 0;
     },
     getInfo(event){
       console.log(this.form);
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.progress{
  width: 400px;
}
.rate .el-rate__icon{
  font-size: 100px;
}

.myswiper{
  width: 400px;
  height: 300px;
}
.myswiper img{
  width: 400px;
  height: 300px;
}
/*
.swiper-pagination-bullet-active{
  background: red;
} */

</style>
