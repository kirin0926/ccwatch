import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import teacher from '@/components/teacher/index'
console.log(HelloWorld)
console.log(teacher)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'teacher',
      component: teacher
    },
    {
      path: '/indexs',
      name: 'Hello',
      component: HelloWorld
    }
  ]
})
