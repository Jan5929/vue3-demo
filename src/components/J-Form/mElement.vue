<!--
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-12-07 10:34:46
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-07 16:52:11
-->
<template>
  <component
    :is="`x-${item.eType}`"
    :item="item"
    :form-data="formData"
    @formValue="formValue"
  >
  </component>
</template>

<script >
import { defineComponent } from 'vue'
import { changeStr } from './components/all'
const path = require('path')
const allCom = {}
const requireComponent = require.context('./components', false, /\.vue$/)
requireComponent.keys().forEach(key => {
  const name = changeStr(path.basename(key, '.vue'))
  allCom[name] = requireComponent(key).default || requireComponent(key)
})
export default defineComponent({
  name: 'index',
  components: allCom,
  emits: ['formValue'],
  props: {
    item: {},
    formData: {}
  },
  setup (props, content) {
    const formValue = (params) => {
      content.emit('formValue', { ...params, data: props.formData })
    }
    return {
      formValue
    }
  }
})
</script>
