<template>
<div class="main">
  <app-header title="FOR NEW LIFE"></app-header>
  <div class="content">
    <div class="row location">
      <i class="iconfont icon-location"></i>
      <span>China ／ BeiJing</span>
    </div>
    <div class="row tw">time && weather</div>
    <div class="row wr">
      <div v-if="!recordWeight" class="weight">
        <span>MY WEIGHT</span>
        <span class="user-weight">
          <input v-model="weight" type="text" name="weight" @change="saveValue">
          <b>KG</b>
        </span>
      </div>
      <div v-else class="weight">
        <span class="">MY WEIGHT</span>
        <span class="user-weight">{{ weight }}KG</span>
      </div>
      <div class="rate">
        <div>
          <span>MY RATE</span>
        </div>
        <div>
          <span>SGD / CNY</span>
          <span class="num">4.89000</span>
        </div>
        <div>
          <span>CNY / SGD</span>
          <span class="num">0.21111</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import AppHeader from 'components/AppHeader'
export default {
  components: {
    AppHeader
  },
  data() {
    return {
      recordWeight: false,
      weight: '0.0'
    }
  },
  methods: {
    saveValue() {
      if (Number.parseFloat(this.$data.weight) !== 0) {
        this.$data.recordWeight = true
      }
    }
  }
}
</script>

<style scoped>
.content {
  height: calc(100% - 55px);
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
}

.row {
  height: 40%;
  box-sizing: border-box;
}

.row.location {
  height: 20%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: auto;
  font-size: 22px;
}

.location>span {
  padding-left: .5em;
}

.location,
.tw {
  border-bottom: 2px solid #666;
}

.main {
  height: calc(100% - 80px);
}

.wr,
.tw {
  display: flex;
}

.weight {
  flex: 3;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-right: 2px solid #666;
  padding-left: 20px;
}

.rate {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-right: 2px solid #666;
  padding-left: 20px;
  font-size: 22px;
}

.user-weight {
  font-size: 30px;
  padding-top: 10px;
}

.user-weight input {
  width: 80px;
  height: 30px;
  border: 0;
  font-size: 30px;
}

.rate {
  flex: 2;
  box-sizing: border-box;
}

.rate>div {
  padding: 3% 0;
}

.num {
  font-size: 30px;
  color: #CC3333;
}
</style>

<!-- google map API_KEY : AIzaSyDnpl6xs3yF_oaSs6zh0qumjgf9hvmaIqA-->
