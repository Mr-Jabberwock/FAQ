<template>
    <div class="wrapper">
        <NavigationBar></NavigationBar>
        <div class="article">
            <h1 class="article__title">{{articleData.title}}</h1>
            <div class="article__content"                     
            v-for="content in articleData.content" 
            :key="content.bodyText">
                <p class="article__bodytext">
                    {{content.bodyText}}
                </p>
                <img alt="#" v-for="image in content.images" 
                :key="image" class="article__image" :src="require('../assets/' + image)">
            </div>
        </div>
    </div>
</template>
<script>
import NavigationBar from '../components/NavigationBar'
import json from "../assets/articles.json"

export default {
    name:"Article",
    components: {
        NavigationBar
    },
    data(){
        return{
            articles: json.articles,
            articleURI: decodeURIComponent(this.$route.params.id)
        }
    },
    computed: {
        // articleId(){
        //     return this.$route.params.id;
        // },
        // dataContent(){
        //     return this.json.articles;
        // },
        articleData(){
            //var id = this.articleId;
            console.log(this.articleId);
            return this.articles.find(
                article => article.title === this.articleURI
            )
        }
    },
    // method:{
    //   getImage(path){
    //       var picture = "../assets/" + path;
    //       return picture 
    //   }  
    // },
    watch: {
        $router() {
            this.articleId = this.$route.params.id;
        }
    },
};

</script>
<style>
    .wrapper{
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
    .article{
        padding-left: 30%;
        max-width: 60%;
    }
    img{
        width: 100%;
        height: 100%;
    }
</style>