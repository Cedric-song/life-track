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
      <div class="row row-1">
        <span class="hd">MAX WEIGHT</span>
        <span>80.1KG</span>
        <span>2017-10-10</span>
      </div>
      <div class="row">
        <span class="hd">MAX WEIGHT</span>
        <span>80.1KG</span>
        <span>2017-10-10</span>
      </div>
    </div>
    <div class="list">
      <ul>
        <li class="li">
          <span>1</span>
          <span>2017-1-1</span>
          <span>80KG</span>
        </li>
        <li class="li">
          <span>1</span>
          <span>2017-1-1</span>
          <span>80KG</span>
        </li>
        <li class="li">
          <span>1</span>
          <span>2017-1-1</span>
          <span>80KG</span>
        </li>
        <li class="li">
          <span>1</span>
          <span>2017-1-1</span>
          <span>80KG</span>
        </li>
        <li class="li">
          <span>1</span>
          <span>2017-1-1</span>
          <span>80KG</span>
        </li>
        <li class="li">
          <span>1</span>
          <span>2017-1-1</span>
          <span>80KG</span>
        </li>
        <li class="li">
          <span>1</span>
          <span>2017-1-1</span>
          <span>80KG</span>
        </li>
        <li class="li">
          <span>1</span>
          <span>2017-1-1</span>
          <span>80KG</span>
        </li>
        <li class="li">
          <span>1</span>
          <span>2017-1-1</span>
          <span>80KG</span>
        </li>
        <li class="li">
          <span>1</span>
          <span>2017-1-1</span>
          <span>80KG</span>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import AppHeader from 'components/AppHeader'
export default {
  components: {
    AppHeader
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

.overview .row {
  flex-grow: 1;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.row-1 {
  border-right: 2px solid #d7d7d7;
}

.row span {
  display: block;
  padding-top: 10px;
}

.list .li {
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
