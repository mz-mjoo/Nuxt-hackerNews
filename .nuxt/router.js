import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2dc3ca40 = () => interopDefault(import('../pages/ask.vue' /* webpackChunkName: "pages/ask" */))
const _5257281f = () => interopDefault(import('../pages/jobs.vue' /* webpackChunkName: "pages/jobs" */))
const _e1c7f526 = () => interopDefault(import('../pages/event/imagine05.vue' /* webpackChunkName: "pages/event/imagine05" */))
const _f1e7bac8 = () => interopDefault(import('../pages/event/_slug.vue' /* webpackChunkName: "pages/event/_slug" */))
const _5242f459 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _184eee58 = () => interopDefault(import('../pages/_slug/index.vue' /* webpackChunkName: "pages/_slug/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ask",
    component: _2dc3ca40,
    name: "ask"
  }, {
    path: "/jobs",
    component: _5257281f,
    name: "jobs"
  }, {
    path: "/event/imagine05",
    component: _e1c7f526,
    name: "event-imagine05"
  }, {
    path: "/event/:slug?",
    component: _f1e7bac8,
    name: "event-slug"
  }, {
    path: "/",
    component: _5242f459,
    name: "index"
  }, {
    path: "/:slug",
    component: _184eee58,
    name: "slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
