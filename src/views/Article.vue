<template>
    <div class="wrapper">
        <navigation-bar class="navigation-bar"></navigation-bar>
        <div class="article">
            <search-bar class="searchInput"  @searchCriteria="searchData"></search-bar>
            <h1 class="article__title">{{articleData.title}}</h1>
            <div   class="article__content"                     
            v-for="content in articleData.content" 
            :key="content.bodyText">
                <p class="article__bodytext">
                    {{content.bodyText}}
                </p>
                <img alt="#" v-for="image in content.images" 
                :key="image" class="article__image" :src="require('../assets/image/' + image)">
            </div>
            <div class="buttons">
                <button class="buttons__previous" v-if="articleData.id != 1" @click="previousArticle()" >Previous Article</button>
                <button class="buttons__next" v-if="articleData.id != articles.length-1" @click="nextArticle()" >Next Article</button>
            </div>
        </div>
        <div class="edit" v-show="edit">
            <div class="article">
            
            <h1 class="article__title">{{articleData.title}}</h1>
            <div   class="article__content"                     
            v-for="content in articleData.content" 
            :key="content.bodyText">
                <textarea class="article__bodytext" v-model="content.bodyText">
                    
                </textarea>
                <img alt="#" v-for="image in content.images" 
                :key="image" class="article__image" :src="require('../assets/image/' + image)">
            </div>
        </div>
            <button @click="editArticle">Edit</button>

        </div>
    </div>

    
</template>
<script>
import NavigationBar from '../components/NavigationBar'
import SearchBar from '../components/SearchBar.vue'
import json from "../assets/articles.json"


export default {
    name:"Article",
    components: {
        NavigationBar,
        SearchBar
    },
    data(){
        return{
            articles: json.articles,
            articleURI: decodeURIComponent(this.$route.params.id),
            edit: false
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
            return this.articles.find(
                article => article.title === this.articleURI
            )
        },
        // categoryArticles(){
        //     var result = this.articles.find(
        //         article => article.title === this.articleURI
        //     ) 
        //     return this.articles.filter(function(article) {
        //         return article.category === result.category;
        //     });
        // },
        nextTitle(){
            var result = this.articles.find(
                article => parseInt(article.id) === parseInt(this.articleData.id) +1
                )
            localStorage.setItem('category', result.category);
            
            return this.articles.find(
                article => parseInt(article.id) === parseInt(this.articleData.id) +1

            )
        },
        previousTitle(){
           var result = this.articles.find(
                article => parseInt(article.id) === parseInt(this.articleData.id) -1
                )
            localStorage.setItem('category', result.category);
            return this.articles.find(
                article => parseInt(article.id) === parseInt(this.articleData.id) -1
            )
        }
    },
    methods: {
        searchData(data){
            this.$router.push("/search/" + data);
        },
        nextArticle(){
           
            this.$router.push("/articles/" + encodeURIComponent(this.nextTitle.title))
        },
        previousArticle(){
            this.$router.push("/articles/" + encodeURIComponent(this.previousTitle.title))
        },
        editArticle(){
            console.log(this.edit)
            this.edit = !this.edit;
            
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
body{
     font-family: inherit;
     
}
    .wrapper{
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
    .article{
    background-color: white;
    width: 60%;
    margin-left: 30%;
    }
    .article__title{
        margin-left: 3rem;
    }
    .article__content{
        width: 80%;
        padding-left: 10%;
        padding-right:10%;
        padding-top: 1rem;
        padding-bottom: 5%;
        
    }
    .article__image{
        display: block;
        width: 75%;
        height: 75%;
        margin-right: auto;
        margin-left: auto;
    }
.buttons{
    display: flex;
    justify-content: space-between;
}
.edit{
    height: 100%;
    width: 80%;
    background-color: white;
    float: right;
    position: fixed;
    top: 0px;
    right: 0px;
    overflow: scroll;
}
.buttons__previous{
    margin-right: auto;
}
.buttons__next{
    margin-left: auto;
}
</style>