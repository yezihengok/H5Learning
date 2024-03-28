<template>
  <div class="app">
    <h2>App组件</h2>
    <p>这是App组件中的p标签</p>
    <hr />
    <MyTest></MyTest>
    <hr />

    <!-- 1.给要获取的盒子添加ref属性 -->
    <MyForm ref="myform"></MyForm>
    <!-- 2、获取时通过this.$refs.myform 获取组件并执行方法 -->
    <button @click="$refs.myform.resetForm()">重置</button>

  </div>
</template>

<script>
import MyTest from './components/MyTest.vue'
import MyForm from './components/MyForm.vue'
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
    MyForm,
    MyTest,
  },
}
</script>

<style></style>