<template>
    <div class="wrapper">
        <navigation-bar></navigation-bar>
        <div class="results">
            <h1 class="category">{{category}}</h1>
            <div class="results__item" 
            v-for="article in dataContent" 
            :key="article.id"
            @click="goToArticle(article.title)">
                <h3 class="results__itemTitle">{{article.title}}</h3>
                <p v-if="article.content[0].bodyText !== '' " 
                class="results__itemText">{{article.content[0].bodyText}}</p>
                <p v-else 
                class="results__itemText">{{article.content[1].bodyText}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import NavigationBar from '../components/NavigationBar.vue'
import json from "../assets/articles.json"

export default {
    name:"TopicAnswers",
    components: {
        NavigationBar
        
    },
    data(){
        return{
            articles: json.articles,
            category: this.$route.params.id.replace("+", ' ')
        }
    },
    computed: {
        dataContent() {
            var result = this.category;
            console.log(result);
            return this.articles.filter(function(article) {
                return article.category === result;
        });
      }
    },
    methods: {
        goToArticle(id) {
            id = encodeURIComponent(id)
            this.$router.push("/articles/" + id);
        }
    }
}
</script>
<style>
    .wrapper{
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
    .results{
        padding-left: 30%;
        max-width: 60%;
    }
    .results__item{
        cursor: pointer;
        border: 1px solid #ebebeb;
        margin-top:1rem;
    }
    .results__itemTitle{
        margin-left: 3rem;
    }
    .results__itemText{
        margin-left: 4rem;
        margin-right: 4rem;
    }
</style>