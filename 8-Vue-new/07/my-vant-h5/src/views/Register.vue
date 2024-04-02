<template>
  <div class="login-page">
    <!-- 导航栏部分 -->
    <van-nav-bar title="面经注册" />
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="username" label="用户名" placeholder="用户名" :rules="userRules" />

      <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码" :rules="[
      { required: true, message: '请填写密码' },
      { pattern: /^\w{6,}$/, message: '密码至少包含6个字符' }
    ]" />
      <div style="margin: 16px;">
        <!-- native-type 原生 button 标签的 type 属性 -->
        <van-button block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
    <router-link class="link" to="/login">已有账号，去登录</router-link>

  </div>
</template>

<script>
// import { Toast } from 'vant';
// 导入 API 方法
import { register } from '@/api/user'
export default {
  name: 'register-page',
  data() {
    return {
      username: '',
      password: '',
      userRules: [
        // required 必须，表示用户名必填
        { required: true, message: '请填写用户名' },
        // 使用正则验证，验证用户名 2~10 为的数字字母下划线组合
        { pattern: /^\w{2,10}$/, message: '请输入2~10为的用户名' }
      ]
    }
  },
  methods: {
    async onSubmit(values) {
      try {
        const res = await register(values)
        console.log(JSON.stringify(res));
        this.$toast('注册成功')//vant 里的toast,必须在组件实例范围内，this指向某个组件实例，才能这么用
        this.username = this.password = '' // 重置表单
        this.$router.push('/login')
      } catch (err) {
        // 注册失败，提示信息
        if (err.response) {
          this.$toast(err.response.data.message) // 如果有响应结果，则提示响应结果中的信息
        } else {
          this.$toast('注册失败') // 如果没有响应结果，则笼统的提示一下
        }
      }

    }
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


<style lang="less" scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>