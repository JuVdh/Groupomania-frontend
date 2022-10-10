<template>
    <div>
      <h1>{{ msg }}</h1>
     
    </div>
    <div>
		<label for="email">Email</label>
		<input type="text" v-model="email" id="email">
        <span v-if="email">Votre adresse email est : {{ email }}</span>
	</div>
    
    <div>
		<label for="password">Password</label>
		<input type="text" v-model="password" id="password">
    </div>
    <button @click="signUp">To signup</button>
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

  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  