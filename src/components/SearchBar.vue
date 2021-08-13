<template>
<div>
    <input placeholder="O- Search by keyword" v-on:keyup.enter="$emit('searchCriteria', $event.target.value )">
</div>  
</template>

<script>

export default{
    name: 'SearchBar'
}
</script>

<style>
   input{
       width: 100%;
       border-style: none;
       border-bottom: solid lightgrey 2px;
       font-size: 20px;
       margin-left:auto;
       margin-right:auto;
   }


</style>
