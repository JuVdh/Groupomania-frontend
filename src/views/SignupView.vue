<template>
    <div class="signup">
      <!-- <img alt="Vue logo" src="../assets/1653474647318_icon-left-font.png"> -->
      <!-- <SignUp msg="Create an account"/> -->
      <SignUp/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import SignUp from '@/components/SignUp.vue'
  
  export default {
    name: 'SignupView',
    props: {
        msg:String
    },
    components: {
      SignUp
    }
  }
  </script>