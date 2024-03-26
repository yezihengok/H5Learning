<template>

  <!-- template：结构 （VUE2限制：有且只能一个根元素） -->
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <!-- 3、以标签形式使用组件： -->
    <MyHeader></MyHeader>
    <MyMain />
    <MyFooter></MyFooter>

  </div>
</template>

<script>

//2、导入组件
import HelloWorld from './components/HelloWorld.vue'
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';
import MyMain from './components/MyMain.vue';

export default {
  name: 'App',

  //普通组件的注册使用： 
  // 2、局部注册，进能再注册的组件内使用：
  components: {
    HelloWorld,
    //格式  标签名：导入的变量名
    MyHeader: MyHeader,
    MyMain: MyMain,
    MyFooter: MyFooter
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
