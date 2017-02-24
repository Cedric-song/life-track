import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import NotFoundComponent from 'views/NotFoundComponent'
import Home from 'views/home'
import Rate from 'views/rate'
import Weight from 'views/weight'

export default new Router({
  // mode: 'history',
  routes: [{
    path: '/home',
    component: Home
  }, {
    path: '/rate',
    component: Rate
  }, {
    path: '/weight',
    component: Weight
  }, {
    path: '/',
    redirect: '/home'
  }, {
    path: '*',
    component: NotFoundComponent
  }]
})
