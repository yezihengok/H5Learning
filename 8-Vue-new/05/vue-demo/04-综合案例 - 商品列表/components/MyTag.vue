```vue
<template>
    <div class="my-tag">
        <!-- @blur 失去焦点事件 -->
        <input v-if="isEdit" v-focus ref="inp" class="input" type="text" placeholder="输入标签" :value="value"
            @blur="isEdit = false" @keyup.enter="handleEnter" />

        <div v-else @dblclick="doubleClick" class="text">
            {{ value }}
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            isEdit: false
        }
    },
    props: {
        value: String
    },
    methods: {
        doubleClick() {
            this.isEdit = true
        },
        handleEnter(e) {
            // 非空处理
            if (e.target.value.trim() === '') return alert('标签内容不能为空')
            this.$emit('input', e.target.value)
            // 提交完成，关闭输入状态
            this.isEdit = false
        }
    }

}
</script>

<style lang="less" scoped>
.my-tag {
    cursor: pointer;

    .input {
        appearance: none;
        outline: none;
        border: 1px solid #ccc;
        width: 100px;
        height: 40px;
        box-sizing: border-box;
        padding: 10px;
        color: #666;

        &::placeholder {
            color: #666;
        }
    }


}
</style>
```
