<template>
   
    <div class="postsList">
  <Post v-for="post in posts" :key="post.id" :post="post"></Post>

</div>
</template>

<script>
import Post from '@/components/Post.vue';

export default {
  data() {
    return {
      posts: []
    };
  },
  created() {
    fetch("http://localhost:3000/api/posts", {
      method: "GET",
        headers: {
          "Authorization": "Bearer " + JSON.parse(sessionStorage.getItem("data-token"))
        }
    })
    .then(res => res.json())
    .then(data => { this.posts = data;});
  },
  components: { Post }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.postsList {
  display:flex;
  flex-direction: column;
  width:100%;
}
</style>
