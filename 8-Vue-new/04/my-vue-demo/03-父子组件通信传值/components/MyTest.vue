<template>
  <div class="goods">
    <!-- 父组件穿过来的值obj直接使用： -->
    <h2>{{ obj.name }}</h2>
    <p>商品单价：{{ obj.price }}</p>
    <p>商品描述：{{ obj.info }}</p>


    <!-- 通过this.$emit(key,value) 向父组件发送通知 -->
    <button @click="$emit('kanyidao', obj.id)">{{ btnName }}</button>

  </div>
</template>

<script>
export default {
  // 子组件，需要通过 props 接收传递过来的数据
  props: ['obj', 'btnName']
}
</script>

<style scoped>
.goods {
  margin: 10px;
  padding: 10px;
  border: solid 1px black;
  border-radius: 5px;
}
</style>
