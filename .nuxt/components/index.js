export { default as Comment } from '../../components/Comment.vue'
export { default as Header } from '../../components/Header.vue'
export { default as ListItem } from '../../components/ListItem.vue'

export const LazyComment = import('../../components/Comment.vue' /* webpackChunkName: "components/comment" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyListItem = import('../../components/ListItem.vue' /* webpackChunkName: "components/list-item" */).then(c => c.default || c)
