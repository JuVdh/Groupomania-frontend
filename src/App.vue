<template>
	<img alt="Logo Groupomania" src="./assets/1653474647318_icon-left-font.png">
	<nav>
		<svg @click="addPost">
			<path d="M10,0 V20 M-10,10 H20" stroke-width="3px" stroke="#4E5166" stroke-opacity="1"/>
		</svg>
		<router-link to="/">Home</router-link>
		<router-link to="/signup">Signup</router-link>
		<router-link to="/login">Login</router-link>
		<button @click="Logout">Logout</button>
	</nav>
	<router-view/>
</template>

<script>
export default {
	methods:{
		addPost(){
			return this.$router.push({ name: 'new' })
		},
		Logout(){
			sessionStorage.clear();
			return this.$router.push({ name: 'login' })
		}
	}
}
</script>

<style>
body {
	margin:0;
}
#app {
	width:100%;
	margin:auto;
	font-family: 'Lato', sans-serif;
	color: #4E5166;
}
button {
	background: none;
	background-color: #4E5166;
	border:none;
	outline:none;
	font-family: 'Lato', sans-serif;
	font-size: 16px;
	font-weight:bold;
	color:#FFD7D7;
	border: 1px solid #4E5166;
	border-radius: 5px;
	margin:10px;
}
nav {
	width:100%;
	height:40px;
	margin: auto;
	margin-right: 8px;
	padding-left: 80px;
	padding-right: 80px;
	padding-top:40px;
	padding-bottom:40px;
	background-color: #FFD7D7;
}
nav a {
	font-weight: bold;
	color: #4E5166;
	margin:10px;
}
nav a.router-link-exact-active {
	color: #FD2D01;
}
svg {
	width:20px;
	height:20px;
}
img {
	max-width:100%;
	height:auto;
}
@media screen and (max-width:768px){
	nav{
		padding-left: 40px;
		padding-right: 40px;
	}
}
</style>
