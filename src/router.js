import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Navigation from './views/Navigation'
import Nest1 from './views/Nest1'
import TopLevelComponent from './views/TopLevelComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '*',
      redirect: '/Home'
    },
    {
      path: '/Home/',
      name: 'Home',
      components: {
        default: Home,
        helperview: '',
        navmenu: Navigation
      },
      props: true
    },
    {
      path: '/Nested',
      name: 'TopLevelComponent',
      props: false,
      components: {
        default: TopLevelComponent,
        helperview: Nest1,
        navmenu: Navigation
      }
    }]
})
