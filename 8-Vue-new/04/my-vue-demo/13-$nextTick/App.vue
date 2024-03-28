<template>
  <div>
    <!-- 需求：输入框和确认按钮默认隐藏；点击编辑显示；显示后立即获取焦点 -->
    <div class="title">
      <h2>大标题</h2>
      <button @click="showIpt">编辑</button>
    </div>
    <div class="form" v-show="flag">
      <input type="text" ref="refIpt" />
      <button>确认</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false
    }
  },
  methods: {
    showIpt() {
      this.flag = true // 修改flag，让输入框显示

      // 获取焦点
      // this.$refs.refIpt.focus()
      // "显示之后"，立刻获取焦点是不能成功的！原因：Vue 是异步更新DOM(提升性能)


      // $nextTick使用：等 DOM更新后, 才会触发执行此方法里的函数体
      this.$nextTick(() => {
        this.$refs.refIpt.focus() // 找到输入框，让其获得焦点
      })
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  button {
    margin-left: 5px;
  }
}
</style>
