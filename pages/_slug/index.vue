<template>
  <div>
      <!-- 리스트 아이템 -->
      <list-item
        :title="pageName"
        :listData="listData"
      ></list-item>
  </div>
</template>

<script>
import ListItem from '~/components/ListItem.vue'
export default {
  components: { ListItem },
  async asyncData (context) {
    console.log('index', context)
    const pageName = context.params.slug
    const listData = await context.$axios.$get(`https://api.hnpwa.com/v0/${pageName}/1.json`)
    console.log(listData)
    return {
      pageName,
      listData
    }
  }
}
</script>

<style>

</style>
