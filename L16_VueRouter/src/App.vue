<template>
  <div id="app">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>

import Nav from "./components/nav"

export default {
  name: 'App',
  components:{
    Nav
  }
}
</script>

<style>
body{
  background: #f1f1f1;
}

*{
  margin: 0;
  padding: 0
}

a:link,a:hover,a:active,a:visited{
  color:#222;
}

</style>
