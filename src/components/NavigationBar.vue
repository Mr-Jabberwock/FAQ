<template>
<div class="navigation">
    <div class="container">
   <div class="title" >
      <h1 class="title__text" @click="goToStart">FAQ</h1>
   </div>
    <div>
    <ul class="subject_list">
       <!-- <li class="subject_list__item" v-for="category in categories" 
       :key="category.id"> {{category.name}}</li> -->
         <li class="subject_list__item" :class="{active: isActive('Punch Clock')}"
         @click="goToCategory('Punch+Clock')">
            <!-- <a class="subject_list__item-link"
            @click="setActive('Punch Clock')"
            href="/categories/Punch+Clock">Punch clock
            </a> -->
            Punch Clock
         </li>
         <li class="subject_list__item" :class="{active: isActive('Scan')}">
            <a class="subject_list__item-link"
            @click="setActive('Scan')" 
            href="/categories/Scan">Scan
            </a>
         </li>
        <li class="subject_list__item" :class="{active: isActive('Trophies')}">
            <a class="subject_list__item-link"
            @click="setActive('Trophies')" 
            href="/categories/Trophies">Trophies
            </a>
         </li>
        <li class="subject_list__item" :class="{active: isActive('Parcels')}">
            <a class="subject_list__item-link" 
            @click="setActive('Parcels')"
            href="/categories/Parcels">Parcels
            </a>
         </li>
        <li class="subject_list__item" :class="{active: isActive('Serial Number')}">
            <a class="subject_list__item-link" 
            @click="setActive('Serial Number')"
            href="/categories/Serial+Number">Serial number
            </a>
         </li>
        <li class="subject_list__item" :class="{active: isActive('Users')}">
            <a class="subject_list__item-link"
            @click="setActive('Users')" 
            href="/categories/Users">Users
            </a>
         </li>
        <li class="subject_list__item" :class="{active: isActive('Salary')}">
            <a class="subject_list__item-link" 
            @click="setActive('Salary')"
            href="/categories/Salary">Salary
            </a>
         </li>
        <li class="subject_list__item" :class="{active: isActive('Lists')}">
            <a class="subject_list__item-link" 
            @click="setActive('Lists')"
            href="/categories/Lists">Lists
            </a>
         </li>
        <li class="subject_list__item" :class="{active: isActive('Statistics')}">
            <a class="subject_list__item-link" 
            @click="setActive('Statistics')"
            href="/categories/Statistics">Statistics
            </a>
         </li>
        <li class="subject_list__item" :class="{active: isActive('Dashboard')}">
            <a class="subject_list__item-link"
            @click="setActive('Dashboard')" 
            href="/categories/Dashboard">Dashboard
            </a>
         </li>
        <li class="subject_list__item" :class="{active: isActive('Schedule')}">
            <a class="subject_list__item-link"
             @click="setActive('Schedule')"  
            href="/categories/Schedule">Schedule
            </a>
         </li>
        <li class="subject_list__item" :class="{active: isActive('Settings')}">
            <a class="subject_list__item-link" 
            @click="setActive('Settings')"
            href="/categories/Settings">Settings
            </a>
         </li>
    </ul>
    </div>
   </div>
</div>

</template>

<script>
import categoriesjson from "../assets/categories.json"
export default {
    name: 'NavigationBar',
    data(){
       return{
          activeItem: this.$route.params.id.replace("+", ' '),
          categories: categoriesjson.categories,
          componentKey: 0
       };
    },
    methods: {
      goToStart() {
            this.$router.push("/");
      },
      goToCategory(category) {
         this.componentKey++;
         this.$router.push("/categories/" + category);
      },
      isActive(menuItem) {
         return this.activeItem === menuItem;
      },
      setActive(menuItem) {
         this.activeItem = menuItem;
      }
   }
}
</script>

<style>
.navigation{
   position: fixed;
   width: 30%;
}
.container{
   border-left: lightgrey solid 2px;
   display: inline-block;
   width: 200px;
   margin-left: 100px;
}
.subject_list{
   padding-left: 10px;
   list-style-type: none;

}
.subject_list__item{
   padding-bottom: 10px;
   margin-top: 10px;
   color: rgb(63, 63, 63);
}

.active, .subject_list__item:hover{
  padding-left: 20px;
}

.subject_list__item-link{
   text-decoration: none;
   color: rgb(63, 63, 63);
}
.subject_list__item-link:visited{
   color: inherit;
}
.active, .subject_list__item-link:hover{
   color: aquamarine;
}
.title__text:hover{
   cursor: pointer;
}
</style>