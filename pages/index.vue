<template>
  <div>
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
    const currentRoute = route.name === 'index' ? 'news' : route.name
    const listData = await $axios.$get(`https://api.hnpwa.com/v0/${currentRoute}/1.json`)
    // console.log('context',context);
    // console.log('context',currentRoute);
    // console.log(listData);

    return {
      currentRoute,
      listData
    }
  }
  // async asyncData(context) {
  //   console.log(`I'm asyncData 🐱`, 'context =>',  context);

  //   const dataList = await context.$axios.$get(`https://api.hnpwa.com/v0/news/1.json`);

  //   console.log('데이터다',dataList);

  //   return {
  //     dataList
  //   }

  // },
  // fetch(context) {
  //   console.log(`I'm fetch 🐱`, 'context =>',  context);
  //   console.log('fetch this!',this);
  //   console.log('fetch axios',this.$axios);

  // },
  // created() {
  //   console.log(`I'm created 🐱`);
  //   console.log('created this!',this);
  //   console.log(this.$route);
  // }
}
</script>

<style>

</style>
