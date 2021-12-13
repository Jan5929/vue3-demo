<!--
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-12-07 16:07:35
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-13 10:00:27
-->
<template>
  <el-date-picker
    style="width: 100%"
    v-model="JFormData[item.prop]"
    :disabled="item.disabled"
    :type="item.type"
    :editable="item.editable"
    :clearable="item.clearable"
    :format="item.format"
    :style="item.style"
    :class="item.class"
    :placeholder="item.placeholder"
    :default-value="item.defaultValue"
    :range-separator="item.rangeSeparator"
    :start-placeholder="
      item.startPlaceholder ? item.startPlaceholder : '开始日期'
    "
    :end-placeholder="item.endPlaceholder ? item.endPlaceholder : '结束日期'"
    @change="change"
  >
  </el-date-picker>
</template>

<script>
import { reactive, defineComponent } from 'vue'
export default defineComponent({
  name: 'xDataPicker',
  emits: ['formValue'],
  props: {
    item: { type: Object, default: () => ({}) },
    formData: {}
  },
  setup (prop, context) {
    const JFormData = reactive({})
    Object.assign(JFormData, prop.formData)
    const change = () => {
      context.emit('formValue', {
        type: 'change',
        prop: prop.item.prop,
        value: JFormData[prop.item.prop]
      })
    }
    return {
      JFormData,
      change
    }
  }
})
</script>

<style scoped>
</style>
