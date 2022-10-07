<template>
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/signup">Signup</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Lato;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4E5166;
}

#password {
  margin-left: 10px;
}

#email {
  margin-left: 33px;
  margin-bottom: 20px;
}

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
