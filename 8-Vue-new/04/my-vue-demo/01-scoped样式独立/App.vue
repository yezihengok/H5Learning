<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
 
    <BaseOne></BaseOne>
    <BaseTwo></BaseTwo>
  </div>
</template>

<script>
 
import BaseOne from './components/BaseOne'
import BaseTwo from './components/BaseTwo'

export default {
  name: 'App',
  components: {
    BaseOne,
    BaseTwo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
