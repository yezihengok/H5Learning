<template>
    <div>
        <van-cell class="article-item" @click="$router.push(`/detail?id=${item.id}`)">
            <template #title>
                <div class="head">
                    <img :src="item.avatar" />
                    <div class="con">
                        <p class="title" van-ellipsis>{{ item.stem }}</p>
                        <p class="other"> {{ item.creator }} | {{ item.createdAt }}</p>
                    </div>
                </div>
            </template>

            <template #label>
                <!-- van-multi-ellipsis--l2 van属性限制文本为2行-->
                <div class="body van-multi-ellipsis--l2">
                    {{ clearHTMLTag(item.content) }}
                </div>

                <div class="foot">
                    点赞 {{ item.likeCount }} | 浏览 {{ item.views }}
                </div>
            </template>
        </van-cell>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            // 默认值如果是数组或对象 则需要写成函数
            // default: () => ({})
        }
    },
    methods: {
        clearHTMLTag(str) {
            return str.replace(/<[^>]+>/g, '')
        }
    }
}
</script>

<style lang="less" scoped>
.article-item {
    .head {
        display: flex;

        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
        }

        .con {
            flex: 1;
            overflow: hidden;
            padding-left: 8px;

            p {
                margin: 0;
                line-height: 1.5;

                &.title {
                    width: 280px;
                }

                &.other {
                    font-size: 10px;
                    color: #999;
                }
            }
        }
    }

    .body {
        font-size: 14px;
        color: #666;
        line-height: 1.5;
        margin-top: 8px;
    }

    .foot {
        font-size: 12px;
        margin-top: 8px;
        color: #999;
    }
}
</style>