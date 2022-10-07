<template>
    <div class="login">
      <img alt="Vue logo" src="../assets/1653474647318_icon-left-font.png">
      <!-- <SignUp msg="Create an account"/> -->
      <LogIn/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import LogIn from '@/components/LogIn.vue'
  
  export default {
    name: 'LoginView',
    props: {
        msg:String
    },
    components: {
      LogIn
    }
  }
  </script>