<template>
  <div class="headerTitle"><h1>{{ msg }}</h1></div>
  <div class="new">
      <div class="title">
		<label for="title">Title</label>
		<input type="text" v-model="title" name="title" id="title">
    
  </div>
 
    
  <div class="text">
		<label for="content">Text</label>
		<textarea type="text" v-model="content" name="content" id="content"></textarea>
  </div>
  
  <div class="image">
    <label for="image">Image</label>
    <input type="file" name="image" id="image" accept="images/*">
    
  </div>
  <button @click="createPost">Upload your post ! </button>
</div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Create your message',
      title: '', 
      content: '',
      image: null
    }
  }, 
  methods: {
    createPost() {
      let input=document.getElementById('image');
      const formData = new FormData();
      formData.append('image', input.files[0]);
      formData.append('title', this.title);
      formData.append('content', this.content);
        
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          'Accept': 'application/json', 
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
  }
}
</script>

<style scoped>

.new {
  display:flex;
  flex-direction: column;
  justify-content:space-between;
  width:360px;
  margin-left:80px;
 
  padding:20px;
}

.headerTitle {
 
  margin-left:80px;
  margin-top:40px;
  width:360px;
  padding:20px;
 
}

h1 {
  margin:0px;
  font-style: italic;
}

button {
  height: 40px;

  align-self: flex-end;
  margin:0;
  margin-top: 20px;
}

textarea {
  background: none;
  background-color: #FFD7D7;
  border:none;
  outline:none;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight:bold;
  color:#4E5166;
  border: 1px solid #4E5166;
  border-radius: 10px;
  margin:10px;
  width:300px;
  height:200px;
  margin:0;
}

.title, .text, .image {
  display:flex;
  flex-direction:row;
  justify-content: flex-start;
  margin-top:20px;
}

label {
  margin-right: 10px;
 font-weight: bold;
 width:50px;

}

input {
  width:300px;
  height:40px;
  border:none;
  background: none;
  border: 1px solid #4E5166;
  background-color: #FFD7D7;
  border-radius: 10px;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight:bold;
}

.image input {
  
  border:none;
  background: none;
  border-radius: 0;
  
}

input:focus {
  border:none;
 outline:none;
  border:3px solid #FD2D01;
}
textarea:focus {
  border:none;
 outline:none;
  border:3px solid #FD2D01;
}

.image input:focus {
  border:none;
  outline:none;
}



@media screen and (max-width:768px){
  .new {
    margin-left:0px;
    width:100%;
    border-radius: 0;

  }

  .headerTitle {
    margin-left: 0px;
  }

  
  button {
    align-self:flex-start;
    margin-left: 50px;
  }

  
}
</style>


