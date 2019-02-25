<template lang="html">
  <div class="search">
  <div class="xw a2" style="position: relative;">
    <div class="y1 hasCancel">
      <i id="iconToSearch" class="y2 y4"></i>
      <input v-model="searchdata" type="search" style="max-width:90%" class="y0" placeholder="搜索你喜欢的音乐">
      <i id="iconToClear" class="a1q y4"></i>
    </div>
    <router-link tag="span" :to="{name:'SearchView',params:{searchcontent:searchdata}}" class="y5">搜索</router-link>
  </div>
  </div>
</template>

<script>
export default {
  name:"search",
  data(){
    return{
      searchdata:""
    }
  },
  methods:{
    searchHandler(event){
      console.log(this.searchdata);
    }
  }
}
</script>

<style scoped>

.xw {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
    height: 44px;
    line-height: 44px;
    background-color: #fff;
    color: #555;
    font-size: 17px;
    text-align: center;
    transform: translateZ(0);
}

.y1 {
    position: absolute;
    left: 8px;
    top: 8px;
    right: 14px;
    background: #fff;
    border-radius: 2px;
    border: 1px solid #e6e6e6;
    height: 28px;
}

.y4 {
    background-image: url(//static-o2o.360buyimg.com/daojia/new/images/icon/search_bar_sprites.png);
    background-size: 44px auto;
    background-repeat: no-repeat;
}

.y0 {
    vertical-align: top;
    outline: none;
    background: transparent;
    border: none;
    font-family: "microsoft yahei",Verdana,Arial,Helvetica,sans-serif;
    font-size: 14px;
    height: 28px;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
}

.a1q {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    background-position: -8px -140px;
    width: 28px;
    height: 28px;
}

.y5 {
    position: absolute;
    right: 13px;
    top: 8px;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    background-color: #e5e5e5;
    -webkit-border-radius: 3px;
    -ms-border-radius: 3px;
    border-radius: 3px;
    color: #333333;
    font-size: 14px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
}

</style>
