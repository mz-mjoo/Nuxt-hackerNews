import Vue from 'vue'

const components = {
  Comment: () => import('../../components/Comment.vue' /* webpackChunkName: "components/comment" */).then(c => c.default || c),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  ListItem: () => import('../../components/ListItem.vue' /* webpackChunkName: "components/list-item" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
