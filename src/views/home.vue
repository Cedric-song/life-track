<template>
<div class="main">
  <app-header title="FOR NEW LIFE"></app-header>
  <div class="content">
    <div class="row location">
      <i class="iconfont icon-location"></i>
      <span>{{ position }}</span>
    </div>
    <div class="row tw">
      <div class="cl weather">
        <div>
          <span>WEATHER</span>
        </div>
        <div v-for="item in weather">
          <span>{{item.name}}</span>
          <span class="num">{{item.value}}</span>
        </div>
      </div>
      <div v-if="!recordCost" class="cost">
        <span>MY COST</span>
        <span class="user-weight">
          <input v-model="cost" type="text" name="cost" @blur="saveValue" maxlength="5" autofocus>
          <b>元</b>
        </span>
      </div>
      <div v-else class="cost">
        <span class="">MY COST</span>
        <span class="user-cost" @click="showInput('recordCost')">{{ cost }}元</span>
      </div>
    </div>
    <div class="row wr">
      <div v-if="!recordWeight" class="weight">
        <span>MY WEIGHT</span>
        <span class="user-weight">
          <input v-model="weight" type="text" name="weight" @blur="saveValue" maxlength="5" autofocus>
          <b>KG</b>
        </span>
      </div>
      <div v-else class="weight">
        <span class="">MY WEIGHT</span>
        <span class="user-weight" @click="showInput('recordWeight')">{{ weight }}KG</span>
      </div>
      <div class="cl rate">
        <div>
          <span>MY RATE</span>
        </div>
        <div v-for="item in rate">
          <span>{{item.name}}</span>
          <span class="num">{{item.rate}}</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import AppHeader from 'components/AppHeader'
import TMAP from 'TMAP'
export default {
  name: 'home',
  components: {
    AppHeader
  },
  data() {
    return {
      recordWeight: false,
      weight: '0.0',
      recordCost: false,
      cost: '0.0',
      position: '',
      rate: [],
      weather: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    saveValue() {
      if (~~this.$data[event.target.name] !== 0) {
        this.$data['record' + event.target.name[0].toUpperCase() + event.target.name.slice(1)] = true
      }
    },
    showInput(name) {
      this.$data[name] = false
    },
    fetchData() {
      let that = this
      // fetch exchange rate from yahoo api. only get SGD/CNY & USD/CNY
      that.$http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDCNY%22%2C%20%22SGDCNY%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=').then(res => {
        const data = res.body.query.results.rate
        data.forEach(item => {
          console.log(item.Name + ':' + item.Rate)
          that.$data.rate.push({
            name: item.Name,
            rate: item.Rate
          })
        })
      })
      that.$http.get('https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Beijing%2CChina%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys').then(res => {
        const data = res.body.query.results.channel.item.condition
        console.log('temp:' + ((data.temp - 32) / 1.8).toFixed(1))
        console.log('condition:' + data.text)
        that.$data.weather.push({
          name: 'TEMP',
          value: ((data.temp - 32) / 1.8).toFixed(1)
        }, {
          name: 'CONDITION',
          value: data.text
        })
      })
      const geolocation = new TMAP.maps.Geolocation()
      geolocation.getLocation(function (position) {
        console.log(position)
        that.$data.position = position.nation + ' ' + (position.province === position.city ? position.province : (position.province + ' ' + position.city))
      })
    }
  }
}
</script>

<style scoped>
.main {
  height: calc(100% - 135px);
}

.content {
  display: flex;
  flex-direction: column;
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

.wr,
.tw {
  display: flex;
}

.weight,
.cost {
  flex: 3;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-right: 2px solid #666;
  padding-left: 20px;
}

.rate,
.weather {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-right: 2px solid #666;
  padding-left: 20px;
  font-size: 22px;
  flex: 2;
  box-sizing: border-box;
}

.user-weight,
.user-cost {
  font-size: 30px;
  padding-top: 10px;
}

.user-weight input,
.user-cost input {
  width: 80px;
  height: 30px;
  border: 0;
  font-size: 30px;
}

.cl>div {
  padding: 3% 0;
}

.cl div>span {
  display: block;
}

.num {
  font-size: 30px;
  color: #CC3333;
}
</style>

<!-- google map API_KEY : AIzaSyDnpl6xs3yF_oaSs6zh0qumjgf9hvmaIqA-->
<!-- tencent map ZRBBZ-GXWLR-FKXWG-WI2TV-HA4A6-2ABMI -->
