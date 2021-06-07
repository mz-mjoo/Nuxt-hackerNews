<template>
  <div class="comment_wrap">
      <p>
        <b>{{ commentData.user }}</b>
        <span> - {{ commentData.time_ago }}</span>
      </p>
      <h3>{{ commentData.title }}</h3>
      <ol class="comment_list">
          <li v-for="item in commentData.comments" :key="item.id">
              <span v-html="item.content"></span>
              <b class="user" v-if="item.user">by {{ item.user }}</b>
          </li>
      </ol>
  </div>
</template>

<script>
export default {
  props: {
    commentData: {
      type: Object,
      default: () => {}
    }

  }
}
</script>

<style>

</style>
