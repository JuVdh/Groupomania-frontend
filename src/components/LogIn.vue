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

    <!-- <input type="text" v-model="connexion" id="connexion"> -->
    <div><button @click="logIn">To log in</button></div>
    <div>
    <span>You don't have an account yet? </span>
    <button @click="goToSignup">Please signup</button>
    </div>
</template>

<script>
    export default {
    
      data() {
        return {
         msg: 'Connexion',
          email: '', 
          password: '',
          token:''
        }
      }, 
      methods: {
       
        logIn(){
            let user = {
                email: this.email,
                password: this.password, 
                token: this.token
             };
           
            if (this.email && this.password){
               
                fetch("http://localhost:3000/api/auth/login", {
                    method: "POST",
                    headers: {
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res=> {
                    sessionStorage.setItem("token", res.body.token)
                    if (res.ok) {
                        
                       return this.$router.push({ name: 'home' })
                    }
                })
            } 
        }  
      }
    }
               
    </script>

<!-- <script>
export default {

  data() {
    return {
     msg: 'Connexion',
      email: '', 
      password: ''
     
 
    }
  },
  methods : {
    goToHome(){
        if (this.email && this.password){
        //sessionStorage.setItem("tokenAccess", this.token.value);
        this.$router.push({ name: 'home' })
        // .then (response => {
        //     sessionStorage.setItem("token", response.$token.value);
            
        // })
        }
        else {
            this.$router.push({ name: 'signup' }) 
        }
    },
    goToSignup(){
        
            this.$router.push({ name: 'signup' }) 
      
    }
  },
  created() {
    //this.$session.set("token", this.token)
    // sessionStorage.setItem("token", this.$data.token);
    sessionStorage.setItem("token", this.token);
  }
}
</script> -->
  
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
  