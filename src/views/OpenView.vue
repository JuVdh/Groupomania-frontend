<template>
    <div class="new">
      <!-- <img alt="Vue logo" src="../assets/1653474647318_icon-left-font.png"> -->
      <!-- <SignUp msg="Create an account"/> -->
      <OpenPost/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import OpenPost from '@/components/OpenPost.vue'
  
  export default {
    name: 'OpenView',
    
    components: {
      OpenPost
    }
  }
  </script>