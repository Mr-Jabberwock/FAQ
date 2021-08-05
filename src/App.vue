<template>
  <div id="app">
    <NavigationBar/>
    <Menu/>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    Menu
  }
}
</script>
