<template>
  <header>
    <nav>
      <ul>
        <li
          v-for="(list,index) in navList"
          :key="index"
        >
          <NuxtLink :to="list.path">
            {{ list.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        { value: 'news', name: 'News', path: '/' },
        { value: 'ask', name: 'Ask', path: '/ask' },
        { value: 'Jobs', name: 'Jobs', path: '/jobs' }
      ]
    }
  }

}
</script>

<style>

</style>
