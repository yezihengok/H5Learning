<template>
  <div>
    <h3>Test组件需求：找到下面的p标签，设置样式</h3>

    <!-- 1.给要获取的盒子添加ref属性 -->
    <p ref="tt">这是Test组件中的p标签</p>
  </div>
</template>

<script>
export default {
  mounted() {
    // document.querySelector 是在整个页面中找元素
    // document.querySelector('p').style.color = 'red'

    // 2.获取时通过 this.$refs.tt 获取 dom 元素 或 组件实例   查找范围 → 当前组件内(更精确稳定)
    this.$refs.tt.style.color = 'blue'
  }
}
</script>

<style lang="less" scoped></style>
