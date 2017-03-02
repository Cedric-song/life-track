<template>
<router-link class="tab-item" :to="{path:path,activeClass:'active'}" replace>
  <i class="iconfont" :class="iconClass"></i>
  <span class="tab-label" v-text="label"></span>
</router-link>
</template>
<script>
export default {
  props: {
    path: '',
    icon: '',
    label: ''
  },
  computed: {
    iconClass() {
      return `icon-${this.icon}`
    }
  }
}
</script>

<style scoped>
.tab-item {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #aaa;
}

.tab-item.active {
  color: #ed8e07;
}

.tab-item i,
.tab-item span {
  align-self: center;
}

.tab-item span {
  font-size: 15px;
}

.iconfont:before {
  font-size: 35px;
}

.router-link-active {
  background-color: #333;
  color: #fff;
}
</style>
