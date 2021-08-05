<template>
  <div id="faq">
    <navigation-bar></navigation-bar>
    <accordion>
        <topics>
</template>

<script>
import NavigationBar from '../components/NavigationBar'
import SearchBar from '../components/SearchBar'

export default {
  name: 'FAQ',
  components: {
    NavigationBar,
    SearchBar
    Accordion,
    Topics
  }

</script>
<style>

.SearchBar{
    margin-bottom: 50px;
    margin-left: 25%;
    margin-top: 100px;
}


<style>
#faq{
    display: grid;
    grid-template-columns: 10% auto;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
</style>
