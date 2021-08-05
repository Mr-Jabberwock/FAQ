<template>
<div>
    <div class="container">
    <div>
    <ul class="subject_list">
        <li class="l1">Punch clock</li>
        <li class="l2">Scan</li>
        <li class="l3">Trophies</li>
        <li class="l4">Parcels</li>
        <li class="l5">Serial number</li>
        <li class="l6">Users</li>
        <li class="l7">Salary</li>
        <li class="l8">Lists</li>
        <li class="l9">Statistics</li>
        <li class="l10">Dashboard</li>
        <li class="l11">Schedule</li>
        <li class="l12">Settings</li>
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
li{
   padding-bottom: 10px;
   margin-top: 10px;
   color: rgb(63, 63, 63);
}

li:hover{
  padding-left: 20px;
}
</style>