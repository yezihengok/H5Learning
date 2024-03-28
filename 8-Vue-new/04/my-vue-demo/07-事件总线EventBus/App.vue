<template>
  <!-- 主体区域 -->
  <section id="app">

    <p>非父子通信-event bus 非父子组件之间，进行简易消息传递。(复杂场景→ Vuex)</p>
    <BaseA></BaseA>
    <BaseB></BaseB>
    <BaseC></BaseC>

  </section>
</template>

<script>

import BaseA from './components/BaseA.vue'
import BaseB from './components/BaseB.vue'
import BaseC from './components/BaseC.vue'



export default {

  components: {
    BaseA,
    BaseB,
    BaseC
  },


}
</script>

<style></style>
