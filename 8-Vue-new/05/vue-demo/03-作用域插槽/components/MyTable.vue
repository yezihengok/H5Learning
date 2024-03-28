<template>
  <table class="my-table">
    <thead>
      <tr>
        <th>序号</th>
        <th>姓名</th>
        <th>年纪</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>


      <tr v-for="(item, index) in data" :key="item.id">
        <td>{{ index }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>
          <!-- 作用域插槽：子组件在定义插槽的时候，需要向使用者（父组件）传递一些参数，这样插槽称之为作用域插槽  -->

          <!-- 
            1、给 slot 标签, 以 添加属性的方式传值
            2、所有添加的属性, 都会被收集到一个对象中 { id: 3, uname: '小张' }
           -->
          <slot :id="item.id" :username="item.name"></slot>
          <!-- tips：  自定义的参数名称不要定义为 :name="xxx"    name是用来定义插槽的名称的 有冲突 -->
          <!-- 
          回顾具名插槽的定义： <slot name="head">标题</slot> -->

        </td>
      </tr>

      <!-- <tr>
        <td>1</td>
        <td>小张</td>
        <td>8</td>
        <td>
          <button>删除</button>
        </td>
      </tr>
      <tr>
        <td>1</td>
        <td>小张</td>
        <td>8</td>
        <td>
          <button>删除</button>
        </td>
      </tr> -->
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: Array
  }
}
</script>

<style scoped>
.my-table {
  width: 450px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 24px;
  margin: 30px auto;
  border-spacing: 0;
}

.my-table thead {
  background-color: #1f74ff;
  color: #fff;
}

.my-table thead th {
  font-weight: normal;
}

.my-table thead tr {
  line-height: 40px;
}

.my-table th,
.my-table td {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
}

.my-table td:last-child {
  border-right: none;
}

.my-table tr:last-child td {
  border-bottom: none;
}

.my-table button {
  width: 65px;
  height: 35px;
  font-size: 18px;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: #ffffff;
  margin-left: 5px;
}
</style>
