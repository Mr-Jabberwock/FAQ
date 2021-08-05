<template>
  <div id="faq">
    <navigation-bar></navigation-bar>
    <accordion>
        <topics>
          <!-- This slot will handle the title/header of the accordion and is the part you click on -->
          <template slot="accordion-trigger">
            <h3>Item 1</h3>
          </template>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <template slot="accordion-content">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
          </template>
        </topics>

        <topics>
          <!-- This slot will handle the title/header of the accordion and is the part you click on -->
          <template slot="accordion-trigger">
            <h3>Item 2</h3>
          </template>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <template slot="accordion-content">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
          </template>
        </topics>

        <topics>
          <!-- This slot will handle the title/header of the accordion and is the part you click on -->
          <template slot="accordion-trigger">
            <h3>Item 3</h3>
          </template>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <template slot="accordion-content">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
          </template>
        </topics>
      </accordion>
  </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue"
import Accordion from "../components/Accordion.vue";
import Topics from '../components/Topics.vue';

export default {
  name: "FAQ",
  components: {
    NavigationBar,
    Accordion,
    Topics
  }
};
</script>

<style>
#FAQ {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
