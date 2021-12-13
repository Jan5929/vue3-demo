<!--
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-12-07 10:15:29
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-13 09:45:04
-->
<template>
  <el-form
    ref="JFrom"
    :model="formData"
    :label-suffix="labelSuffix"
    :status-icon="statusIcon"
    :size="size"
    :disabled="disabled"
    :inline="inline"
    :label-width="labelWidth"
    :label-position="labelPosition"
    :rules="rules"
  >
    <el-row
      v-for="(itemS, index) in formItemS"
      :key="index"
      :gutter="itemS && itemS.gutter ? itemS.gutter : 20"
    >
      <template v-for="item in itemS">
        <el-col
          v-if="!item.noShow"
          :span="item.span"
          :key="item.prop"
          :offset="item.offset"
        >
          <el-form-item
            :label="item.noFormItem ? '' : item.label"
            :prop="item.prop"
            :label-width="item.noFormItem ? '0' : labelWidth"
          >
            <slot
              v-if="item.eType === 'slot'"
              :name="item.slotName"
              :data="{ ...item, ...formData }"
            >
            </slot>
            <m-element
              v-else
              :item="item"
              :form-data="formData"
              @formValue="formValue"
            >
            </m-element>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>
<script>
import { defineComponent, ref, watch } from 'vue'
import mElement from './mElement.vue'
import { ElMessage } from 'element-plus'
export default defineComponent({
  name: 'JForm',
  components: {
    mElement
  },
  props: {
    // 是否可拖拽排序
    disabled: { type: Boolean, default: false },
    needToast: { type: Boolean, default: false },
    labelPosition: { type: String, default: 'right' },
    formData: { type: Object, default: null },
    rules: { type: Object, default: null },
    formItemS: { type: Array, default: () => [[{}]] },
    inline: { type: Boolean, default: false },
    statusIcon: { type: Boolean, default: false },
    size: { type: String, default: 'medium' },
    labelSuffix: { type: String, default: '：' },
    labelWidth: { type: String, default: '' }
  },
  emits: ['formValue', 'submit', 'reset'],
  setup (props, content) {
    watch(props.formItemS, () => {
      props.formItemS.forEach((items) => {
        items.forEach(item => {
          if (item.noShow) {
            if (item.eType === 'Check' || item.eType === 'CheckButton') {
              // eslint-disable-next-line vue/no-mutating-props
              props.formData[item.prop] = []
            } else {
              delete props.formData[item.prop]
            }
          }
        })
      })
    })
    const JFrom = ref(null)
    const formValue = (params) => {
      content.emit('formValue', params)
      if (params.prop === 'submit') {
        submit().then(res => {
          content.emit('submit')
        })
      } else if (params.prop === 'reset') {
        reset()
        content.emit('reset')
      }
    }
    // 提交校验
    const submit = () => {
      return new Promise((resolve) => {
        JFrom.value && JFrom.value.validate((valid, message) => {
          if (valid) { resolve(valid) } else if (props.needToast) {
            ElMessage({
              type: 'error',
              message: message[Object.keys(message)[0]][0].message ? message[Object.keys(message)[0]][0].message : '校验失败'
            })
          }
        })
      })
    }
    // 重置
    const reset = () => {
      JFrom.value._value.resetFields()
    }

    // 设置是否展示
    const setNoShow = (prop, value) => {
      setNewValue(prop, 'noShow', value)
    }
    // 设置radio checkbox options值
    const setOptions = (prop, value) => {
      setNewValue(prop, 'options', value)
    }
    /**
     * 改变二维数组中某个值
     * @param prop        数组中唯一标识值
     * @param key         需要修改的字段
     * @param value        需要修改的值
     */
    const setNewValue = (prop, key, value) => {
      let two = -1
      const one = props.formItemS.findIndex((item) => {
        const iIndex = item.findIndex(iItem => {
          return iItem.prop === prop
        })
        if (iIndex !== -1) {
          two = iIndex
          return true
        }
      })
      if (one === -1 || two === -1) {
        console.log('找不到要设置的字段')
        return
      }
      // eslint-disable-next-line vue/no-mutating-props
      props.formItemS[one][two][key] = value
    }
    return {
      formValue,
      reset,
      submit,
      JFrom,
      setNoShow,
      setOptions,
      setNewValue
    }
  }
})
</script>
<style lang="less" scoped>
.el-form--inline {
  width: 100%;
  display: flex;
  .el-row {
    width: 100%;
    /deep/.el-form-item {
      width: 100%;
      .el-form-item__label {
        padding: 0;
      }
    }
  }
}
</style>
