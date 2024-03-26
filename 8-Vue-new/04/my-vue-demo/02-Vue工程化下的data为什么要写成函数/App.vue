<template>
  <div class="app">

    <!-- 每次创建新的组件实例，都会新执行一次data 函数，通过return 得到一个新的data对象 -->
    <baseCount></baseCount>
    <baseCount></baseCount>
    <baseCount></baseCount>
  </div>
</template>

<script>
import baseCount from './components/BaseCount.vue'
export default {
  components: {
    baseCount,
  },
}
</script>

<style></style>
