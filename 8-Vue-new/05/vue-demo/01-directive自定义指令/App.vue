<template>
  <!-- <div class="box" @click="$event.target.innerHTML = 'HELLO'"> -->
  <div class="box">
    <h3 v-color="yanse">需求1：让输入框立即获取焦点</h3>
    <div class="focus">
      <input type="text" v-focus />
    </div>
    <h3>需求2：Ajax请求数据，并设计loading指令</h3>
    <!-- list数据为空，加 loading 类，让loading图片显示 -->
    <!-- list数据不为空，移除 loading 类，让loading图片隐藏 -->
    <ul v-loading="list.length">
      <li class="news" v-for="item in list" :key="item.id">
        <div class="left">
          <div class="title">{{ item.title }}</div>
          <div class="info">
            <span>{{ item.source }}</span>
            <span>{{ item.time }}</span>
          </div>
        </div>
        <div class="right">
          <img :src="item.img" alt="" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// 安装 axios =>  npm i axios 或者 yarn add axios
// 安装如果报错，则加 --legacy-peer-deps 选项
// 接口地址：http://hmajax.itheima.net/api/news
// 请求方式：get
// 请求参数：无

import axios from 'axios'
export default {
  directives: {
    loading: {
      //inserted 方法 在dom初次渲染完毕后执行，可操作dom
      inserted(ele, obj) {
        // 刷新页面后，立即判断有没有数据，loading图片要不要显示
        // console.log(ele) // 使用指令的元素
        // console.log(obj.value) // 指令的值
        obj.value <= 0
          ? ele.classList.add('myLoading')
          : ele.classList.remove('myLoading')
      },
      //update 方法 在dom更新后执行，用于刷新dom
      update(ele, obj) {
        obj.value <= 0
          ? ele.classList.add('myLoading')
          : ele.classList.remove('myLoading')
      }

      //e.classList.add  动态操作或移除盒子的 class
    },
    color: {
      inserted(ele, obj) {
        console.log('111111111')
        // console.log(ele) // element 元素，表示使用指令的那个元素
        // console.log(obj) // obj.value 就是传递给指令的值
        ele.style.color = obj.value
      },
      update(ele, obj) {
        console.log(22222222222222)
        ele.style.color = obj.value
      }
    },
  },
  data() {
    return {
      yanse: 'blue',
      list: []
    }
  },
  async created() {
    const { data: res } = await axios.get('http://hmajax.itheima.net/api/news')
    // console.log(res)
    setTimeout(() => {
      this.list = res.data
    }, 2000)
  },
  methods: {
    // showEle(e) {
    //   console.log(e.target)
    // }
  }
}
</script>

<style>
/* 准备一个 loading 类，通过伪元素定位，设置宽高，实现蒙层 */
.myLoading::before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff url('./loading.gif') no-repeat;
  content: '';
}

.box {
  width: 800px;
  min-height: 500px;
  position: relative;
}

.focus,
ul {
  border: 3px solid orange;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
}

.news {
  display: flex;
  height: 120px;
  width: 600px;
  margin: 0 auto;
  padding: 20px 0;
  cursor: pointer;
}

.news .left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10px;
}

.news .left .title {
  font-size: 20px;
}

.news .left .info {
  color: #999999;
}

.news .left .info span {
  margin-right: 20px;
}

.news .right {
  width: 160px;
  height: 120px;
}

.news .right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
