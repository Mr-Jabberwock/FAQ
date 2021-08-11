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
       width: 500px;
       border-style: none;
       border-bottom: solid lightgrey 2px;
       font-size: 20px;
   }


</style>
