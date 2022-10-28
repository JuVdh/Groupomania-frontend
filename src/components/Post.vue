<template>
    <div class="posts">
        <router-link :to="{ name: 'openPost', params: { postId: post.id }}">
            <div class="headerCard">
                <h1>{{post.title}}</h1>
                <h2>{{post.user.email}}</h2>
            </div>
            
            <div class="boxCard">
                <div class="image">
                    <img :src=post.attachment />
                </div>
                <div class="content">{{post.content}}</div>
            </div>
        </router-link>
    
        <div class="likesComp">
            <div class="heart" @click="updateLikesNb">
                <svg>
                    <path v-if="!this.alreadyLiked" d="M15 27.5 L 7.5 20 C 2.5 15, 2.5 15, 2.5 10 C 5 0, 12.5 0, 15 7.5 C 17.5 0, 25 0, 27.5 10 C 27.5 15, 27.5 15, 22.5 20 Z" stroke-width="1.5px" stroke="#FD2D01" stroke-opacity="1" fill="White"/>
                </svg>
                <div class="heart_bg">
                    <svg>
                        <path v-if="this.alreadyLiked" d="M15 27.5 L 7.5 20 C 2.5 15, 2.5 15, 2.5 10 C 5 0, 12.5 0, 15 7.5 C 17.5 0, 25 0, 27.5 10 C 27.5 15, 27.5 15, 22.5 20 Z" stroke-width="1.5px" stroke="#FD2D01" stroke-opacity="1" fill="#FD2D01"/>
                    </svg>
                </div>
            </div>
            <input type="number" v-model="likeCount" name="likeCount" id="likeCount">
        </div>
  
    </div>
</template>

<script>
export default {
    name: "PostComp",
    props:{
        post: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            likeCount:0, 
            alreadyLiked:false
        }
    },

    created(){
        const postID=this.post.id;
        const postPath="http://localhost:3000/api/posts/"+postID;
        const likesPath=postPath+"/likes/";

        fetch(likesPath, {
            method: "GET",
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("data-token"))
            }
        })
        .then(res=> {
            if (res.ok) {
                return res.json()
            }
        })
        .then(data => { 
            this.likeCount=data.likeCount;
            this.alreadyLiked=data.alreadyLiked;
        })
    },

    methods:{
        updateLikesNb(){
            const postID=this.post.id;
            const postPath="http://localhost:3000/api/posts/"+postID;
            const likesPath=postPath+"/likes/";
            const likesAdded={
                likes:1
            };

            if (this.alreadyLiked){
                // window.alert("you have already liked this post");
                fetch(likesPath, {
                    method: "DELETE",
                    headers: {
                        'Accept': 'application/json', 
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("data-token"))
                    }
                })
                .then (res=>{
                if (res.ok){
                    this.alreadyLiked=false;
                    this.likeCount-=1;
                }
                })
            }
            else {
                fetch(likesPath, {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json', 
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("data-token"))
                    },
                    body:JSON.stringify(likesAdded)
                })
                .then(res=> {
                    if (res.ok) {
                        const postID=this.post.id;
                        const postPath="http://localhost:3000/api/posts/"+postID;
                        const likesPath=postPath+"/likes/";

                        fetch(likesPath, {
                            method: "GET",
                            headers: {
                                'Accept': 'application/json', 
                                'Content-Type': 'application/json',
                                'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("data-token"))
                            }
                        })
                        .then(res=> {
                            if (res.ok) {
                                return res.json()
                            }
                        })
                        .then(data => { 
                            this.likeCount=data.likeCount;
                            this.alreadyLiked=data.alreadyLiked;
                            this.disliked=false;
                        })
                    }
                })
            }
        }
    }
}
</script>

<style scoped>

.posts { 
    display : flex;
    flex-direction: column;
    width:100%;
    padding-left: 80px;
    padding-right: 80px;
    padding-bottom:20px;
    background-color: white;
    border-bottom: 1px solid #4E5166;
}

.headerCard {
    display:flex;
    justify-content:space-between;
    width:540px;
}

.postsList a {
    width:100%;
    color:#4E5166;
}

h1 {
    font-size:24px;
    font-weight:bold;
}

h2 {
    font-size: 20px;
    font-style:italic;
}
#likeCount{
    border:none;
}

.boxCard {
    box-sizing: border-box;
    background-color:#FFD7D7;
    color:#4E5166;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width:540px;
    border-radius: 10px;
    box-shadow: 0px 4px 15px 1px #4E5166;
}

.image{
    width:100%;
}

.image img {
    object-fit:cover;
    width:100%;
    border-radius:10px 10px 0px 0px;
}

.postsList a {
    text-decoration:none;
}
.content {
    display:flex;
    flex-basis:50%;
    flex-grow: 2;
    align-self:flex-start;
    box-sizing: border-box;
    padding:10px;
    font-size: 18px;
}

.likesComp{
    display:flex;
    flex-direction:row;
    height:30px;
    width:540px;
    justify-content: flex-start;
    margin-top:20px;
    align-self: flex-start;
}

.heart_bg{
    position:absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;   
}

.heart{
    position:relative;
    display:flex;
    flex-direction:row;
    height:30px;
    width:30px;
    justify-content: flex-start;
    align-self: flex-start;
}

svg{
    width:30px;
    height:30px;
} 

@media screen and (max-width:768px){
    .headerCard, .boxCard, .likesComp{
        width:360px;
        margin: auto;
        margin-top: 20px;
    }
    .posts{
        padding-left: 40px;
        padding-right: 40px;
    }
    h1 {
        font-size:20px;
        
    }
    h2 {
        font-size: 18px;
    }

    .content {
        font-size: 16px;
    }

}
</style>