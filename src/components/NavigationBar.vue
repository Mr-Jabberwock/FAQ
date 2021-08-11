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
         <li class="subject_list__item"  @click="setActive('Punch Clock')" :class="{active: isActive('Punch Clock')}">
            Punch Clock
         <li class="subject_list__item" @click="setActive('Scan')" :class="{active: isActive('Scan')}">
           Scan
         </li>
        <li class="subject_list__item" @click="setActive('Trophies')"  :class="{active: isActive('Trophies')}">
           Trophies
         </li>
        <li class="subject_list__item" @click="setActive('Parcels')" :class="{active: isActive('Parcels')}">
           Parcels
         </li>
        <li class="subject_list__item" @click="setActive('Serial Number')" :class="{active: isActive('Serial Number')}">
            Serial Number
         </li>
        <li class="subject_list__item" @click="setActive('Users')"  :class="{active: isActive('Users')}">
            Users
         </li>
        <li class="subject_list__item" @click="setActive('Salary')" :class="{active: isActive('Salary')}">
            Salary
         </li>
        <li class="subject_list__item" @click="setActive('Lists')" :class="{active: isActive('Lists')}">
            Lists
         </li>
        <li class="subject_list__item" @click="setActive('Statistics')" :class="{active: isActive('Statistics')}">
            Statistics
         </li>
        <li class="subject_list__item" @click="setActive('Dashboard')"  :class="{active: isActive('Dashboard')}">
            Dashboard
         </li>
        <li class="subject_list__item" @click="setActive('Schedule')"  :class="{active: isActive('Schedule')}">
            Schedule
         </li>
        <li class="subject_list__item" @click="setActive('Settings')" :class="{active: isActive('Settings')}">
            Settings
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
      setActive(category) {
         this.$router.push("/categories/" + category);
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