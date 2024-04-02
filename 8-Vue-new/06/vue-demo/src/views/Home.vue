<template>
  <div class="home">
    编程式导航：用JS代码来进行跳转

    <div class="logo-box"></div>
    <div class="search-box">
      <input v-model="inpValue" type="text">
      <button @click="jump">搜索一下</button>
    </div>
    <div class="hot-link">
      热门搜索：
      <router-link to="/search/黑马程序员">黑马程序员</router-link>
      <router-link to="/search/前端培训">前端培训</router-link>
      <router-link to="/search/如何成为前端大牛">如何成为前端大牛</router-link>
      <router-link to="/new">不存在的路由路径</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data() {
    return {
      inpValue: ''
    }
  },
  methods: {
    jump() {
      // 【1】path路径跳转传参 :

      // //简单写法
      // this.$router.push('/路径?参数名1=参数值1&参数2=参数值2')
      // //完整写法
      // this.$router.push({
      //   path: '/路径',
      //   query: {
      //     参数名1: '参数值1',
      //     参数名2: '参数值2'
      //   }
      // })



      //js查询参数传参 query
      this.$router.push(`/search?key=${this.inpValue}`)
      //完整写法:
      // this.$router.push({
      //   path: '/search',
      //   query: {
      //     key: this.inpValue
      //   }
      // })

      //-------------------------------------------------------------------
      //js动态路由传参 params
      this.$router.push(`/search/${this.inpValue}`)
      //完整写法:
      // this.$router.push({
      //   path: `/search/${this.inpValue}`
      // })

      //================================================

      // 【2】. 通过命名路由的方式跳转 ，与上面一样套路，仅仅是 path 换成 name
      // ，(需要给路由起名字) 适合长路径

      //    this.$router.push({
      //        name: '路由名'
      //        query: { 参数名: 参数值 },
      //        params: { 参数名: 参数值 }
      //    })
      this.$router.push({
        name: 'toSearch',
        // query: {
        //   key: this.inpValue
        // }
        params: {
          words: this.inpValue
        }
      })

    }
  }
}
</script>

<style>
.logo-box {
  height: 150px;
  background: url('@/assets/logo.jpeg') no-repeat center;
}

.search-box {
  display: flex;
  justify-content: center;
}

.search-box input {
  width: 400px;
  height: 30px;
  line-height: 30px;
  border: 2px solid #c4c7ce;
  border-radius: 4px 0 0 4px;
  outline: none;
}

.search-box input:focus {
  border: 2px solid #ad2a26;
}

.search-box button {
  width: 100px;
  height: 36px;
  border: none;
  background-color: #ad2a26;
  color: #fff;
  position: relative;
  left: -2px;
  border-radius: 0 4px 4px 0;
}

.hot-link {
  width: 550px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
}

.hot-link a {
  margin: 0 5px;
}
</style>