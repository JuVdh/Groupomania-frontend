<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>

  <div>
		<label for="email">Email</label>
		<input type="text" v-model="email" id="email">
  </div>
    
  <div>
		<label for="password">Password</label>
		<input type="password" v-model="password" id="password">
  </div>
  
  <div><button @click="logIn">To log in</button></div>
  
  <div>
    <span>You don't have an account yet? </span>
    <router-link to="signup">Please signup</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Connexion',
      email: '', 
      password: ''
    }
  }, 
  methods: {
    logIn(){
      let user = {
        email: this.email,
        password: this.password
      };

      if (this.email && this.password){
      // if password correct?       
        fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res=> {
          if (res.ok) {
            return res.json()
          }
        })
        .then(data=>{
          sessionStorage.setItem('data-token', JSON.stringify(data.token));
          sessionStorage.setItem('data-userId', JSON.stringify(data.userId));
          sessionStorage.setItem('data-isAdmin', JSON.stringify(data.isAdmin));
          return this.$router.push({ name: 'home' })
        })
      } 
    }  
  }
}
</script>

<style scoped>
</style>
  