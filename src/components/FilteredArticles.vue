<template>
 <div class="wrapper"> 
        <h2 class="keyword">Results for: "{{searchResult}}"</h2>    
        <div class="list-container" v-for="article in filteredArticles" :key="article.id">
                <div class="list-item" @click="goToArticle(article.title)">
                    <h3 class="list-item__title">{{article.title}}</h3>
                    <p v-if="article.content[0].bodyText !== '' " 
                        class="list-item__Text">{{article.content[0].bodyText}}
                    </p>
                    <p v-else 
                        class="list-item__Text">{{article.content[1].bodyText}}
                    </p>
                </div>
        </div>
</div>
    
</template>


<script>
import json from "../assets/articles.json"

export default{
    name: "FilteredArticles",
    data() {
       return {
           articles: json.articles,
           searchResult: this.$route.params.criteria,
           filteredArticles: []
       }
    },
    methods: {
        goToArticle(id) {
            var article = this.articles.find(
                    article => article.title === id
            )
            id= encodeURIComponent(id)
            console.log(id.title);
            localStorage.setItem('category', article.category);
            this.activeItem = localStorage.setItem('category', article.category);
            this.$router.push("/articles/" + id);
        }
    },
    watch: {
        $router() {
            this.searchResult = this.$route.params.id;
        }
        
    },
    created() {
        var textOfArticle;
        this.articles.forEach(article => {
            article.content.forEach(text =>{
                textOfArticle += article.title;
                textOfArticle += text.bodyText;

            })
            if(textOfArticle.toUpperCase().includes(this.searchResult.toUpperCase())){
                this.filteredArticles.push(article)
                
            }
            textOfArticle = "";
        });

    }
    
}

</script>

<style scoped>
body{
    
}
.keyword{
    margin-left: 2rem;
}
.list-container{
   background-color: white;
}
.wrapper{
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}
.list-item{
    cursor: pointer;
    border: 1px solid #ebebeb;
    margin-top:1rem;
    width: 95%;
    margin-left: 2.5%;
}
.list-item__title{
    margin-left: 3rem;
}
.list-item__Text{
    margin-left: 4rem;
    margin-right: 4rem;
}

</style>
