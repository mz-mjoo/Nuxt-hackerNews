<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li
        v-for="(list,index) in listData"
        :key="index"
      >
        {{ list.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: String
    },
    listData: {
      type: Array,
      default: Array
    }
  },
  head () {
    return {
      title: `Hackernews | ${this.title}`
    }
  },
  created () {
    console.log('listItem의 created ', this.$route.name)
  }

}
</script>

<style>

</style>
