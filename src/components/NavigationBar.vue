<template>
<div class="navigation">
    <div class="container">
   <div class="title" >
      <h1 class="title__text" @click="goToStart">FAQ</h1>
   </div>
    <div>
    <ul class="subject_list">
         <li class="subject_list__item"  @click="goToCategory('Punch Clock')" :class="{active: isActive('Punch Clock')}" 
         :key="$route.fullPath">
            Punch Clock
         <li class="subject_list__item" @click="goToCategory('Scan')" :class="{active: isActive('Scan')}"
         :key="$route.fullPath">
           Scan
         </li>
        <li class="subject_list__item" @click="goToCategory('Trophies')"  :class="{active: isActive('Trophies')}"
        :key="$route.fullPath">
           Trophies
         </li>
        <li class="subject_list__item" @click="goToCategory('Parcels')" :class="{active: isActive('Parcels')}"
        :key="$route.fullPath">
           Parcels
         </li>
        <li class="subject_list__item" @click="goToCategory('Serial Number')" :class="{active: isActive('Serial Number')}"
        :key="$route.fullPath">
            Serial Number
         </li>
        <li class="subject_list__item" @click="goToCategory('Users')"  :class="{active: isActive('Users')}"
        :key="$route.fullPath">
            Users
         </li>
        <li class="subject_list__item" @click="goToCategory('Salary')" :class="{active: isActive('Salary')}"
        :key="$route.fullPath">
            Salary
         </li>
        <li class="subject_list__item" @click="goToCategory('Lists')" :class="{active: isActive('Lists')}"
        :key="$route.fullPath">
            Lists
         </li>
        <li class="subject_list__item" @click="goToCategory('Statistics')" :class="{active: isActive('Statistics')}"
        :key="$route.fullPath">
            Statistics
         </li>
        <li class="subject_list__item" @click="goToCategory('Dashboard')"  :class="{active: isActive('Dashboard')}"
        :key="$route.fullPath">
            Dashboard
         </li>
        <li class="subject_list__item" @click="goToCategory('Schedule')"  :class="{active: isActive('Schedule')}"
        :key="$route.fullPath">
            Schedule
         </li>
        <li class="subject_list__item" @click="goToCategory('Settings')" :class="{active: isActive('Settings')}"
        :key="$route.fullPath">
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
  color: aquamarine;
}

.title__text:hover{
   cursor: pointer;
}
</style>