<template>
  
  <!-- <header>  -->
  <img alt="Logo Groupomania" src="./assets/1653474647318_icon-left-font.png"> 
  
  <nav>
    <router-link to="/new"><img class="plus" alt="icone plus to create a new post" src="./assets/Plus.png"></router-link>
    <router-link to="/">Home</router-link> 
    <router-link to="/signup">Signup</router-link>
    <router-link to="/login">Login</router-link>
    <button @click="Logout">Logout</button>
  </nav>

  <router-view/>
<!-- </header>  -->
</template>

<script>
export default {
  methods:{
    Logout(){
      sessionStorage.clear();
      return this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style>

body{
  margin:0;
}
#app {
  font-family: 'Lato', sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* max-width:1280px; */
  width:100%;
  margin:auto;
  color: #4E5166;
}
/* 
#password {
  margin-left: 10px;
}

#email {
  margin-left: 33px;
  margin-bottom: 20px;
} */

nav {
  padding-left: 80px;
  padding-right: 80px;
  padding-top:40px;
  padding-bottom:40px;
  margin-right: 8px;
  background-color: #FFD7D7;
  /* max-width: 1200px; */
  width:100%;
  margin: auto;
 


}

nav a {
  font-weight: bold;
  color: #4E5166;
  margin:10px;
}

nav a.router-link-exact-active {
  color: #FD2D01;
}

.plus {
  width: 2%;
}

img {
  max-width:100%;
  height:auto;
}

@media screen and (max-width:768px){
  nav{
    padding-left: 40px;
  padding-right: 40px;
  }
}
</style>
