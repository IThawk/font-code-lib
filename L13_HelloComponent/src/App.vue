<template>
  <div id="app">
    <img src="./assets/logo.png">
    <News />
    <Tiyu />
  </div>
</template>

<script>

import Parent from "./components/parent"
import UseComponent from "./components/usecomponent"

import Tiyu from "./components/pages/tiyu"
import News from "./components/pages/news"
export default {
  name: 'App',
  components: {
    Parent,
    UseComponent,
    Tiyu,
    News
  },
  data(){
    return {
      h3:"哈哈4"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
