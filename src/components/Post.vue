<template>
    <div class="postList">
        <router-link :to="{ name: 'openPost', params: { postId: post.id }}">
        <div class="postCard">
            <div class="title">
                {{post.title}}
            </div>
            <div class="image">
                <!-- {{post.attachment}} -->
                <img :src=post.attachment />
            </div>
            <div class="content">
            {{post.content}}
            </div>
        </div>
    </router-link>
    </div>
<!-- {{post}} -->
</template>

<script>
export default {
    name: "PostComp",
    props:{
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.postList {
  display : flex;
  flex-direction: column;
  align-items: flex-start;
  background-color:  #4E5166;
  padding: 10px;
  
}

.postCard {
    display:flex;
    flex-direction: column;
    
    /* width: 80%; */
    background-color: #FFD7D7;
    border : 2px solid #FD2D01;
}

</style>