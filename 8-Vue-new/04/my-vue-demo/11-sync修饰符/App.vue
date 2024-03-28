<template>
  <div class="app">

    <button @click="showDialog">退出</button>

    <!-- .sync修饰符 可以实现 子组件 与 父组件数据 的 双向绑定，简化代码

    【简单理解】：子组件可以修改父组件传过来的props值 -->

    <!-- .sync修饰符 本质就是 :属性名(父组件传给子参数) 和 @update:属性名（父组件接受子组件传参） 合写 -->

    <!-- 
      <BaseDialog :isShow="isShow" @update="isShow = $event"></BaseDialog>
      
       isShow.sync  => :isShow="isShow" @update="isShow=$event"
       -->

    <BaseDialog :isShow.sync="isShow"></BaseDialog>

  </div>
</template>

<script>
import BaseDialog from './components/BaseDialog.vue'
export default {
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    showDialog() {
      this.isShow = true
    }
  },
  components: {
    BaseDialog,
  },
}
</script>

<style></style>