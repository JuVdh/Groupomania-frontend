<template>
  <HelloWorld/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  beforeCreate(){
    let token=JSON.parse(sessionStorage.getItem('data-token'));
    if (!token) {
      return this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #4E5166;
  margin:10px;
}

nav a.router-link-exact-active {
  color: #FD2D01;
}
</style>
