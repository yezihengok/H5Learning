<template>
  <div id="app">
    <!-- 只需要留一个默认的路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
import request from '@/utils/request'
import { setToken } from '@/utils/storage'
export default {
  name: 'App',
  data() {
    return {
      checked: true
    }
  },
  methods: {
    async fn() {
      // 注册
      // const res = await request.post('/user/register', {
      //   username: 'shuaipeng118',
      //   password: '123456'
      // })
      // console.log(res)

      // 登录
      const res = await request.post('/user/login', {
        username: 'shuaipeng118',
        password: '123456'
      })
      setToken(res.data.token)
      console.log(res)
    }
  }
}
</script>
<!-- // 注意：px不会等比例缩放, 但是我们只需要写px, 当前webpack会自动将px换成vw -->
<style lang="less" scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>
