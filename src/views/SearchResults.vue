<template>
    <div class="wrapper">
        <navigation-bar class="navigation-bar"></navigation-bar>
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
            searchWord: this.$route.params.id
       }
    },
    methods:{
        searchData(data){
            this.searchResult = data;
            localStorage.setItem('category', data.category);
            this.activeItem = localStorage.setItem('category', data.category);
            this.$router.push("/search/" + data).catch(()=>{});
        }
    }
}
</script>

<style scoped>
body{
     font-family: inherit;
      background-color: white;
   
}
.wrapper{
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}
.search-result-content{
    /* margin-left: 30%;
    width: 60%; */
    background-color: white;
    width: 60%;
    margin-left: 30%;
    padding-bottom: 1rem;
}



</style>
