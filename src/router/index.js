/*
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-11-29 14:57:41
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-11-29 15:18:23
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/button'
  },
  {
    path: '/button',
    name: 'JButton',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "JButton" */ '../views/J-Button')
  },
  {
    path: '/table',
    name: 'JTable',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "JTable" */ '../views/J-Table')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
