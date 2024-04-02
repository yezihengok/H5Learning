<template>
    <div class="login-page">
        <!-- 导航栏部分 -->
        <van-nav-bar title="面经登录" />

        <!-- 一旦form表单提交了，就会触发submit，可以在submit事件中
         根据拿到的表单提交信息，发送axios请求
     -->
        <van-form @submit="onSubmit">
            <!-- 输入框组件 -->
            <!-- \w 字母数字_   \d 数字0-9 -->
            <van-field v-model="username" name="username" label="用户名" placeholder="用户名" :rules="[
            { required: true, message: '请填写用户名' },
            { pattern: /^\w{5,}$/, message: '用户名至少包含5个字符' }
        ]" />
            <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码" :rules="[
            { required: true, message: '请填写密码' },
            { pattern: /^\w{6,}$/, message: '密码至少包含6个字符' }
        ]" />
            <div style="margin: 16px">
                <van-button block type="info" native-type="submit">提交</van-button>
            </div>
        </van-form>

        <!-- 导航链接 -->
        <router-link class="link" to="/register">注册账号</router-link>
    </div>
</template>

<script>
import { login } from '@/api/user'
import { setToken } from '@/utils/storage'
export default {
    name: 'login-page',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async onSubmit(values) {
            const res = await login(values)
            // 注意点：先存token，后跳转
            setToken(res.data.token)
            this.$toast.success('登录成功')
            this.$router.push('/')
        }
    }
}
</script>

<style lang="less" scoped>
.link {
    color: #069;
    font-size: 12px;
    padding-right: 20px;
    float: right;
}
</style>
