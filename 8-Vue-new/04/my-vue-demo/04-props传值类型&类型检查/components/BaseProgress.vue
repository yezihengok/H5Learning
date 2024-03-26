<template>
  <div>
    <h4>类型校验作用：</h4>
    为组件的 prop 指定验证要求，不符合要求，控制台就会有错误提示 → 帮助开发者，快速发现错误
    <div class="base-progress">
      <div class="inner" :style="{ width: w + '%' }">
        <span>{{ w }}%</span>
      </div>
    </div>

  </div>

</template>

<script>


export default {
  // 1.基础写法（类型校验）
  // props: {
  //   w: Number,
  // },

  // 2.完整写法（类型、默认值、非空、自定义校验）
  props: {

    w: {
      type: Number,
      // required: true,
      // default和required一般不同时写（因为当时必填项时，肯定是有值的）
      default: 0,
      validator(val) {
        // console.log(val)
        if (val >= 100 || val <= 0) {
          console.error('传入的范围必须是0-100之间')
          return false
        } else {
          return true
        }
      },
    },
  },
}
</script>

<style scoped>
.base-progress {
  height: 26px;
  width: 400px;
  border-radius: 15px;
  background-color: #272425;
  border: 3px solid #272425;
  box-sizing: border-box;
  margin-bottom: 30px;
}

.inner {
  position: relative;
  background: #379bff;
  border-radius: 15px;
  height: 20px;
  box-sizing: border-box;
  left: 0px;
  top: 0px;
}

.inner span {
  position: absolute;
  right: 0;
  top: 26px;
}
</style>