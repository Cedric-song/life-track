<template>
<li class="li">
  <span v-text="index"></span>
  <span v-text="date"></span>
  <span v-text="weight"></span>
</li>
</template>

<script>
export default {
  props: {
    index: '',
    date: '',
    weight: ''
  }
}
</script>

<style scoped>
.li {
  display: flex;
  border-bottom: 2px solid #d7d7d7;
  text-align: center;
}

.li span {
  flex: 2;
}

.li span:first-child {
  flex: 1;
}
</style>
