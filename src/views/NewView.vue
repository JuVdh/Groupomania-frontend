<template>
  <!-- <div class="new"> -->
  <NewPost/>
  <!-- </div> -->
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