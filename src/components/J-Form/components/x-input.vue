<!--
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-12-07 10:37:01
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-07 16:49:35
-->
<template>
  <el-input
    v-model="JFormData[item.prop]"
    :style="item.style ? item.style : { width: '100%' }"
    :type="item.type"
    :placeholder="item.placeholder"
    :suffixIcon="item.suffixIcon"
    :prefixIcon="item.prefixIcon"
    :show-password="item.showPassword"
    :maxlength="item.maxlength"
    :rows="item.rows"
    :autosize="item.autosize"
    :minlength="item.minlength"
    :show-word-limit="item.showWordLimit"
    :disabled="item.disabled"
    :clearable="item.clearable"
    @change="change"
  >
  </el-input>
</template>

<script>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'xInput',
  emits: ['formValue'],
  props: {
    item: { type: Object, default: () => ({}) },
    formData: { type: Object, default: () => ({}) }
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
