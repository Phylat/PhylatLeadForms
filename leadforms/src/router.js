import Vue from 'vue'
import Router from 'vue-router'
import SoftwareForm from './views/SoftwareForm.vue'
import softwaretwo from './views/SoftwareFormInterpolated.vue'

import FormPlaceholder from '@/components/forms/form_placeholder.vue'
import StepFormPlaceholder from '@/components/forms/step_form_placeholder.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'SoftwareForm',
      component: SoftwareForm
    },
    {
      path: '/fortwo',
      name: 'softwaretwo',
      component: softwaretwo
    },
    {
      path: '/FormPlaceholder',
      name: 'FormPlaceholder',
      component: FormPlaceholder
    },
    {
      path: '/StepFormPlaceholder',
      name: 'StepFormPlaceholder',
      component: StepFormPlaceholder
    }
  ]
})