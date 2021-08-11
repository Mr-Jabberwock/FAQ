<template>
    <div class="wrapper">
        <navigation-bar></navigation-bar>
        <div class="search-result-content">
            <search-bar class="searchInput"  @searchCriteria="searchData"></search-bar>
            <filtered-articles class="results"/>
        </div>
    </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue"
import FilteredArticles from "../components/FilteredArticles.vue"
import NavigationBar from "../components/NavigationBar.vue"

export default{
    name: "SearchResults",
    components:{
        SearchBar,
        FilteredArticles,
        NavigationBar
    },
    data(){
       return{
            // componentKey: 0,
            searchWord: this.$route.params.id
       }
    },
    methods:{
        searchData(data){
            this.searchResult = data;
            // this.componentKey += 1;
            this.$router.push("/search/" + data);
        }
    }
}
</script>

<style scoped>
 .wrapper{
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}

</style>
