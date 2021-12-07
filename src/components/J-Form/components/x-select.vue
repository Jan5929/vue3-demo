<!--
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-12-07 15:57:34
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-07 16:49:52
-->
<template>
  <el-select
    style="width: 100%"
    v-model="JFormData[item.prop]"
    :placeholder="item.placeholder ? item.placeholder : '请选择'"
    :class="item.class"
    :style="item.value"
    :allow-create="item.allowCreate"
    :filterable="item.filterable"
    :clearable="item.clearable"
    :disabled="item.disabled"
    :multiple="item.multiple"
    :multiple-limit="item.multipleLimit"
    @change="change"
  >
    <el-option
      v-for="option in options"
      :key="option.value ? option.value : option"
      :label="option.label ? option.label : option"
      :value="option.value ? option.value : option"
      :disabled="option.disabled"
    >
    </el-option>
  </el-select>
</template>

<script>
import { computed, reactive } from 'vue'

export default {
  name: 'xSelect',
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
    const options = computed(() => {
      if (prop.item.options instanceof Array) {
        return prop.item.options
      } else {
        const list = prop.item.options.split(',')
        return list.map((item) => {
          return { value: item, label: item }
        })
      }
    })
    return {
      JFormData,
      options,
      change
    }
  }
}
</script>

<style scoped>
</style>
