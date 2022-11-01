<template>
	<LogIn/>
</template>

<script>
import LogIn from '@/components/LogIn.vue'

export default {
	name: 'LoginView',
	props: {
		msg:String
	},
	components: {
		LogIn
	}
}
</script>