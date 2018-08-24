import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Cars from '@/components/Cars'
import Car from '@/components/Car'
import Houses from '@/components/Houses'
import Jobs from '@/components/Jobs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/cars',
      name: 'cars',
      component: Cars
    }, {
      path: '/houses',
      name: 'houses',
      component: Houses
    }, {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/cars/:id',
      name: 'Car',
      props: true,
      component: Car
    }
  ]
})
