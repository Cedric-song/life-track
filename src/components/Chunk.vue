<template>
<div class="row" :class="rowIndex">
  <span v-text="title"></span>
  <span v-text="date"></span>
  <span v-text="weight"></span>
</div>
</template>

<script>
export default {
  props: {
    title: '',
    date: '',
    weight: '',
    index: ''
  },
  computed: {
    rowIndex() {
      return `row-${this.index}`
    }
  }
}
</script>

<style lang="css" scoped>
.row {
  flex-grow: 1;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.row-0 {
  border-right: 2px solid #d7d7d7;
}

.row span {
  display: block;
  padding-top: 10px;
}
</style>
