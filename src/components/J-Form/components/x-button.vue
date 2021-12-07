<!--
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-12-07 11:18:03
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-07 16:49:47
-->

<template>
  <el-button
    :type="item.type"
    :icon="item.icon"
    :loading="item.loading"
    :size="item.size"
    :round="item.round"
    :disabled="item.disabled"
    :style="item.style"
    :class="item.class"
    :plain="item.plain"
    :circle="item.circle"
    :autofocus="item.autofocus"
    :native-type="item.nativeType"
    @click="click"
  >
    {{ item.value }}
  </el-button>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'xButton',
  emits: ['formValue'],
  props: {
    item: { type: Object, default: () => ({}) },
    formData: {}
  },
  setup (prop, context) {
    const click = () => {
      context.emit('formValue', {
        type: 'click',
        prop: prop.item.prop,
        value: prop.formData[prop.item.prop]
      })
    }

    return { click }
  }
})
</script>

<style scoped lang="less" rel="stylesheet/less">
</style>
