<template>
    <div>
        <search-bar v-on:searchCriteria="searchData"></search-bar>
        <div v-for="article in filteredArticles" :key="article.id">
            <div class="list-item">
                {{article.title}}
            </div>
        </div>
    </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue"
import json from "../assets/articles.json"

export default{
    name: "SearchResults",
    components:{
        SearchBar
    },
    data() {
       return {
           articles: json.articles,
           searchResult: this.$route.params.criteria
       }
    },
    methods:{
    },
    computed:{

    },
    watch: {
        $router() {
            this.searchResult = this.$route.params.id;
        }
    }
}
</script>

<style scoped>
.list-item{
    border-bottom: 2px solid black;
    background-color: lightgrey;
    width: 50%;
}
</style>
