<template>
  <div class="login-page">

  </div>
</template>

<script>
// import { Toast } from 'vant'


export default {
  name: 'register-page',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {

  }
}

// console.log('submit', values)
// Toast('普通提示')

// Toast.loading({
//   message: '拼命加载中...',
//   forbidClick: true,
//   duration: 0 // 永远不自动消失
// })

// setTimeout(() => {
//   console.log('3秒后, 请求回来了')
//   // Toast.clear()
//   Toast.success('恭喜注册成功')
// }, 3000)

// 必须在组件实例范围内，this指向某个组件实例，才能这么用
// this.$toast.fail('失败了')
</script>

<style lang="less" scoped></style>
