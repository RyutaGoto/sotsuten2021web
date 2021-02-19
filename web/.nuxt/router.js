import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a8bdc948 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _46d18dd2 = () => interopDefault(import('../pages/research/index.vue' /* webpackChunkName: "pages/research/index" */))
const _b04b625c = () => interopDefault(import('../pages/session.vue' /* webpackChunkName: "pages/session" */))
const _8929109a = () => interopDefault(import('../pages/session copy.vue' /* webpackChunkName: "pages/session copy" */))
const _70bce87b = () => interopDefault(import('../pages/research/post/_id.vue' /* webpackChunkName: "pages/research/post/_id" */))
const _9bb75fe4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/sotsuten2021/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _a8bdc948,
    name: "contact"
  }, {
    path: "/research",
    component: _46d18dd2,
    name: "research"
  }, {
    path: "/session",
    component: _b04b625c,
    name: "session"
  }, {
    path: "/session copy",
    component: _8929109a,
    name: "session copy"
  }, {
    path: "/research/post/:id?",
    component: _70bce87b,
    name: "research-post-id"
  }, {
    path: "/",
    component: _9bb75fe4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
