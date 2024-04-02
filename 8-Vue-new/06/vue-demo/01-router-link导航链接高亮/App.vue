<template>
  <div>
    <div class="footer_wrap">

      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/friend">朋友</router-link>
    </div>

    <div class="top">
      <!-- router-view 配置路由出口(匹配的组件展示的位置)  -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>


export default {};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.footer_wrap {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}

.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}

.footer_wrap a:hover {
  background-color: #555;
}


/* 使用router-link跳转后，F12查看 当前点击的链接默认加了两个class的值 router-link-exact-active和router-link-active
 我们可以给任意一个class属性添加高亮样式即可实现功能 */


/*
  1.router-link-active 模糊匹配（用的多）

  to="/my" 可以匹配匹配路径/my开头的所有路径  /my/myOrder /my/myOrder/xxx  （后面路由页面又包含子页面时会用到）

  2.router-link-exact-active 精确匹配 to="/my" 仅可以匹配 /m */

.footer_wrap .router-link-active {
  background-color: #13796b;
  color: #ccc;
  border: 1px solid black;
}
</style>