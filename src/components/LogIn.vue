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
    <div><button @click="goToHome">To log in</button></div>
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
    //   connexion: 'To log in'
    }
  },
  methods : {
    goToHome(){
        if (this.email && this.password){
        this.$router.push({ name: 'home' })
        }
        else {
            this.$router.push({ name: 'signup' }) 
        }
    },
    goToSignup(){
        
            this.$router.push({ name: 'signup' }) 
      
    }
  },
  mounted() {
    this.$session.set("token", this.token)
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
  