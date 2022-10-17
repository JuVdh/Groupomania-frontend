<template>
    <div>
         <h1>{{ msg }}</h1>
        
       </div>
       <div>
           <label for="title">Title</label>
           <input type="text" v-model="title" id="title">
       </div>
       
       <div>
           <label for="content">Text</label>
           <input type="text" v-model="content" id="content">
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
       methods: {
        
         ModifyPost(){
            //  let post = {
            //      title: this.title,
            //      content: this.content
                
            //   };
            
           //   if (this.email && this.password){
                
                //  fetch("http://localhost:3000/api/posts", {
                //      method: "PATCH",
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