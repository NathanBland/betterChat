import Vue from 'vue'
import App from './App'
import About from './About'
import Home from './components/Home'
import Router from 'vue-router'
/* eslint-disable no-new */
Vue.use(Router)
var app = Vue.extend({
  components: { App }
})

var router = new Router({
  linkActiveClass: 'is-active'
})

router.map({
  '/': {
    component: Home
  },
  '/about': {
    component: About
  }
})

router.start(app, 'body')
