<template>

    <div>

    </div>
</template>

<script>


export default {
    //vue 代码都要写在这个对象里
    name: 'helloBoy',//重命名默认vue 文件名


    //data 要稍微变一下： 方法返回一个对象
    data() {
        return {
            mName: '123',
            age: 20
        }
    },

    methods: {},
    computed: {},
    wathc: {},

    created() { },
    mounted() { }
}
</script>
<!-- 
让组件支持less
（1） style标签，lang="less" 开启less功能
（2） 装包: yarn add less less-loader -D 或者npm i less less-loader -D -->
<style lang="less" scoped></style>