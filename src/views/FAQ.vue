<template>
    <div id="faq">
        <navigation-bar></navigation-bar>
        <div class="faq__content">
        <search-bar></search-bar>
        <accordion>
            <topics>
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                <template slot="accordion-trigger">
                    <h2 class="accordion__title">Punch Clock</h2>
                </template>
                <!-- This slot will handle all the content that is passed to the accordion -->
                <template slot="accordion-content">
                    <div class="accordion-content__itemContent" 
                    v-for="article in articlesForPunchClock" 
                    :key="article.title"
                    @click="goToArticle(article.id)">
                      <h3 class="accordion-content__itemTitle">{{article.title}}</h3>
                       <p class="accordion-content__itemText">{{article.bodyText[0]}}</p>
                    </div>
                </template>
            </topics>
            <topics>
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                <template slot="accordion-trigger">
                    <h2 class="accordion__title">Users</h2>
                </template>
                <!-- This slot will handle all the content that is passed to the accordion -->
                <template slot="accordion-content">
                    <div class="accordion-content__itemContent" 
                    v-for="article in articlesForUsers" 
                    :key="article.title"
                    @click="goToArticle(article.id)">
                      <h3 class="accordion-content__itemTitle">{{article.title}}</h3>
                       <p class="accordion-content__itemText">{{article.bodyText[0]}}</p>
                    </div>
                </template>
            </topics>
            <topics>
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                <template slot="accordion-trigger">
                    <h2 class="accordion__title">Settings</h2>
                </template>
                <!-- This slot will handle all the content that is passed to the accordion -->
                <template slot="accordion-content">
                    <div class="accordion-content__itemContent" 
                    v-for="article in articlesForSettings" 
                    :key="article.title"
                    @click="goToArticle(article.id)">
                      <h3 class="accordion-content__itemTitle">{{article.title}}</h3>
                       <p class="accordion-content__itemText">{{article.bodyText[0]}}</p>
                    </div>
                </template>
            </topics>
            <topics>
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                <template slot="accordion-trigger">
                    <h2 class="accordion__title">Schedule</h2>
                </template>
                <!-- This slot will handle all the content that is passed to the accordion -->
                <template slot="accordion-content">
                    <div class="accordion-content__itemContent" 
                    v-for="article in articlesForSchedule" 
                    :key="article.title"
                    @click="goToArticle(article.id)">
                      <h3 class="accordion-content__itemTitle">{{article.title}}</h3>
                       <p class="accordion-content__itemText">{{article.bodyText[0]}}</p>
                    </div>
                </template>
            </topics>
            <topics>
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                <template slot="accordion-trigger">
                    <h2 class="accordion__title">Serial Number</h2>
                </template>
                <!-- This slot will handle all the content that is passed to the accordion -->
                <template slot="accordion-content">
                    <div class="accordion-content__itemContent" 
                    v-for="article in articlesForSerialNumber" 
                    :key="article.title"
                    @click="goToArticle(article.id)">
                      <h3 class="accordion-content__itemTitle">{{article.title}}</h3>
                       <p class="accordion-content__itemText">{{article.bodyText[0]}}</p>
                    </div>
                </template>
            </topics>
            <topics>
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                <template slot="accordion-trigger">
                    <h2 class="accordion__title">Parcels</h2>
                </template>
                <!-- This slot will handle all the content that is passed to the accordion -->
                <template slot="accordion-content">
                    <div class="accordion-content__itemContent" 
                    v-for="article in articlesForParcels" 
                    :key="article.title"
                    @click="goToArticle(article.id)">
                      <h3 class="accordion-content__itemTitle">{{article.title}}</h3>
                       <p class="accordion-content__itemText">{{article.bodyText[0]}}</p>
                    </div>
                </template>
            </topics>
            <topics>
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                <template slot="accordion-trigger">
                    <h2 class="accordion__title">Salary</h2>
                </template>
                <!-- This slot will handle all the content that is passed to the accordion -->
                <template slot="accordion-content">
                    <div class="accordion-content__itemContent" 
                    v-for="article in articlesForSalary" 
                    :key="article.title"
                    @click="goToArticle(article.id)">
                      <h3 class="accordion-content__itemTitle">{{article.title}}</h3>
                       <p class="accordion-content__itemText">{{article.bodyText[0]}}</p>
                    </div>
                </template>
            </topics>
            <topics>
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                <template slot="accordion-trigger">
                    <h2 class="accordion__title">Statistics</h2>
                </template>
                <!-- This slot will handle all the content that is passed to the accordion -->
                <template slot="accordion-content">
                    <div class="accordion-content__itemContent" 
                    v-for="article in articlesForStatistics" 
                    :key="article.title"
                    @click="goToArticle(article.id)">
                      <h3 class="accordion-content__itemTitle">{{article.title}}</h3>
                       <p class="accordion-content__itemText">{{article.bodyText[0]}}</p>
                    </div>
                </template>
            </topics>
            <topics>
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                <template slot="accordion-trigger">
                    <h2 class="accordion__title">Lists</h2>
                </template>
                <!-- This slot will handle all the content that is passed to the accordion -->
                <template slot="accordion-content">
                    <div class="accordion-content__itemContent" 
                    v-for="article in articlesForLists" 
                    :key="article.title"
                    @click="goToArticle(article.id)">
                      <h3 class="accordion-content__itemTitle">{{article.title}}</h3>
                       <p class="accordion-content__itemText">{{article.bodyText[0]}}</p>
                    </div>
                </template>
            </topics>
        </accordion>
        </div>
    </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar'
import SearchBar from '../components/SearchBar.vue'
import Accordion from '../components/Accordion.vue'
import Topics from '../components/Topics.vue'
import json from "../assets/articles.json"

export default {
  name: 'FAQ',
  components: {
    NavigationBar,
    SearchBar,
    Accordion,
    Topics
  },
  data(){
    return{
      articles: json.articles
    }
  },
  computed: {
      articlesForPunchClock() {
        return this.articles.filter(function(article) {
          return article.category === "Punch Clock";
        });
      },
      articlesForUsers(){
        return this.articles.filter(function(article) {
          return article.category === "Users";
        });
      },
      articlesForSettings(){
        return this.articles.filter(function(article) {
          return article.category === "Settings";
        });
      },
      articlesForSchedule(){
        return this.articles.filter(function(article) {
          return article.category === "Schedule";
        });
      },
      articlesForSerialNumber(){
        return this.articles.filter(function(article) {
          return article.category === "Serial Number";
        });
      },
      articlesForParcels(){
        return this.articles.filter(function(article) {
          return article.category === "Parcels";
        });
      },
      articlesForSalary(){
        return this.articles.filter(function(article) {
          return article.category === "Salary";
        });
      },
      articlesForStatistics(){
        return this.articles.filter(function(article) {
          return article.category === "Statistics";
        });
      },
      articlesForLists(){
        return this.articles.filter(function(article) {
          return article.category === "Lists";
        });
      }
  },
  methods: {
    goToArticle(id) {
      this.$router.push("/articles/" + id);
    }
  }
}

</script>
<style>

.SearchBar{
    margin-bottom: 50px;
    margin-left: 25%;
    margin-top: 100px;
}

#faq{
    /* display: grid;
    grid-template-columns: 30% auto; */
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}
.faq__content{
    padding-left: 30%;
}
.accordion__title{
    margin-left: 5%;
}
.accordion{
    max-width: 80%;
}
.accordion-content__list{
    margin-top: 1rem;
    list-style-type: none;
    
}
.accordion-content__itemContent{
    cursor: pointer;
    border: 1px solid #ebebeb;
    margin-left:-2.5rem;
    
}
.accordion-content__itemTitle{
    margin-left:3rem;
    
}
.accordion-content__itemText{
    margin-left:4rem;
    margin-right: 4rem;
    
}
</style>
