<template>
  <div>
      imagine99
  </div>
</template>

<script>
export default {
  asyncData (context) {
    console.log(context)
  },
  validate (payload) {
    console.log('validate', payload)

    return true
  }
//   validate (context) {
//     console.log('imagine validate', context)
//   },
//   asyncData (context) {
//     console.log('imagine asyncData', context)
//   }
}
</script>

<style>

</style>
