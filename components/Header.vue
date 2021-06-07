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
        { value: 'news', name: 'News', path: '/news' },
        { value: 'ask', name: 'Ask', path: '/ask' },
        { value: 'Jobs', name: 'Jobs', path: '/jobs' }
      ]
    }
  }

}
</script>

<style scoped>
ul {
  display: flex;
}
li {
 list-style: none;
 font-size: 20px;
}
li + li {
  margin-left: 20px;
}

 a {
   text-decoration: none;
   color: #000;
   font-weight: bold;
 }
</style>
