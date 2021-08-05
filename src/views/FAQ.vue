<template>
    <div>
       <SearchBar class="SearchBar"/>
       <NavigationBar/>
    </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar'
import SearchBar from '../components/SearchBar'

export default {
  name: 'FAQ',
  components: {
    NavigationBar,
    SearchBar
  }
}

</script>
<style>

.SearchBar{
    margin-bottom: 50px;
    margin-left: 25%;
    margin-top: 100px;
}


</style>
