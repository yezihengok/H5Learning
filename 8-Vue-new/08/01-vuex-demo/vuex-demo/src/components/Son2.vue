<template>
  <div class="box">
    <h3>Son2 子组件--映射方法使用</h3>
    从vuex中获取的值:<label>{{ count }}</label>
    <br />
    <!-- 
    映射了方法，就可以直接通过this.addCount调用了 -->
    <button @click="subCount(1)">值 - 1</button>
    <button @click="changeCountAction(888)">1秒后改成888</button>
    <button @click="changeTitle('前端程序员')">改标题</button>
    <hr>
    <div>{{ filterList }}</div>
    <hr>
    <!-- 访问模块中的state -->
    <div>{{ user.userInfo.name }}</div>
    <div>{{ setting.theme }}</div>
    <hr>
    <!-- 访问模块中的state -->
    <div>user模块的数据：{{ userInfo }}</div>
    <button @click="setUser({ name: 'xiaoli', age: 80 })">更新个人信息</button>
    <button @click="setUserSecond({ name: 'good', age: 80 })">一秒后更新信息</button>

    <div>setting模块的数据：{{ theme }} - {{ desc }}</div>
    <button @click="setTheme('skyblue')">更新主题</button>
    <!-- 访问模块中的getters -->
    <div>{{ UpperCaseName }}</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Son2Com',
  computed: {
    // mapState 和 mapGetters 都是映射【属性】
    ...mapState(['count', 'user', 'setting']),
    ...mapState('user', ['userInfo']),
    ...mapState('setting', ['theme', 'desc']),

    ...mapGetters(['filterList']),
    //子模块的映射 mapGetters('模块名', ['xxx'])
    ...mapGetters('user', ['UpperCaseName'])
  },
  methods: {
    // mapMutations 和 mapActions 都是映射【方法】
    // 全局级别的映射
    ...mapMutations(['subCount', 'changeTitle']),
    ...mapActions(['changeCountAction']),

    // 分模块的映射
    ...mapMutations('setting', ['setTheme']),
    //子模块的映射 mapMutations('模块名', ['xxx']) 
    ...mapMutations('user', ['setUser']),
    ...mapActions('user', ['setUserSecond'])
    // handleSub (n) {
    //   this.subCount(n)
    // }
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
