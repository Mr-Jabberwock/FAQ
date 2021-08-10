<template>
    <div class="wrapper">
         <search-bar class="searchInput" v-model="searchCriteria" @searchCriteria="searchData"></search-bar>
         <filtered-articles :key="componentKey"/>
    </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue"
import FilteredArticles from "../components/FilteredArticles.vue"

export default{
    name: "SearchResults",
    components:{
        SearchBar,
        FilteredArticles
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
