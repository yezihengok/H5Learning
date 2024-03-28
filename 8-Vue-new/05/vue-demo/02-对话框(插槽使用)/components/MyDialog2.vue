<template>
    <div>
        <div v-show="isShow" class="dialog">
            <div class="dialog-head">
                <!-- <h4>温馨提示</h4> -->

                <!--具名插槽：具有名称的插槽， 存在多个slot使用name属性区分名字 -->

                <slot name="head">标题</slot>
                <span class="close" @click="closeDialog">✖️</span>
            </div>



            <div class="dialog-content">
                <slot name="content"></slot>
            </div>
            <div class="dialog-footer">
                <!-- 
                <button @click="closeDialog">取消</button>
                <button>确认</button>
                 -->

                <slot name="footer"></slot>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isShow: Boolean
    },
    methods: {
        closeDialog() {
            this.$emit('update:isShow', false)
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.dialog {
    width: 400px;
    height: 200px;
    background-color: whitesmoke;
    border-radius: 8px;
    padding: 15px 25px;
}

.dialog-head {
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    border-bottom: 1px solid #ccc;
    position: relative;
}

.dialog-head .close {
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
}

.dialog-content {
    height: 80px;
    font-size: 18px;
    padding: 15px 0;
}

.dialog-footer {
    display: flex;
    justify-content: flex-end;
}

.dialog-footer button {
    width: 65px;
    height: 35px;
    background-color: #ffffff;
    border: 1px solid #e1e3e9;
    border-radius: 3px;
    cursor: pointer;
    margin-left: 10px;
    outline: none;
}

.dialog-footer button:last-child {
    background-color: #007acc;
    color: #fff;
}
</style>