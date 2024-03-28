<template>
  <div>
    <button @click="showDialog">不起名称的默认插槽</button>
    <MyDialog :isShow.sync="isShow">
      确定删除要吗？
    </MyDialog>

    <!-- 这里不传值就会显示插槽的默认值， 如果插槽没有默认值内容就显示空 -->
    <MyDialog :isShow.sync="isShow" class="dialog2"> </MyDialog>

    <button @click="showDialog2">具名插槽-多个插槽起名称区分</button>
    <MyDialog2 :isShow.sync="isShow2" ref="dialog2">

      <!-- template配合v-slot:名字来分发对应标签 -->
      <template v-slot:head>警告</template>
      <template v-slot:content>您即将自动预订99元尊享礼包!</template>

      <!-- v-slot:插槽名 可以简化成 #插槽名 -->
      <template #footer>
        <button @click="$refs.dialog2.closeDialog()">不了</button>
        <button>好的</button>
      </template>

    </MyDialog2>
  </div>
</template>

<script>


import MyDialog from './components/MyDialog.vue'
import MyDialog2 from './components/MyDialog2.vue'
export default {
  data() {
    return {
      isShow: false,
      isShow2: false
    }
  },

  methods: {
    showDialog() {
      this.isShow = true
    },
    showDialog2() {
      this.isShow2 = true
    }
  },
  components: {
    MyDialog,
    MyDialog2
  }
}
</script>

<style>
body {
  background-color: #b3b3b3;
}

.dialog2 {
  margin-top: 10px;
}
</style>