<template>
  <!-- <div class="signup"> -->
  <SignUp/>
  <!-- </div> -->
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