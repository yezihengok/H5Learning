<template>
  <div class="home">
    <div class="logo-box"></div>
    <div class="search-box">
      <input type="text">
      <!-- <button>搜索一下</button> -->
      <router-link to="/search2/我是动态路由传参">搜索一下</router-link>
    </div>


    <!-- 
    路由跳转传参之--1、查询参数传参  
    1、在跳转路由时, 进行传值 to="/path?参数名=值"
    2、对应页面组件接收传递过来的值 $route.query.参数名
    -->

    <div class="hot-link">
      热门搜索：
      <router-link to="/search?key=程序员">程序员</router-link>
      <router-link to="/search?key=前端培训">前端培训</router-link>
      <router-link to="/search?key=如何成为前端大牛">如何成为前端大牛</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homePage',

}
</script>

<style>
.logo-box {
  height: 180px;
  background: url('@/assets/logo.png') no-repeat center;
}

.search-box {
  display: flex;
  justify-content: center;
  margin-top: 10px;
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

/* <router-link> 渲染后实际上就是个a标签 */
.search-box a {
  width: 100px;
  height: 36px;
  border: none;
  text-align: center;
  line-height: 36px;
  text-decoration: none;
  background-color: #ad2a26;
  color: #fff;
  position: relative;
  left: -2px;
  border-radius: 0 4px 4px 0;
}

.hot-link {
  width: 508px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
}

.hot-link a {
  margin: 0 5px;
}
</style>