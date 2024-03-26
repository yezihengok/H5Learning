<template>
  <div>
    <h2>App组件</h2>
    <!-- 
      父传子语法：
        父：  :+自义定名称  :id 传值给子组件

        @+自定义名称  @kanyidao 用来接受子组件的传参
    -->
 
    
    <!-- <my-test :id="goodsList[0].id" :name="goodsList[0].name"></my-test> -->
    <!--
    <my-test :item="goodsList[0]"></my-test>
    <my-test :item="goodsList[1]"></my-test>
    <my-test :item="goodsList[2]"></my-test>
    -->
    <!-- 
    list 循环 传对象过去可这样写： -->
    <my-test v-for="item in goodsList" :key="item.id" :obj="item" :btnName="msg" @kanyidao="changePrice"></my-test>


    <!-- :obj 是传值给子组件    -->
    <!-- @kanyidao  是父组件用来接受子组件的传参-->


  </div>
</template>

<script>
import MyTest from './components/MyTest'
export default {
  data() {
    return {
      goodsList: [
        { id: 1, name: '方便面', price: 2.5, info: '好吃不贵' },
        { id: 2, name: '火腿肠', price: 2, info: '价钱合理' },
        { id: 3, name: '卤鸡蛋', price: 1.5, info: '我的最爱' }
      ],
      msg: "砍一刀"
    }
  },
  components: {
    MyTest
  },
  methods: {
    changePrice(id) {
      console.log(id)
      let row = this.goodsList.find(item => item.id === id)
      row.price--
    }
  }
}
</script>

<style scoped>
p {
  color: blue;
}
</style>
