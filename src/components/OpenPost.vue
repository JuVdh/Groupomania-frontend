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
       <div class="postImage">
              
            <img :src=post.attachment />
        </div>
        
            <div> <input type="file" name="image" id="image" accept="images/*">
                <!-- <button @click="ModifyImage" v-if = "userId==this.post.userId || isAdmin">Change the image</button> -->
       <button @click="DeleteImage" v-if = "userId==this.post.userId || isAdmin">Delete the image</button></div>
       <div><button @click="ModifyPost" v-if = "userId==this.post.userId || isAdmin">Update my post</button>
       <button @click="DeletePost">Delete my post</button></div>
       
   </template>
   
   <script>
       export default {
       
       data() {
         return {
          msg: 'Change your message',
          title: '', 
           content: '',
          image: null, 
           userId: '',
           isAdmin: '',
            post: {}
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
            this.image=data.post.attachment;
            this.post=data.post;
            console.log(data.post.userId)
        
        })
        this.userId=JSON.parse(sessionStorage.getItem("data-userId"));
        this.isAdmin=JSON.parse(sessionStorage.getItem("data-isAdmin"));
        console.log(this.userId);
        console.log(this.isAdmin);
        
        // console.log(this.post.userId);
    },

    methods: {
//    ModifyImage(){
//     let input=document.getElementById('image');
//     console.log(input.files[0]);
//     return this.$router.push({ name: 'home' })
//    },
//     const formData = new FormData();
//     formData.append('image', input.files[0]);
//     const postID=this.$route.params.postId;
//     fetch("http://localhost:3000/api/posts/"+postID, {
//                      method: "GET",
//                      headers: {
//                      'Accept': 'application/json', 
//                      "Authorization": "Bearer " + JSON.parse(sessionStorage.getItem("data-token"))
//                      }
                   
//                  })
//                  .then(res=> {
//                     return res.json()
//                  })
//                  .then(data=>{
//                     this.post.attachment=data.post.attachment;
//                  })
                    
                 
//    },

// DeleteImage(){

// },
    ModifyPost(){
        let input=document.getElementById('image');
            const formData = new FormData();
        formData.append('image', input.files[0]);
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
           
                const postID=this.$route.params.postId;
           
                
                 fetch("http://localhost:3000/api/posts/"+postID, {
                     method: "DELETE",
                     headers: {
                     'Accept': 'application/json', 
                     "Authorization": "Bearer " + JSON.parse(sessionStorage.getItem("data-token"))
                     }
                    
                 })
                 .then(res=> {
                    
                     if (res.ok) {
                        return this.$router.push({ name: 'home' })
                      
                    }  
                })
                //rajouter supprimer image du dossier
            }

        }
    }
   </script>
   
   <style scoped>
    img {
        width: 200px;
    }
   
   </style>