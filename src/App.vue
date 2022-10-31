<template>
  
  <!-- <header>  -->
  <img alt="Logo Groupomania" src="./assets/1653474647318_icon-left-font.png"> 
  
  <nav>
    
    <!-- <router-link to="/new"> -->
      <!-- <div class="plus"> -->
      <!-- <img class="plus" alt="icone plus to create a new post" src="./assets/Plus.png"> -->
      <svg @click="addPost">
        <path d="M10,0 V20 M-10,10 H20" stroke-width="3px" stroke="#4E5166" stroke-opacity="1"/>
        
      </svg>
    <!-- </div>  -->
    <!-- </router-link> -->
 
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
    },
    addPost(){
      return this.$router.push({name: 'new'})
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

button {
  background: none;
  background-color: #4E5166;
  border:none;
  outline:none;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight:bold;
  color:#FFD7D7;
  border: 1px solid #4E5166;
  border-radius: 5px;
  margin:10px;
}

nav {
  padding-left: 80px;
  padding-right: 80px;
  padding-top:40px;
  padding-bottom:40px;
  margin-right: 8px;
  background-color: #FFD7D7;
  /* filter:brightness(1.1); */
  /* max-width: 1200px; */
  width:100%;
  height:40px;
  margin: auto;
 


}

nav a {
  font-weight: bold;
  color: #4E5166;
  margin:10px;
 

}

nav a.router-link-exact-active {
  color: #FD2D01;
  /* filter:brightness(0.6); */
}

svg {
  
    width:20px;
    height:20px;
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
