<template>
    <div class="wrapper">
        <navigation-bar></navigation-bar>
         <search-bar class="searchInput" v-model="searchCriteria" @searchCriteria="searchData"></search-bar>
         <filtered-articles :key="componentKey"/>
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
            componentKey: 0
       }
    },
    methods:{
        searchData(data){
            this.searchResult = data;
            this.componentKey += 1;
            this.$router.push("/search/" + data);
        }
    }
}
</script>

<style scoped>
.searchInput{
    margin-bottom: 20px;
    padding-left: 25%;
}
</style>
