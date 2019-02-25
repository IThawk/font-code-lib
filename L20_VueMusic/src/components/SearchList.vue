<template lang="html">
  <div class="searchlist">
    <div class="panel hotsongs" v-loading.fullscreen.lock="fullscreenLoading">
      <ul class="list">
        <router-link :key="index" :to="{name:'MusicPlay',params:{songid:item.songid}}" tag="li" class="song" v-for="(item,index) in musicData.song">
          <div class="info">
              <div class="name">{{ item.songname }}</div>
              <div class="author">{{ item.artistname }}</div>
          </div>
        </router-link>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name:"searchlist",
  data(){
    return{
      fullscreenLoading:true,
      musicData:{
        songlist:[]
      }
    }
  },
  props:{
    content:{
      type:String,
      default:""
    }
  },
  created(){
    const searchUrl = this.HOST + "/v1/restserver/ting?method=baidu.ting.search.catalogSug&query="+this.content
    this.$axios.get(searchUrl)
    .then(res => {
      this.musicData = res.data
      this.fullscreenLoading = false
    })
    .catch(error => {
      console.log(error);
    })
  }
}
</script>

<style scoped>

.searchlist{
  background-color: #fff;
  margin-top: 10px;
  padding: 10px 17px;
  padding-top: 0;
}

.layout.home .mod-lists .panel {
    border-top: 1px solid #eee;
    position: relative;
    top: -1px;
    display: none;
}

.list {
    word-wrap: break-word;
    -webkit-hyphens: auto;
    hyphens: auto;
    word-break: break-all;
}

.panel .list li {
    height: 55px;
    border-bottom: 1px solid #eee;
    padding-left: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}

.list li.song {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    min-height: 55px;
    text-align: left;
    margin-top: 10px;
}

.panel .list li .poster {
    position: relative;
    width: 45px;
    margin-right: 8px;
}

.panel .list li .poster img {
    border: 1px solid #eee;
}

.list li .info {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.panel .list li .info .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    color: #333;
}

.panel .list li .info .author {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #999;
    margin-top: 2px;
}

</style>
