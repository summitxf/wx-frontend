import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import routerConfig from './router'
import App from './App'

// Router
Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true,
  root: '/vue-wechat'
})

routerConfig(router)

// Resource
Vue.use(VueResource)

Vue.http.options.emulateJSON = true

router.start(App, 'app')

window.router = router
