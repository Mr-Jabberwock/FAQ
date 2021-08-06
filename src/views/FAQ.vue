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
                    <div class="accordion-content__itemContent" v-for="article in articlesForPunchClock" :key="article.title">
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
                    <div class="accordion-content__itemContent" v-for="article in articlesForUsers" :key="article.title">
                      <h3 class="accordion-content__itemTitle">{{article.title}}</h3>
                       <p class="accordion-content__itemText">{{article.bodyText[0]}}</p>
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
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </template>
            </topics>

            <topics>
                <!-- This slot will handle the title/header of the accordion and is the part you click on -->
                <template slot="accordion-trigger">
                    <h2 class="accordion__title">Trophies</h2>
                </template>
                <!-- This slot will handle all the content that is passed to the accordion -->
                <template slot="accordion-content">
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
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
    display: grid;
    grid-template-columns: 30% auto;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
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
    position: relative;
}
</style>
