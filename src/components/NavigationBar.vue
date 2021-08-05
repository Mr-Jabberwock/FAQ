<template>
<div>
    <div class="container">
    <div>
    <ul class="subject_list">
        <li class="subject_list__item">Punch clock</li>
        <li class="subject_list__item">Scan</li>
        <li class="subject_list__item">Trophies</li>
        <li class="subject_list__item">Parcels</li>
        <li class="subject_list__item">Serial number</li>
        <li class="subject_list__item">Users</li>
        <li class="subject_list__item">Salary</li>
        <li class="subject_list__item">Lists</li>
        <li class="subject_list__item">Statistics</li>
        <li class="subject_list__item">Dashboard</li>
        <li class="subject_list__item">Schedule</li>
        <li class="subject_list__item">Settings</li>
    </ul>
    </div>
   </div>
</div>

</template>

<script>
export default{
    name: 'NavigationBar'
}
</script>

<style>
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
</style>