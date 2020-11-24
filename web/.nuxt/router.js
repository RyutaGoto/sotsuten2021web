import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b495d6ac = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _0c9f20c4 = () => interopDefault(import('../pages/research/index.vue' /* webpackChunkName: "pages/research/index" */))
const _23e244dc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _b495d6ac,
    name: "contact"
  }, {
    path: "/research",
    component: _0c9f20c4,
    name: "research"
  }, {
    path: "/",
    component: _23e244dc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
