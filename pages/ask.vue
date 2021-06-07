<template>
  <div class="ask-area">
    <ListItem
      :title="currentRoute"
      :list-data="listData"
    />
  </div>
</template>

<script>
import ListItem from '../components/ListItem'

export default {
  components: {
    ListItem
  },
  async asyncData ({ $axios, route }) {
    const currentRoute = route.name
    const listData = await $axios.$get(`https://api.hnpwa.com/v0/${currentRoute}/1.json`)

    return {
      currentRoute,
      listData
    }
  }

}
</script>

<style></style>
