<template>
<div id="app">
  <footer>
    <bars>
      <bar path="/home" label="HOME" icon="home"></bar>
      <bar path="/weight" label="WEIGHT" icon="weight"></bar>
      <bar path="/rate" label="RATE" icon="rate"></bar>
    </bars>
  </footer>
  <transition name="fade" mode="out-in">
    <router-view class="view"></router-view>
  </transition>
</div>
</template>

<script>
import Bar from './components/Bar'
import Bars from './components/Bars'
export default {
  name: 'app',
  components: {
    Bars,
    Bar
  }
}
</script>

<style>
@import url('./assets/css/main.css');
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 15px;
  background-color: #eee;
  margin: 0;
  color: #34495e;
  overflow-y: scroll;
}

footer {
  width: 100%;
  position: absolute;
  bottom: 0;
}

#app {
  height: 100%;
}
</style>
