<template>
  <Post v-for="post in posts" :key="post.id" :post="post"></Post>
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

</style>
