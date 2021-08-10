<template>
 <div class="wrapper">
       
        <div class="list-container" v-for="article in filteredArticles" :key="article.id">
                <div class="list-item">
                    <b>{{article.title}}</b>
                    <p>{{article.content[0].bodyText}}</p>
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
    watch: {
        $router() {
            this.searchResult = this.$route.params.id;
        }
        
    },
    created() {
        console.log("Created")
        var textOfArticle;
        this.articles.forEach(article => {
            article.content.forEach(text =>{
                textOfArticle += article.title;
                textOfArticle += text.bodyText;
                console.log(this.searchResult.toUpperCase(), textOfArticle.toUpperCase())

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
.list-item{
    border: 2px solid black;
    margin-bottom: 15px;
    padding-bottom: 10px;
    padding-top: 10px;
}
.list-container{
    width: 50%;
    margin-left: 25%;
    

}
.wrapper{
    padding-top: 2%;

}

</style>
