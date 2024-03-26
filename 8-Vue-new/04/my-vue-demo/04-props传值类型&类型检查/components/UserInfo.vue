<template>
  <div>
    <h4>个人信息组件</h4>
    <div>姓名：{{ username }}</div>
    <div>年龄{{ age }}</div>
    <div>是否单身：{{ isSingle }}</div>
    <div>座驾：{{ car.brand }}</div>
    <div>兴趣爱好：{{ hobby.join('、') }}</div>
  </div>
</template>

<script>
export default {
  // 子组件，需要通过 props 接收传递过来的数据
  props: ['username', 'age', 'isSingle', 'car', 'hobby']
}

</script>

<style scoped></style>
