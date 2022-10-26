<template>
    <div class="postsList">
        <router-link :to="{ name: 'openPost', params: { postId: post.id }}">
            <div class="headerCard">
                <h1>{{post.title}}</h1>
                <h1>UserId {{post.userId}}</h1>
            </div>
            
            <div class="boxCard">
                <div class="image">
                    <img :src=post.attachment />
                </div>
                <div class="postDescription">
                    <div class="content">{{post.content}}</div>
                </div>
            </div>
        </router-link>
    
        <div class="heart">
            <svg @click="updateLikesNb">
                <path d="M15 27.5 L 7.5 20 C 2.5 15, 2.5 15, 2.5 10 C 5 0, 12.5 0, 15 7.5 C 17.5 0, 25 0, 27.5 10 C 27.5 15, 27.5 15, 22.5 20 Z"/>
            </svg>
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
            email:'', 
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
                window.alert("you have already liked this post");
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
                        })
                    }
                })
            }
        }
    }
}
</script>

<style scoped>
#likeCount{
    border:none;
    background-color: #FFD7D7;
}
.postsList {
    display : flex;
    flex-direction: column;
    max-width:1200px;
    margin: auto;
    width:100%;
    background-color: #FFD7D7;
    border-top: 3px solid #4E5166;
    padding:40px;
    align-items:center;
}

p{
    align-self: center;
    margin-left: 10px;
}

.headerCard {
    display:flex;
    justify-content:space-between;
    width:100%;
    font-family: Lato;
    font-size:48px;
}
.postsList a {
    width:100%;
}

h1 {
    font-size:18px;
}

.boxCard {
    box-sizing: border-box;
    background-color: white;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width:100%;
    flex: 1 1 content;
    border-radius: 10px;
    box-shadow: 0px 4px 15px 1px #e3e3e3;
    padding:10px;
}

.image{
    box-sizing:border-box;
    align-self: center;
    flex: 1 1 content;
}

.image img {
    object-fit:cover;
    width:100%;
    border-radius:10px;
}

.postDescription {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size:16px;
    flex: 1 1 content;
}

.postsList a {
    text-decoration:none;
}
.content {
    width:100%;
    align-self:flex-start;
    text-align: justify;
    box-sizing: border-box;
    padding-left:10px;
    padding-right:10px;
}

.heart{
    display:flex;
    flex-direction:row;
    max-height:30px;
    justify-content: flex-start;
    margin-top:20px;
    align-self: flex-start;
}

svg{
    width:30px;
    height:30px;
} 

path{
    stroke-width: 1.5px;
    stroke:#4E5166;
    stroke-opacity: 1;
    fill: #FD2D01;
}
</style>