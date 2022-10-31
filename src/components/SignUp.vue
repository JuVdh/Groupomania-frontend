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
  <p>8 characters including 2 numbers without spaces</p>
  
  <button @click="signUp">To signup</button>
  
 </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'Create an account',
      email: '', 
      password: ''
    }
  }, 
  methods: {
    signUp(){
      let user = {
        email: this.email,
        password: this.password
      };
       
      if (this.email && this.password){
        fetch("http://localhost:3000/api/auth/signup", {
          method: "POST",
          headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res=> {
          if (res.ok) {
            return this.$router.push({ name: 'login' })
          }
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

p {
  font-size:12px;
  margin:0;
  margin-left:80px;
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
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight:bold;
}

input:focus {
  border:none;
 outline:none;
  border:3px solid #FD2D01;
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

    
}
</style>