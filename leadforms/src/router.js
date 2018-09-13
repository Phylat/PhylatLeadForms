import Vue from 'vue'
import Router from 'vue-router'
import SoftwareForm from './views/SoftwareForm.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'SoftwareForm',
    component: SoftwareForm
  }]
})