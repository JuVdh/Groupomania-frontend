<template>
	<HomePage/>
</template>

<script>
import HomePage from '@/components/HomePage.vue'

export default {
	name: 'HomeView',
	components: {
		HomePage
	},
	beforeCreate(){
		let token=JSON.parse(sessionStorage.getItem('data-token'));
		if (!token) {
			return this.$router.push({ name: 'login' })
		}
	}
}
</script>

