<template>
    <div>
        <!-- 统计和清空 -->
        <footer class="footer">
            <!-- 统计 -->
            <span class="todo-count">合 计:<strong> {{ list.length }} </strong></span>
            <!-- 清空 -->
            <button @click="clear" class="clear-completed">
                清空任务
            </button>
        </footer>
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
        clear() {
            this.$emit('cearAll')
        }
    },
    computed: {

    }
}
</script>

<style scoped></style>