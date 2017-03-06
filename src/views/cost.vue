<template>
<div class="main">
  <app-header title="COST DATA"></app-header>
  <div class="content">
    <div class="list">
      <List v-for="item in list">
        <ListItem :index="item.index" :date="item.date" :value="item.value"></ListItem>
      </List>
    </div>
  </div>
</div>
</template>

<script>
import AppHeader from 'components/AppHeader'
import List from 'components/List'
import ListItem from 'components/List-item'
import createList from '../assets/test-js/data.js'
export default {
  components: {
    AppHeader,
    List,
    ListItem
  },
  data() {
    return {
      list: createList('cost')
    }
  }
}
</script>
