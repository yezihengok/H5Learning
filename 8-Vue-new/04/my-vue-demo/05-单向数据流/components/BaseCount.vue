<template>
    <div>
        <button @click="count--">{{ count }}</button>

        <!-- 不能随便修改outSideCount:网页会报错 -->
        <!-- <button @click="outSideCount++">{{ outSideCount }}</button> -->
    </div>
</template>

<!-- props & data共同点:都可以给组件提供数据
区别:
data 的数据是自己的 → 随便改
prop 的数据是外部的 → 不能直接改，要遵循 单向数据流 -->


<script>
export default {
    // 1.自己的数据随便修改  （谁的数据 谁负责）
    data() {
        return {
            count: 100,
        }
    },

    // 2.外部传过来的数据 不能随便修改
    props: {
        outSideCount: {
            type: Number,
        },
    }
}
</script>

<style lang="scss" scoped></style>