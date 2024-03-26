<template>
  <div>
    <!-- Props 可以 传递 任意数量、类型 的prop-->
    <UserInfo :username="username" :age="age" :isSingle="isSingle" :car="car" :hobby="hobby"></UserInfo>
    <hr>
    <BaseProgress :w="width"></BaseProgress>
  </div>
</template>

<script>

import UserInfo from './components/UserInfo.vue'
import BaseProgress from './components/BaseProgress.vue'
export default {
  data() {
    return {
      username: '小帅',
      age: 28,
      isSingle: true,
      car: {
        brand: '宝马',
      },
      hobby: ['篮球', '足球', '羽毛球'],
      width: 101,
    }
  },
  components: {
    UserInfo,
    BaseProgress
  }
}
</script>

<style scoped></style>