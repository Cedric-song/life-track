<template>
<header>
  <span class="icon" v-if="back"></span>
  <span class="title" v-text="title"></span>
</header>
</template>

<script>
export default {
  props: {
    title: '',
    back: false
  }
}
</script>

<style scoped>
header {
  height: 55px;
  width: 100%;
  background-color: #222;
  text-align: center;
  line-height: 55px;
  color: #fff;
  font-size: 18px;
}
</style>
