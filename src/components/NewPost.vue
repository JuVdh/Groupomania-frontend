<template>
 <div>
      <h1>{{ msg }}</h1>
     
    </div>
    <!-- <form id="postForm">  -->
      
    <div>
		<label for="title">Title</label>
		<input type="text" v-model="title" id="title">
    </div>
    
    <div>
		<label for="content">Text</label>
		<input type="text" v-model="content" id="content">
    </div>
    <div>
        <!-- <label for="file">Choose a file</label> -->
        <input type="file" @change="uploadFile" ref="file">
        <button @click="createPost">Upload!</button>
    </div>
   
<!-- </form>   -->
</template>

<script>


export default {
    
    data() {
      return {
       msg: 'Create your message',
        title: '', 
        content: '',
        attachment: null
     
      }
    }, 
    methods: {

    uploadFile() {
        this.Attachments = this.$refs.file.files[0];
      },
      
    createPost() {
        const formData = new FormData();
        formData.append('attachment', this.Attachments);
        formData.append('title', this.title);
        formData.append('content', this.content);
        
        fetch("http://localhost:3000/api/posts", {
                  method: "POST",
                  headers: {
                  'Accept': 'application/json', 
                  'Content-Type': 'multipart/form-data',
                //   'Content-Type': 'application/json',
                  'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("data-token"))
                  },
                  
                body: formData
            })
     
        .then(res=>{
                if (res.ok) {
                    return this.$router.push({ name: 'home' })
                }
            })
        } 

        // createPost() {
        // let post={
        //     'title':this.title,
        //     'content':this.content
        // };
        
        // fetch("http://localhost:3000/api/posts", {
        //           method: "POST",
        //           headers: {
        //           'Accept': 'application/json', 
        //           'Content-Type': 'application/json',
        //           'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("data-token"))
        //           },
                  
        //         body: JSON.stringify(post)
        //     })
     
        // .then(res=>{
        //         if (res.ok) {
        //             return this.$router.push({ name: 'home' })
        //         }
        //     })
        // } 
    }
}
</script>

