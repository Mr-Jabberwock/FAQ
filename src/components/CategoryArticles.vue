<template>
<div class="results">
        <h2 class="category">{{category}}</h2>
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
    
</template>

<script>
import json from "../assets/articles.json"

export default ({
    name: "CategoryArticles",
    data(){
        return{
            articles: json.articles,
            category: this.$route.params.id.replace("+", ' ')
        }
    },
    computed: {
        dataContent() {
            var result = this.category;
            return this.articles.filter(function(article) {
                return article.category === result;
        });
      }
    },
    methods: {
        goToArticle(id) {
            id = encodeURIComponent(id)
            this.$router.push("/articles/" + id);
        },
        searchData(data){
        this.$router.push("/search/" + data);
        }
    }
   
})
</script>
