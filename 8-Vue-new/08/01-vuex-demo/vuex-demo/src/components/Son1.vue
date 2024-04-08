<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: 方式1：$store.state.count直接获取
    <label>{{ $store.state.count }}</label>
    <br>
    <button @click="handleAdd(1)">值 + 1</button>
    <button @click="titleFn">改标题</button>
    <button @click="handleChange">一秒后修改成666</button>

    <hr>
    <!-- 计算属性getters -->
    <div>{{ $store.state.list }}</div>
    <div>{{ $store.getters.filterList }}</div>

    <hr>
    <!-- 测试访问模块中的state - 原生 -->
    <div>{{ $store.state.user.userInfo.name }}</div>
    <button @click="updateUser">更新个人信息</button>
    <button @click="updateUser2">一秒后更新信息</button>

    <div>{{ $store.state.setting.theme }}</div>
    <button @click="updateTheme">更新主题色</button>
    <hr>

  </div>
</template>

<script>
export default {
  name: 'Son1Com',
  methods: {
    handleAdd(n) {

      // 通过 strict: true 可以开启严格模式,开启严格模式后，直接修改state中的值会报错 （错误写法：）
      // this.$store.state.count += n
      // console.log(this.$store.state.count) 

      // 应该通过 mutation 核心概念，进行修改数据：提交multations里定义的方法

      this.$store.commit('addCount', {
        count: n,
        msg: '哈哈'
      })

    },
    titleFn() {
      this.$store.commit('changeTitle', '修改了标题')
    },
    handleChange() {
      // 调用action:
      // this.$store.dispatch('action名字', 额外参数)
      this.$store.dispatch('changeCountAction', 666)
    },

    updateUser() {
      // $store.commit('模块名/mutation名', 额外传参)
      this.$store.commit('user/setUser', {
        name: 'good',
        age: 25
      })
    },
    updateUser2() {
      // 调用action dispatch
      this.$store.dispatch('user/setUserSecond', {
        name: 'luck',
        age: 28
      })
    },
    updateTheme() {
      this.$store.commit('setting/setTheme', 'pink')
    },

  }
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}

h2 {
  margin-top: 10px;
}
</style>
