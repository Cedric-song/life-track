<template>
<nav class="bar-tab">
  <slot></slot>
</nav>

</template>
<style scoped>
.tab-item.active {
  color: #ed8e07 !important;
}

.bar-tab {
  width: 100%;
  bottom: 0;
  left: 0;
  height: 80px;
  background-color: red;
  display: flex;
  flex-direction: row;
  background-color: #222;
}

</style>
