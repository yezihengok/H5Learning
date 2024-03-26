<template>
    <div>
        <!-- 列表区域 -->
        <section class="main">
            <ul class="todo-list">
                <li class="todo" v-for="(item, index) in list" :key="item.id">
                    <div class="view">
                        <span class="index">{{ index + 1 }}</span> <label>{{ item.name }}</label>
                        <button class="destroy" @click="handleDel(item.id)"></button>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array
        }
    },
    methods: {
        handleDel(id) {
            //id回传给父组件去删对应list
            this.$emit('del', id)
        }
    }
}
</script>

<style lang="scss" scoped></style>