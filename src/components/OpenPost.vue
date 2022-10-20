<template>
    <div>
         <h1>{{ msg }}</h1>
        
       </div>
       <div>
           <label for="title">Title</label>
           <input type="text" v-model="title" name="title" id="title">
       </div>
       
       <div>
           <label for="content">Text</label>
           <textarea type="text" v-model="content" name="content" id="content"></textarea>
       </div>
   
       <div><button @click="ModifyPost">Modify</button></div>
       <div><button @click="DeletePost">Delete</button></div>
       
   </template>
   
   <script>
       export default {
       
       data() {
         return {
          msg: 'Change your message',
          title: '', 
           content: ''
        
         }
       }, 
    created(){

    const postID=this.$route.params.postId;

    fetch("http://localhost:3000/api/posts/"+postID, {
            method: "GET",
            headers: {
            'Accept': 'application/json', 
            'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("data-token"))
            }})
        .then(res=> {

            if (res.ok) {
            return res.json()
            }
        })
        .then(data=>{
            console.log(data);
            this.title=data.post.title;
            this.content=data.post.content;
        
        })
    },
    methods: {
       
    ModifyPost(){
            const formData = new FormData();
        // formData.append('image', input.files[0]);
        formData.append('title', this.title);
        formData.append('content', this.content);
        
           
            const postID=this.$route.params.postId;
           //   if (this.email && this.password){
                
                 fetch("http://localhost:3000/api/posts/"+postID, {
                     method: "PATCH",
                     headers: {
                     'Accept': 'application/json', 
                     "Authorization": "Bearer " + JSON.parse(sessionStorage.getItem("data-token"))
                     },
                     body: formData
                 })
                 .then(res=> {
                    
                     if (res.ok) {
                       return this.$router.push({ name: 'home' })
                    }  
                })
            },
            DeletePost(){
           
           //   if (this.email && this.password){
                
                //  fetch("http://localhost:3000/api/posts", {
                //      method: "DELETE",
                //      headers: {
                //      'Accept': 'application/json', 
                //      'Content-Type': 'application/json',
                //      "Authorization": "Bearer " + JSON.parse(sessionStorage.getItem("data-token"))
                //      },
                //      body: JSON.stringify(post)
                //  })
                //  .then(res=> {
                    
                //      if (res.ok) {
                //        return this.$router.push({ name: 'home' })
                //     }  
                // })
            }

        }
    }
   </script>
   
   <style scoped>
   
   </style>