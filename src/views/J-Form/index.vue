<!--
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-12-06 16:47:16
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-07 17:27:34
-->
<template>
  <div>
    <J-form
      ref="mForm"
      inline
      size="small"
      :formData="formData"
      :needToast="false"
      :form-item-s="formItemS"
      :rules="rules"
      @formValue="formValue"
    />
  </div>
</template>
<script>
import { defineComponent, ref, reactive, toRefs } from 'vue'
import JForm from '../../components/J-Form/index'
export default defineComponent({
  components: {
    JForm
  },
  setup () {
    const mForm = ref(null)
    const data = reactive({
      show: false,
      formData: {
        date1: ''
      },
      rules: {},
      formItemS: [
        [
          {
            eType: 'Input',
            placeholder: '请输入姓名',
            label: '姓名',
            prop: 'date1',
            noShow: false,
            span: 3
          },
          {
            eType: 'Input',
            placeholder: '请输入年龄',
            label: '年龄12313121',
            prop: 'date2',
            noShow: false,
            span: 4
          },
          {
            eType: 'Select',
            label: 'Select',
            options: [{ label: '手机', value: '0' }, { label: '电脑', value: '1' }],
            prop: 'date13',
            span: 3
          },
          {
            eType: 'Picker',
            type: 'date',
            placeholder: '请选择日期',
            label: '选择日期',
            prop: 'date30',
            span: 3
          },
          {
            eType: 'Picker',
            type: 'datetimerange',
            rangeSeparator: '至',
            label: '选择日期',
            prop: 'date30',
            span: 6
          },
          {
            eType: 'Picker',
            type: 'datetimerange',
            rangeSeparator: '至',
            label: '选择日期',
            prop: 'date30',
            span: 6
          }
        ]
      ]
    })
    const formValue = (params) => {
      data.formData[params.prop] = params.value
    }
    return {
      ...toRefs(data),
      formValue,
      mForm
    }
  }
})
</script>
