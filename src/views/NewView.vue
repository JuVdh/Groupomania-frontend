<template>
	<NewPost/>
</template>

<script>
import NewPost from '@/components/NewPost.vue'

export default {
	name: 'NewView',
	props: {
		msg:String
	},
	components: {
		NewPost
	}
}
</script>