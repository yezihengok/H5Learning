<template>
  <div class="base-count">
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>
  </div>
</template>

<script>
export default {
  // data() {
  //   console.log('函数执行了')
  //   return {
  //     count: 100,
  //   }
  // },

  // data为什么要写成函数:
  // 一个组件的 data 选项必须是一个函数。目的是为了：保证每个组件实例，维护自己独立的一份数据对象。
  data: function () {
    return {
      count: 100,
    }
  },
}
</script>

<style>
.base-count {
  margin: 20px;
}
</style>