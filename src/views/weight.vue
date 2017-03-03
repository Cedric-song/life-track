<template>
<div class="main">
  <app-header title="WEIGHT DATA"></app-header>
  <div class="content">
    <div class="trend">
      <span>recent weight change:</span>
      <i>+</i>
      <span>0.1KG</span>
    </div>
    <div class="overview">
      <Chunk v-for="(view,index) in overview" :title="view.title" :date="view.date" :weight="view.weight" :index="index"></Chunk>
    </div>
    <div class="list">
      <List v-for="item in list">
        <ListItem :index="item.index" :date="item.date" :weight="item.weight"></ListItem>
      </List>
    </div>
  </div>
</div>
</template>

<script>
import AppHeader from 'components/AppHeader'
import List from 'components/List'
import ListItem from 'components/List-item'
import Chunk from 'components/Chunk'
import createList from '../assets/test-js/data.js'
// create test list data
export default {
  components: {
    AppHeader,
    List,
    ListItem,
    Chunk
  },
  data() {
    return {
      list: createList(),
      overview: [
        {
          title: 'MIN WEIGHT',
          date: '2017-01-01',
          weight: '80KG'
        },
        {
          title: 'MAX WEIGHT',
          date: '2017-01-01',
          weight: '90KG'
        }
      ]
    }
  }
}
</script>
<style scoped>
.main {
  height: calc(100% - 135px);
}

.list {
  padding-bottom: 80px;
}

.trend {
  height: 10%;
  line-height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
  z-index: 10;
}

.overview {
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding: 0 20px;
  height: 30%;
  width: 100%;
  border: 2px solid #d7d7d7;
  border-right: 0;
  border-left: 0;
  box-sizing: border-box;
}
</style>
