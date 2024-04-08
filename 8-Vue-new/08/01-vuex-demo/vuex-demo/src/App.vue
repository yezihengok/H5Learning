<template>
  <div id="app">
    <h3>
      通过辅助函数mapState获取 state中的数据：
      - {{ title }}
      - {{ count }}
    </h3>

    <!-- 练习: Vuex中的值和组件中的input双向绑定 -->
    <input :value="count" @input="handleInput" type="text">
    <Son1></Son1>
    <hr>
    <Son2></Son2>
  </div>
</template>

<script>

import Son1 from './components/Son1.vue'
import Son2 from './components/Son2.vue'
//mapState 第一步：导入mapState
import { mapState } from 'vuex'
export default {
  name: 'App',

  computed: {
    ///mapState 第二步：利用展开运算符将导出的状态映射给计算属性
    ...mapState(['count', 'title'])
  },
  methods: {
    handleInput(e) {
      // 1. 实时获取输入框的值
      const value = e.target.value
      // 2. 提交mutation，调用mutation函数修改值
      this.$store.commit('changeCount', value)
    }
  },
  components: {
    Son1,
    Son2
  }
}
</script>

<style>
#app {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>
