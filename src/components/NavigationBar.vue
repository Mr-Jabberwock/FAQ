<template>
<div class="navigation">
    <div class="container">
    <div>
    <ul class="subject_list">
        <li class="subject_list__item" :class="{'subject_list__item--active':punchClockActive}"><a class="subject_list__item-link" href="/categories/Punch+Clock">Punch clock</a></li>
        <li class="subject_list__item" :class="{'subject_list__item--active':scanActive}"><a class="subject_list__item-link" href="/categories/Scan">Scan</a></li>
        <li class="subject_list__item" :class="{'subject_list__item--active':trophiesActive}"><a class="subject_list__item-link" href="/categories/Trophies">Trophies</a></li>
        <li class="subject_list__item" :class="{'subject_list__item--active':parcelsActive}"><a class="subject_list__item-link" href="/categories/Parcels">Parcels</a></li>
        <li class="subject_list__item" :class="{'subject_list__item--active':serialNumberActive}"><a class="subject_list__item-link" href="/categories/Serial+Number">Serial number</a></li>
        <li class="subject_list__item" :class="{'subject_list__item--active':usersActive}"><a class="subject_list__item-link" href="/categories/Users">Users</a></li>
        <li class="subject_list__item" :class="{'subject_list__item--active':salaryActive}"><a class="subject_list__item-link" href="/categories/Salary">Salary</a></li>
        <li class="subject_list__item" :class="{'subject_list__item--active':listsActive}"><a class="subject_list__item-link" href="/categories/Lists">Lists</a></li>
        <li class="subject_list__item" :class="{'subject_list__item--active':statisticsActive}"><a class="subject_list__item-link" href="/categories/Statistics">Statistics</a></li>
        <li class="subject_list__item" :class="{'subject_list__item--active':dashboardActive}"><a class="subject_list__item-link" href="/categories/Dashboard">Dashboard</a></li>
        <li class="subject_list__item" :class="{'subject_list__item--active':scheduleActive}"><a class="subject_list__item-link" href="/categories/Schedule">Schedule</a></li>
        <li class="subject_list__item" :class="{'subject_list__item--active':settingsActive}"><a class="subject_list__item-link" href="/categories/Settings">Settings</a></li>
    </ul>
    </div>
   </div>
</div>

</template>

<script>
export default {
    name: 'NavigationBar',
    data(){
       return{
       };
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

.subject_list__item:hover{
  padding-left: 20px;
}
.subject_list__item-link{
   text-decoration: none;
   color: rgb(63, 63, 63);
}
.subject_list__item-link:visited{
   color: rgb(63, 63, 63);
}
</style>