<template>
  <div>
    <h3>Form组件需求：点击按钮能够重置表单</h3>
    用户名：<input type="text" v-model="uname" /><br />
    手机号：<input type="text" v-model="phone" /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      uname: 'hello boys',
      phone: '13266668888'
    }
  },

  methods: {
    // 清空方法
    resetForm() {
      this.uname = this.phone = ''
    }
  }
}
</script>

<style lang="less" scoped></style>
