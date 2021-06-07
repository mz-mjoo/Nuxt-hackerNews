export { default as Header } from '../../components/Header.vue'
export { default as ListItem } from '../../components/ListItem.vue'

export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyListItem = import('../../components/ListItem.vue' /* webpackChunkName: "components/list-item" */).then(c => c.default || c)
