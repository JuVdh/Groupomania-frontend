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

  <div>
    <input type="file" name="image" id="image" accept="images/*">
    <button @click="createPost">Upload!</button>
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
</style>

