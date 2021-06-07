<template>
  <div>
      <Comment
        :commentData="commentData"
      ></Comment>
  </div>
</template>

<script>
import Comment from '@/components/Comment.vue'
export default {
  async asyncData (context) {
    console.log('id!!', context)
    console.log(context.params.id)
    const commentId = context.params.id
    const commentData = await context.$axios.$get(`https://api.hnpwa.com/v0/item/${commentId}.json`)
    console.log('comment', commentData)

    return {
      commentData
    }
  },
  components: { Comment }
}
</script>

<style>

</style>
