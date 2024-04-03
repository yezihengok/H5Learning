<template>
    <div class="login-page">
        <!-- 登录页标题 -->

        <van-nav-bar title="我的收藏" fixed />

        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <ArticleItem v-for="item in list" :key="item.id" :item="item"></ArticleItem>
        </van-list>
    </div>
</template>

<script>

import { optList } from '@/api/article'

export default {
    //文件名不合规范，这里重定义
    name: 'collect-page',
    data() {
        return {
            current: 1, // 页码，获取第1页的数据
            list: [], // 存储要展示的面经列表数据
            loading: false, // true表示不允许加载数据（正在加载某一页的数据）；false表示此时没有发生请求获取数据
            finished: false // false表示还有下一页数据可以加载；true表示数据已经加载完毕
        }
    },
    methods: {
        // 获取面经数据列表
        async onLoad() {
            const { data: res } = await optList({
                page: this.current, // 接口文档要求的分页页码
                optType: 2// 1点赞2收藏
            })
            console.log(res)
            //SE6语法 ：list.push(...res.rows)则是 把数组 row 里面元素 一个个批量拷贝添加到list
            this.list.push(...res.rows)
            //this.list.push(res.rows) //注意 这样添加是 把一个数组当作一个元素添加到list里。

            this.loading = false
            this.current++
            if (this.current > res.pageTotal) {
                this.finished = true
            }
            // this.finished = true
        },
    }
}
</script>

<style lang="less" scoped>
.collect-page {
    margin-bottom: 50px;

    margin-top: 44px;
}
</style>