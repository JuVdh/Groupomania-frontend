<template>
  <!-- <div class="hello">
    <h1>{{ posts }}</h1>
   
  </div> -->
  <!-- <div v-for="post in posts" :key="post.id">
  {{post}}</div> -->
<!-- <div class="postList"> -->
<Post v-for="post in posts" :key="post.id" :post="post"></Post>
<!-- </div> -->
</template>

<script>
import Post from '@/components/Post.vue';


export default {
    // name: 'HelloWorld',
    // props: {
    //   msg: String
    // },
    data() {
        return {
            posts: []
            //token: JSON.parse(sessionStorage.getItem("token"))
        };
    },
    created() {
        fetch("http://localhost:3000/api/posts", {
            method: "GET",
            headers: {
                //       'Accept': 'application/json', 
                //       'Content-Type': 'application/json',
                "Authorization": "Bearer " + JSON.parse(sessionStorage.getItem("data-token"))
                // +JSON.parse(sessionStorage.getItem("token"))
            }
            // body: null
            // headers: {
            // //  'Authorization': 'Bearer'+''+this.$session.get("token")
            // 'Authorization': 'Bearer'+''+JSON.parse(sessionStorage.getItem("token"))
            // }
        })
            .then(res => res.json())
            .then(data => { this.posts = data; });
    },
    methods: {
        addPosts() {
            //const token = 'Bearer'.concat(' ', JSON.parse(sessionStorage.getItem("token")));
            fetch("http://localhost:3000/api/posts", {
                method: "GET",
                headers: {
                    //       'Accept': 'application/json', 
                    //       'Content-Type': 'application/json',
                    "Authorization": "Bearer " + JSON.parse(sessionStorage.getItem("data-token"))
                    // +JSON.parse(sessionStorage.getItem("token"))
                }
                // body: null
                // headers: {
                // //  'Authorization': 'Bearer'+''+this.$session.get("token")
                // 'Authorization': 'Bearer'+''+JSON.parse(sessionStorage.getItem("token"))
                // }
            })
                .then(res => res.json())
                .then(data => { this.posts = data; });
        }
    },
    components: { Post }
}
  // created(){
  //           //let token= JSON.parse(sessionStorage.getItem("token"));
  //           fetch("http://localhost:3000/api/posts",{
  //             method: "GET",
  //             headers: {
  //             //  'Authorization': 'Bearer'+''+this.$session.get("token")
  //             'Authorization': 'Bearer'+''+JSON.parse(this.$sessionStorage.getItem("token"))
  //             }
  //           })
  //           .then(res=> res.json())
  //           .then(res => {this.posts=res})
              
  //           }
        
  

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
