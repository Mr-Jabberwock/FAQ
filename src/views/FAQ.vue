<template>
    <div id="faq">
        <navigation-bar></navigation-bar>
        <div class="faq__content">
        <search-bar class="faq__searchInput" v-model="searchCriteria" @searchCriteria="searchData"></search-bar>
        <accordion>
            <topics>
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                <!-- <template slot="accordion-trigger" v-if="punchClockSearched"> -->
                <template slot="accordion-trigger">
                    <h2 class="accordion__title">Punch Clock</h2>
                </template>
                <!-- This slot will handle all the content that is passed to the accordion -->
                <template slot="accordion-content">
                    <div class="accordion-content__itemContent" 
                    v-for="article in articlesForPunchClock" 
                    :key="article.id"
                    @click="goToArticle(article.id)">
                      <h3 class="accordion-content__itemTitle">{{article.title}}</h3>
                      <p v-if="article.content[0].bodyText !== '' " 
                        class="accordion-content__itemText">{{article.content[0].bodyText}}</p>
                      <p v-else 
                        class="accordion-content__itemText">{{article.content[1].bodyText}}</p>
                    </div>
                </template>
            </topics>
            <topics>
                <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                <template slot="accordion-trigger">
                    <h2 class="accordion__title">Scan</h2>
                </template>
                <!-- This slot will handle all the content that is passed to the accordion -->
                <template slot="accordion-content">
                    <div class="accordion-content__itemContent" 
                    v-for="article in articlesForScan" 
                    :key="article.id"
                    @click="goToArticle(article.id)">
                      <h3 class="accordion-content__itemTitle">{{article.title}}</h3>
                      <p v-if="article.content[0].bodyText !== '' " 
                        class="accordion-content__itemText">{{article.content[0].bodyText}}</p>
                      <p v-else 
                        class="accordion-content__itemText">{{article.content[1].bodyText}}</p>
                    </div>
                </template>
            </topics>
            <topics>
                <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                <template slot="accordion-trigger">
                    <h2 class="accordion__title">Trophies</h2>
                </template>
                <!-- This slot will handle all the content that is passed to the accordion -->
                <template slot="accordion-content">
                    <div class="accordion-content__itemContent" 
                    v-for="article in articlesForTrophies" 
                    :key="article.id"
                    @click="goToArticle(article.id)">
                      <h3 class="accordion-content__itemTitle">{{article.title}}</h3>
                      <p v-if="article.content[0].bodyText !== '' " 
                        class="accordion-content__itemText">{{article.content[0].bodyText}}</p>
                      <p v-else 
                        class="accordion-content__itemText">{{article.content[1].bodyText}}</p>
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
                    :key="article.id"
                    @click="goToArticle(article.id)">
                      <h3 class="accordion-content__itemTitle">{{article.title}}</h3>
                      <p v-if="article.content[0].bodyText !== '' " 
                        class="accordion-content__itemText">{{article.content[0].bodyText}}</p>
                      <p v-else 
                        class="accordion-content__itemText">{{article.content[1].bodyText}}</p>
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
                    :key="article.id"
                    @click="goToArticle(article.id)">
                      <h3 class="accordion-content__itemTitle">{{article.title}}</h3>
                      <p v-if="article.content[0].bodyText !== '' " 
                        class="accordion-content__itemText">{{article.content[0].bodyText}}</p>
                      <p v-else 
                        class="accordion-content__itemText">{{article.content[1].bodyText}}</p>
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
                    :key="article.id"
                    @click="goToArticle(article.id)">
                      <h3 class="accordion-content__itemTitle">{{article.title}}</h3>
                      <p v-if="article.content[0].bodyText !== '' " 
                        class="accordion-content__itemText">{{article.content[0].bodyText}}</p>
                      <p v-else 
                        class="accordion-content__itemText">{{article.content[1].bodyText}}</p>
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
                    :key="article.id"
                    @click="goToArticle(article.id)">
                      <h3 class="accordion-content__itemTitle">{{article.title}}</h3>
                      <p v-if="article.content[0].bodyText !== '' " 
                        class="accordion-content__itemText">{{article.content[0].bodyText}}</p>
                      <p v-else 
                        class="accordion-content__itemText">{{article.content[1].bodyText}}</p>
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
                    :key="article.id"
                    @click="goToArticle(article.id)">
                      <h3 class="accordion-content__itemTitle">{{article.title}}</h3>
                      <p v-if="article.content[0].bodyText !== '' " 
                        class="accordion-content__itemText">{{article.content[0].bodyText}}</p>
                      <p v-else 
                        class="accordion-content__itemText">{{article.content[1].bodyText}}</p>
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
                    :key="article.id"
                    @click="goToArticle(article.id)">
                      <h3 class="accordion-content__itemTitle">{{article.title}}</h3>
                      <p v-if="article.content[0].bodyText !== '' " 
                        class="accordion-content__itemText">{{article.content[0].bodyText}}</p>
                      <p v-else 
                        class="accordion-content__itemText">{{article.content[1].bodyText}}</p>
                    </div>
                </template>
            </topics>
            <topics>
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                <template slot="accordion-trigger">
                    <h2 class="accordion__title">Dashboards</h2>
                </template>
                <!-- This slot will handle all the content that is passed to the accordion -->
                <template slot="accordion-content">
                    <div class="accordion-content__itemContent" 
                    v-for="article in articlesForDashboard" 
                    :key="article.id"
                    @click="goToArticle(article.id)">
                      <h3 class="accordion-content__itemTitle">{{article.title}}</h3>
                      <p v-if="article.content[0].bodyText !== '' " 
                        class="accordion-content__itemText">{{article.content[0].bodyText}}</p>
                      <p v-else 
                        class="accordion-content__itemText">{{article.content[1].bodyText}}</p>
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
                    :key="article.id"
                    @click="goToArticle(article.id)">
                      <h3 class="accordion-content__itemTitle">{{article.title}}</h3>
                      <p v-if="article.content[0].bodyText !== '' " 
                        class="accordion-content__itemText">{{article.content[0].bodyText}}</p>
                      <p v-else 
                        class="accordion-content__itemText">{{article.content[1].bodyText}}</p>
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
                    :key="article.id"
                    @click="goToArticle(article.id)">
                      <h3 class="accordion-content__itemTitle">{{article.title}}</h3>
                      <p v-if="article.content[0].bodyText !== '' " 
                        class="accordion-content__itemText">{{article.content[0].bodyText}}</p>
                      <p v-else 
                        class="accordion-content__itemText">{{article.content[1].bodyText}}</p>
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
      articles: json.articles,
      searchCriteria: ""
    }
  },
  methods: {
     searchData(data){
       this.$router.push("/search/" + data);
     },
      goToArticle(id) {
        this.$router.push("/articles/" + id);
    }
  },
  computed: {
      articlesForPunchClock() {
        return this.articles.filter(function(article) {
          return article.category === "Punch Clock";
        });
      },
      articlesForScan(){
        return this.articles.filter(function(article) {
          return article.category === "Scan";
        });
      },
      articlesForTrophies(){
        return this.articles.filter(function(article) {
          return article.category === "Trophies";
        });
      },
      articlesForParcels(){
        return this.articles.filter(function(article) {
          return article.category === "Parcels";
        });
      },
      articlesForSerialNumber(){
        return this.articles.filter(function(article) {
          return article.category === "Serial Number";
        });
      },
      articlesForUsers(){
        return this.articles.filter(function(article) {
          return article.category === "Users";
        });
      },
      articlesForSalary(){
        return this.articles.filter(function(article) {
          return article.category === "Salary";
        });
      },
      articlesForLists(){
        return this.articles.filter(function(article) {
          return article.category === "Lists";
        });
      },
      articlesForStatistics(){
        return this.articles.filter(function(article) {
          return article.category === "Statistics";
        });
      },
      articlesForDashboard(){
        return this.articles.filter(function(article) {
          return article.category === "Dashboard";
        });
      },
      articlesForSchedule(){
        return this.articles.filter(function(article) {
          return article.category === "Schedule";
        });
      },
      articlesForSettings(){
        return this.articles.filter(function(article) {
          return article.category === "Settings";
        });
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
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}
.faq__content{
    padding-left: 30%;
    max-width: 60%;
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
    margin-left: -2.5rem;
}
.accordion-content__itemTitle{
    margin-left: 3rem;
    margin-right: 3rem;
}
.accordion-content__itemText{
    margin-left: 4rem;
    margin-right: 4rem;
}
</style>
