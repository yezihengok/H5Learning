<template>
  <div class="app">

    <!-- 父组件通过v-model 简化代码，实现子组件和父组件数据 双向绑定 -->
    <BaseSelect v-model="selectId" @changeValue="selectId = $event"></BaseSelect>

    <!-- 父组件传值给子组件方式 -->
    <BaseSelect :value="selectId" @changeValue="selectId = $event"></BaseSelect>

    选择的城市Id:{{ selectId }}
  </div>
</template>

<script>
import BaseSelect from './components/BaseSelect.vue'
export default {
  data() {
    return {
      selectId: '102',
    }
  },

  components: {
    BaseSelect,
  },
}
</script>

<style></style>