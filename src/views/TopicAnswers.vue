<template>
    <div class="wrapper">
        <navigation-bar></navigation-bar>
        <search-bar class="searchInput" @searchCriteria="searchData"></search-bar>
        <category-articles :key="componentKey"/>
    </div>
</template>
<script>
import NavigationBar from '../components/NavigationBar.vue'
import SearchBar from '../components/SearchBar.vue'
import CategoryArticles from '../components/CategoryArticles.vue'


export default {
    name:"TopicAnswers",
    data(){
        return{
            componentKey: 0
        }
    },
    components: {
        NavigationBar,
        SearchBar,
        CategoryArticles
        
    },
    methods:{
        searchData(data){
            this.$router.push("/search/" + data);
        }
    },
    watch:{
        $route (){
           this.componentKey += 1;
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
    .searchInput{
        margin-left: 30%;
    }
</style>