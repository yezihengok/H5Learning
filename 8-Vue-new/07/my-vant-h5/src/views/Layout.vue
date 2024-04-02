<template>
    <div>
        <button>123</button>
        <router-view></router-view>
        <!-- 配置route属性，开始tabbar的路由模式，给item配置to属性，定义跳转的地址 -->
        <van-tabbar route>
            <van-tabbar-item to="/article" icon="fire-o">面经</van-tabbar-item>
            <van-tabbar-item to="/collect" icon="star-o">收藏</van-tabbar-item>
            <van-tabbar-item to="/like" icon="like-o">点赞</van-tabbar-item>
            <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>


export default {
    name: 'index-page'
}
</script>

<style lang="less" scoped></style>