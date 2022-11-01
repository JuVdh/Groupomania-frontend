<template>
	<div class="headerTitle"><h1>{{ msg }}</h1></div>
	<div class="connexion">
		<div class="email">
			<label for="email">Email</label>
			<input type="text" v-model="email" name="email" id="email">
		</div>
		<div class="pwd">
			<label for="password">Password</label>
			<input type="password" v-model="password" name="password" id="password">
		</div>
		<p>8 characters including 2 numbers without spaces</p>
		<button @click="signUp">To signup</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: 'Create an account',
			email: '',
			password: ''
		}
	},
	methods: {
		signUp(){
			let user = {
				email: this.email,
				password: this.password
			};
			
			if (this.email && this.password){
				fetch("http://localhost:3000/api/auth/signup", {
					method: "POST",
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(user)
				})
				.then(res=> {
					if (res.ok) {
						return this.$router.push({ name: 'login' })
					}
				})
			}
		}
	}
}
</script>

<style scoped>
.headerTitle {
	width:360px;
	padding:20px;
	margin-left:80px;
	margin-top:40px;
}
h1 {
	margin:0;
	font-style: italic;
}
.connexion {
	display:flex;
	flex-direction: column;
	justify-content:space-between;
	width:360px;
	padding:20px;
	margin-left:80px;
	border-radius: 10px;
	background-color: #FFD7D7;
}
.email, .pwd {
	margin-top:20px;
}
.email {
	margin-left: 30px;
}
label {
	margin-right: 10px;
	font-weight: bold;
}
.email input, .pwd input {
	width:260px;
	height:40px;
	border:none;
	border: 1px solid #4E5166;
	border-radius: 10px;
	font-family: 'Lato', sans-serif;
	font-size: 16px;
	font-weight:bold;
	color: #4E5166;
}
input:focus {
	border:none;
	outline:none;
	border:3px solid #FD2D01;
}
p {
	font-size:12px;
	margin:0;
	margin-left:80px;
}
button {
	align-self: flex-end;
	margin-top: 20px;
}
@media screen and (max-width:768px){
	.headerTitle {
		margin-left: 0px;
	}
	.connexion {
		width:100%;
		margin-left:0px;
		border-radius: 0;
	}
	input {
		width:200px;
	}
	button {
		align-self:flex-start;
		margin-left: 80px;
	}
}
</style>