<template>
    <div class="article-page">
        <nav class="my-nav van-hairline--bottom">
            <a href="#" :class="{ active: sorter === 'weight_desc' }">推荐</a>
            <a href="#" :class="{ active: sorter === null }">最新</a>
            <div class="logo"><img src="@/assets/logo.png"></div>
        </nav>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">

        </van-list>
    </div>
</template>

<script>

// import { Cell } from 'vant';
import { articleAPI } from '@/api/article'
export default {
    //文件名不合规范，这里重定义
    name: 'article-page',
    data() {
        // van-List 组件通过 loading 和 finished 两个变量控制加载状态，当组件滚动到底部时，会触发 load 事件并将 loading 设置成 true。此时可以发起异步操作并更新数据，数据更新完毕后，将 loading 设置成 false 即可。若数据已全部加载完毕，则直接将 finished 设置成 true 即可
        return {
            current: 1, // 页码，获取第1页的数据
            sorter: 'weight_desc', // weight_desc--获取推荐的面试题；  null--获取最新的面试题
            list: [],
            loading: false, // true表示不允许加载数据(正在加载某一页的数据),false表示此时没有发送请求获取数据
            finished: false,
            temp: 0, // 临时记录滚动出去的距离
            scrollTop: 0 // 真实的滚动出去的距离
        }
    },
    methods: {
        // 获取面经数据列表
        async onLoad() {
            const { data: res } = await articleAPI({
                this.current
            })
        }
    }
}
</script>

<style lang="less" scoped>
.article-page {
    margin-bottom: 50px;
    margin-top: 44px;

    .my-nav {
        height: 44px;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 999;
        background: #fff;
        display: flex;
        align-items: center;

        >a {
            color: #999;
            font-size: 14px;
            line-height: 44px;
            margin-left: 20px;
            position: relative;
            transition: all 0.3s;

            &::after {
                content: '';
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: 0;
                width: 0;
                height: 2px;
                background: #222;
                transition: all 0.3s;
            }

            &.active {
                color: #222;

                &::after {
                    width: 14px;
                }
            }
        }

        .logo {
            flex: 1;
            display: flex;
            justify-content: flex-end;

            >img {
                width: 64px;
                height: 28px;
                display: block;
                margin-right: 10px;
            }
        }
    }
}
</style>