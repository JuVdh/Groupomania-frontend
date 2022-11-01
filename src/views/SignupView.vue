<template>
	<SignUp/>
</template>

<script>
import SignUp from '@/components/SignUp.vue'

export default {
	name: 'SignupView',
	props: {
		msg:String
	},
	components: {
		SignUp
	}
}
</script>