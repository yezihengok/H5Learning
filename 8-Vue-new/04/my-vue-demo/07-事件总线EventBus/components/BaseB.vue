<template>
    <div class="base-b">
        <div>发送方B</div>
        <button @click="send">发送消息</button>
    </div>
</template>

<script>
import Bus from '../utils/EventBus'
export default {

    data() {
        return {
            flag: true
        }
    },
    methods: {
        send() {
            Bus.$emit('sendMsg', this.flag ? '这是一个消息' : '又来一个消息')
            this.flag = !this.flag;
        }
    }
}
</script>

<style scoped>
.base-b {
    width: 200px;
    height: 200px;
    border: 3px solid #000;
    border-radius: 3px;
    margin: 10px;
}
</style>