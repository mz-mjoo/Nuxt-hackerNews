<template>
  <div>
    <h2>📗 {{ title }}</h2>
    <ul>
      <li
        v-for="(list,index) in listData"
        :key="index"
      >
        <a
        class="link"
         :href="list.url" target="_blank">
          {{ list.title }}
        </a>
        <router-link
          class="comment"
         :to="`/${title}/${list.id}`">
          <span>{{ listcomments_count }}</span>
        </router-link>
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
  asyncData (context) {
    console.log('listItem 🎈', context)
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

<style scoped>
li {
  list-style: none;
}

a {
  text-decoration: none;

}

.link {
  color: #666666;
  margin-right: 20px;
}
.comment {
  color: darkslategrey;
}
</style>
