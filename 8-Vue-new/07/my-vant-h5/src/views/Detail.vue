<template>
    <div class="detail-page">

        <!--van-nav-bar    fixed-是否固定在顶部 -->
        <van-nav-bar left-text="返回" @click-left="$router.back()" title="详情" fixed />

        <header class="header">
            <h2>{{ item.stem }}</h2>
            <p>
                创建时间 {{ item.createdAt }} | {{ item.views }} 浏览量 | {{ item.likeCount }} 点赞数
            </p>
            <p>
                <img :src="item.avatar" />
                <span>{{ item.creator }}</span>
            </p>
        </header>

        <main class="body" v-html="item.content"></main>

        <div class="opt">
            <van-icon :class="{ active: item.likeFlag }" name="like-o" @click="clickLike"></van-icon>
            <van-icon :class="{ active: item.collectFlag }" name="star-o" @click="clickCollect" />
        </div>
    </div>
</template>

<script>
import { detailAPI, clickOpt } from '@/api/article';

export default {
    //文件名不合规范，这里重定义
    name: 'detail-page',
    data() {
        return {
            item: {}
        }
    },
    methods: {
        async clickLike() {
            this.item.likeFlag = !this.item.likeFlag
            //掉用接口更改后台实际状态
            await clickOpt({
                id: this.item.id,
                optType: 1// 1点赞2收藏
            })
            if (this.item.likeFlag) {
                this.item.likeCount++;
                this.$toast.success('已点赞')
            } else {
                this.item.likeCount--
                this.$toast.success('取消点赞')
            }
        },
        async clickCollect() {
            this.item.collectFlag = !this.item.collectFlag
            //掉用接口更改后台实际状态
            await clickOpt({
                id: this.item.id,
                optType: 2// 1点赞2收藏
            })
            if (this.item.collectFlag) {
                this.$toast.success('已收藏')
            } else {
                this.$toast.success('取消收藏')
            }
        },
    },
    async created() {
        const { data: res } = await detailAPI(this.$route.query.id)

        console.log(res)
        this.item = res
    }
}
</script>

<style lang="less" scoped>
.detail-page {
    padding: 0 15px;
    overflow: hidden;

    .header {
        h2 {
            font-size: 22px;
        }

        p {
            color: #666;
            font-size: 12px;
            display: flex;
            align-items: center;
        }

        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
        }

        span {
            margin-left: 5px
        }
    }

    .opt {
        position: fixed;
        bottom: 100px;
        right: 0;

        >.van-icon {
            margin-right: 20px;
            background: #fff;
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            border-radius: 50%;
            box-shadow: 2px 2px 10px #ccc;
            font-size: 18px;

            &.active {
                background: #fec635;
                color: #fff;
            }
        }
    }
}
</style>