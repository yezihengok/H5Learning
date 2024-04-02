<template>
    <div>
        <van-cell class="article-item" @click="$.router.push(`/detail?id=${item.id}`)">
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
                <div class="body van-multi-ellipsis--l2">
                    {{ item.content }}
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
    }
}
</script>

<style lang="scss" scoped></style>