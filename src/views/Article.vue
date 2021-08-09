<template>
    <div class="article">
        <h1 class="article__title">{{articleData.title}}</h1>
        <div class="article__content"                     
        v-for="(text, index) in articleData.bodyText" 
        :key="text">
        <p class="article__bodytext">
            {{text}}
        </p>
        <h2 class="article__image" v-if="articleData.images[index]">
            {{articleData.images[index]}}
        </h2>
        </div>
    </div>
</template>
<script>
import json from "../assets/articles.json"

export default {
    name:"Article",
    data(){
        return{
            articles: json.articles,
            articleId: this.$route.params.id
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
                article => article.id === this.articleId
            )
        }
    },
    watch: {
        $router() {
            this.articleId = this.$route.params.id;
        }
    },
};

</script>