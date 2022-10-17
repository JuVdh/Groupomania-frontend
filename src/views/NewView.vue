<template>
    <div class="new">
      <!-- <img alt="Vue logo" src="../assets/1653474647318_icon-left-font.png"> -->
      <!-- <SignUp msg="Create an account"/> -->
      <NewPost/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NewPost from '@/components/NewPost.vue'
  
  export default {
    name: 'NewView',
    props: {
        msg:String
    },
    components: {
      NewPost
    }
  }
  </script>