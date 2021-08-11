<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view :key="$route.path"/>
  </div>
</template>

<style>
