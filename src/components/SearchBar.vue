<template>
<div><input placeholder="O- Search by keyword" v-on:keyup.enter="sendResult"></div>  
</template>

<script>

export default{
    
    name: 'SearchBar',
    methods: {
        sendResult(){
            this.$emit("searchCriteria", this.searchCriteria )
        },

    }
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
