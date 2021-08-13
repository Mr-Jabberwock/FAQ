<template>
    <div class="wrapper">
        <navigation-bar class="navigation-bar"></navigation-bar>
        <div class="category__search">
            <search-bar class="searchInput" @searchCriteria="searchData"></search-bar>
            <category-articles :key="componentKey"/>
        </div>
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
body{
     font-family: inherit;
     
}
    .wrapper{
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
        
    }
    .category__search{
        background-color: white;
        width: 60%;
        margin-left: 30%;
        padding-bottom: 1rem;

    }
    .results__item{
        cursor: pointer;
        border: 1px solid #ebebeb;
        margin-top:1rem;
        width: 95%;
        margin-left: 2.5%;
        
        
    }
    .results__itemTitle{
        margin-left: 3rem;
    }
    .results__itemText{
        margin-left: 4rem;
        margin-right: 4rem;
    }
    .searchInput{
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        padding-top: 5%;
    }
    .navigation__bar{
        background-color: white;
        margin-left: 5%;
    }
</style>