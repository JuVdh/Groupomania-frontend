<template>
	<div class="postContent">
		<div class="flexContent">
			<div class="title">
				<label for="title">Title</label>
				<input type="text" v-model="title" name="title" id="title">
			</div>
			<div class="image">
				<label for="image">Image</label>
				<img :src=this.post.attachment alt="image" />
			</div>
			<div class="changeImage">
				<!-- <label for="image"></label> -->
				<input type="file" name="image" id="image" accept="images/*">
				<div class="changeBtns">
					<button @click="ModifyImage" v-if = "userId==this.post.userId || isAdmin">Change image</button>
					<button @click="DeleteImage" v-if = "userId==this.post.userId || isAdmin">Delete image</button>
				</div>
			</div>
		</div>
		<div class="flexContent">
			<div class="text">
				<label for="content">Text</label>
				<textarea type="text" v-model="content" name="content" id="content"></textarea>
			</div>
			<div class="content">
				<button @click="ModifyPost" v-if = "userId==this.post.userId || isAdmin">Update my post</button>
				<button @click="DeletePost" v-if = "userId==this.post.userId || isAdmin">Delete my post</button>
			</div>
		</div>
	</div>
</template>
<!-- mettre code getPost dans methods -->
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
			}
		})
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
		})
		this.userId=JSON.parse(sessionStorage.getItem("data-userId"));
		this.isAdmin=JSON.parse(sessionStorage.getItem("data-isAdmin"));
	},
	methods: {
		ModifyImage(){
			let input=document.getElementById('image');
			const formData = new FormData();
			formData.append('image', input.files[0]);
			formData.append('title', this.title);
			formData.append('content', this.content);
			const postID=this.$route.params.postId;
			//if ...?
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
						}
					})
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
					})
				}
			})
		},
		DeleteImage(){
			const formData = new FormData();
			formData.append('delete', true);
			formData.append('title', this.title);
			formData.append('content', this.content);
			const postID=this.$route.params.postId;
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
						}
					})
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
					})
				}
			})
		},
		ModifyPost(){
			let input=document.getElementById('image');
			const formData = new FormData();
			formData.append('image', input.files[0]);
			formData.append('title', this.title);
			formData.append('content', this.content);
			const postID=this.$route.params.postId;
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
		}
	}
}
</script>

<style scoped>
.postContent{
	display:flex;
	flex-direction:row;
	flex-wrap: wrap;
	margin-left:80px;
	padding:20px;
}
.flexContent{
	display:flex;
	flex-direction:column;
	width:300px;
	padding:10px;
	margin: 20px;
}
/* erreur syntaxe */
.title, .image{
	display:flex;
	flex-direction:row;
	justify-content: flex-start;
	margin-top:20px;
}
.image img{
	width: 240px;
	align-self: center;
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
	color:#4E5166;
	font-size: 16px;
	font-weight:bold;
}
input:focus {
	border:none;
	outline:none;
	border:3px solid #FD2D01;
}
.changeImage {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	margin-left: 10px;
	margin-top: 20px;
}
.changeImage input {
	border:none;
	background: none;
	border-radius: 0;
}
.changeImage input:focus {
	border:none;
	outline:none;
}
.changeBtns{
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
}
.changeBtns button{
	margin: 0;
	margin-left: 10px;
}
.text {
	display:flex;
	flex-direction:column;
	justify-content: flex-start;
	margin-top: 20px;
}
.text label {
	width:50px;
	margin-right:0;
	margin-bottom: 10px;
	font-weight: bold;
}
/* margin?*/
textarea {
	width:290px;
	height:200px;
	background: none;
	background-color: #FFD7D7;
	border:none;
	border: 1px solid #4E5166;
	border-radius: 10px;
	outline:none;
	font-family: 'Lato', sans-serif;
	font-size: 16px;
	font-weight:bold;
	color:#4E5166;
	margin:10px;
	margin:0;
}
textarea:focus {
	border:none;
	outline:none;
	border:3px solid #FD2D01;
}
.content{
	display:flex;
	flex-direction:column;
	width:300px;
	align-items: center;
}
.content button {
	width:180px;
	height: 40px;
	background-color: #FD2D01;
	border: 1px solid #FD2D01;
	color:#FFD7D7;
}
@media screen and (max-width:840px){
	.postContent .flexContent{
		margin:0;
	}
	.text {
		display:flex;
		flex-direction:row;
	}
	textarea {
		width: 240px;
	}
}
</style>