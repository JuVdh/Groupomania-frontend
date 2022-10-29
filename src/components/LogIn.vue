<template>
  <div class="title"><h1>{{ msg }}</h1></div>
  <div class="connexion">
      <div class="email">
		<label for="email">Email</label>
		<input type="text" v-model="email" id="email">
    
  </div>
 
    
  <div class="pwd">
		<label for="password">Password</label>
		<input type="password" v-model="password" id="password">
  </div>
  
  
  <button @click="logIn">To log in</button>
  
  <div class="signupRouter">
    <h2>You don't have an account yet? </h2>
    <router-link to="signup">Please signup</router-link>
  </div>
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

.connexion {
  display:flex;
  flex-direction: column;
  justify-content:space-between;
  width:360px;
  margin-left:80px;
  border-radius: 10px ;
  background-color: #FFD7D7;
  padding:20px;
}

.title {
 
  margin-left:80px;
  margin-top:40px;
  width:360px;
  padding:20px;
 
}

h1 {
  margin:0px;
  font-style: italic;
}

h2 {
  margin:0;
  font-size:16px;
  
}

button {
  align-self: flex-end;
  margin-top: 20px;
}
#pwd {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  
}

.email, .pwd {
  margin-top:20px;
}

label {
  margin-right: 10px;
  font-weight: bold;
}


.email {
  margin-left: 30px;
}
input {
  width:260px;
  height:40px;
  border:none;
  border: 1px solid #4E5166;
  border-radius: 10px;
}

input:focus {
  border:none;
 outline:none;
  border:3px solid #FD2D01;
}

.signupRouter {
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  width:100%;
  margin-top: 40px;
}

@media screen and (max-width:768px){
  .connexion {
    margin-left:0px;
    width:100%;
    border-radius: 0;

  }

  .title {
    margin-left: 0px;
  }

  input {
    width:200px;
  }

  button {
    align-self:flex-start;
    margin-left: 80px;
  }

  .signupRouter {
    justify-content: space-evenly;
  }
  
}
</style>