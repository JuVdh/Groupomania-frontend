<template>
  
  <!-- <header>  -->
  <img alt="Logo Groupomania" src="./assets/1653474647318_icon-left-font.png"> 
  <nav>
    <router-link to="/new"><img class="plus" alt="icone plus to create a new post" src="./assets/Plus.png"></router-link>
    <router-link to="/">Home</router-link> 
    <router-link to="/signup">Signup</router-link>
    <router-link to="/login">Login</router-link>
    </nav>
  <router-view/>
<!-- </header>  -->
 

</template>

<style scoped>
/* header {
display:flex;
flex-direction: row;
background-color:#FFD7D7;
} */


#app {
  /* display:flex;
  flex-direction: column;
  background-color: #4E5166; */
  font-family: Lato;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
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
  background-color: #FFD7D7;
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
</style>
