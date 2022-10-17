<template>
  <!-- <header> 
  <img alt="Logo Groupomania" src="../assets/1653474647318_icon-left-font.png">
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/signup">Signup</router-link>
    <router-link to="/login">Login</router-link>
  </nav>
  <router-view/>
  </header>
  <div class="home">  -->

    <!-- <img alt="Vue logo" src="../assets/1653474647318_icon-left-font.png"> -->
    <HelloWorld msg="getAllPosts work in progress..."/>
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
,
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
