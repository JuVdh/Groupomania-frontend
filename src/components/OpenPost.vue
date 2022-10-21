<template>
    <div>
         <h1>{{ msg }}</h1>
        
       </div>
       <div class="postContent">
        <div class="flexContent">
            <img :src=this.post.attachment />
            <div><input type="file" name="image" id="image" accept="images/*"></div>
            <div>
                <button @click="ModifyImage" v-if = "userId==this.post.userId || isAdmin">Change the image</button>
                <button @click="DeleteImage" v-if = "userId==this.post.userId || isAdmin">Delete the image</button>
            </div>
        </div>
       <div class="flexContent">
       <div class="content">
           
           <input type="text" v-model="title" name="title" id="title">
           <label for="title">Title</label>
       </div>
       
       <div class="content">
           
           <textarea type="text" v-model="content" name="content" id="content"></textarea>
           <label for="content">Text</label>
       </div>
       </div>
       
       </div>
       <div class="content"><button @click="ModifyPost" v-if = "userId==this.post.userId || isAdmin">Update my post</button></div>
       <div class="content"><button @click="DeletePost" v-if = "userId==this.post.userId || isAdmin">Delete my post</button></div>
       
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
        .then(data => { 
            this.post = data.post;
                 this.title=data.post.title;
            this.content=data.post.content;
            this.image=data.post.attachment;
            console.log(this.post.attachment);
            
         })
        // .then(data=>{
        //     console.log(data);
       
        //     this.post=data.post;
        //     console.log(data.post.userId)
        
        // })
        this.userId=JSON.parse(sessionStorage.getItem("data-userId"));
        this.isAdmin=JSON.parse(sessionStorage.getItem("data-isAdmin"));
        console.log(this.userId);
        console.log(this.isAdmin);
        
        // console.log(this.post.userId);
    },

    methods: {
   ModifyImage(){
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
    .then(data => { 
        this.post = data.post;
             this.title=data.post.title;
        this.content=data.post.content;
        this.image=data.post.attachment;
        console.log(this.post.attachment);
        
     })
               }})
   },
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
    .postContent{
        display:flex;
        flex-direction:row;
        flex-wrap: wrap;
    }
    .flexContent{
        display:flex;
        flex-direction:column;
        width:300px;
       
        border: 1px solid #4E5166;
       padding:10px;
        margin: 20px;
    }
    

    .content{
        display:flex;
        flex-direction:row;
        width:300px;
        justify-content: space-evenly;
        margin:20px;
    }
    #title, #content{
        width:200px;
    }
    
    img{
        width: 200px;
        align-self: center;
    }

    input{
        margin : 10px;
    }
    button{
        background-color:#FFD7D7;
        margin:10px;
        width:125px;
        
    }
   
   </style>