<template>
	<div class="headerTitle"><h1>{{ msg }}</h1></div>
	<div class="connexion">
		<div class="email">
			<label for="email">Email</label>
			<input type="text" v-model="email" id="email">
		</div>
		<div class="pwd">
			<label for="password">Password</label>
			<input type="password" v-model="password" id="password">
		</div>
		<button @click="logIn">To log in</button>
		<div class="signupRouter">
			<h2>You don't have an account yet?</h2>
			<button @click="goToSignup">Create an account</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: 'Connexion',
			email: '', 
			password: ''
		}
	}, 
	methods: {
		logIn(){
			let user = {
				email: this.email,
				password: this.password
			};

			if (this.email && this.password){
				fetch("http://localhost:3000/api/auth/login", {
					method: "POST",
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(user)
				})
				.then(res=> {
					if (res.ok) {
						return res.json()
					}
				})
				.then(data=>{
					sessionStorage.setItem('data-token', JSON.stringify(data.token));
					sessionStorage.setItem('data-userId', JSON.stringify(data.userId));
					sessionStorage.setItem('data-isAdmin', JSON.stringify(data.isAdmin));
					return this.$router.push({ name: 'home' })
				})
			}
		},
		goToSignup(){
			this.$router.push({ name: 'signup' }) 
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
	border-radius: 10px ;
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
button {
	align-self: flex-end;
	margin-top: 20px;
}
.signupRouter {
	display:flex;
	flex-direction:column;
	justify-content: space-between;
	align-items: center;
	width:100%;
	margin-top: 40px;
}
h2 {
	margin:0;
	font-size:16px;
}
.signupRouter button {
	height: 40px;
	align-self: center;
	background-color: #FD2D01;
	color:#FFD7D7;
	border: 1px solid #FD2D01;
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
	.signupRouter {
		justify-content: space-evenly;
	}
	.signupRouter button, h2 {
		align-self: flex-start;
	}
}
</style>