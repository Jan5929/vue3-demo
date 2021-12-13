<!--
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-11-29 15:08:30
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-13 10:02:03
-->
<template>
  <div>
    <J-table
      :table-column="tableColumn"
      showIndexColumn
      showSelectColumn
      :httpParams="httpParams"
    >
      <!-- 1.header中的插槽 -->
      <template #header>
        <div class="table-search">
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
          <J-button text="搜索" @click="handleSearch" />
          <J-button text="重置" />
        </div>
      </template>
      <!-- 列插槽 -->
      <template #status="{ row }">
        <span>{{ row.status || '1' }}</span>
      </template>
      <template #operation="{ row }">
        <J-button
          type="danger"
          size="mini"
          text="删除"
          @click="handleDelete(row)"
        ></J-button>
      </template>
    </J-table>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs, ref } from 'vue'
import JTable from '../../components/J-Table'
import JForm from '../../components/J-Form'

import { tableColumn } from './tableConfig.js'
export default defineComponent({
  components: {
    JTable,
    JForm
  },
  setup (props, { emit }) {
    const httpParams = reactive({
      url: '/list',
      data: {
        name: 'J'
      }
    })
    const handleDelete = (row) => {
      // 删除逻辑
    }
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
            prop: 'date31',
            span: 6
          },
          {
            eType: 'Picker',
            type: 'datetimerange',
            rangeSeparator: '至',
            label: '选择日期',
            prop: 'date32',
            span: 6
          }
        ]
      ]
    })
    const formValue = (params) => {
      data.formData[params.prop] = params.value
    }
    // 表格搜索
    const handleSearch = () => {
      httpParams.data = Object.assign(httpParams.data, data.formData)
      console.log(httpParams.data)
    }
    return {
      ...toRefs(data),
      formValue,
      mForm,
      httpParams,
      tableColumn,
      handleDelete,
      handleSearch
    }
  }
})
</script>
<style lang="less">
.table-search {
  display: flex;
  align-items: center;
}
.J-table {
  height: 780px;
  .el-table {
    height: 100%;
    .el-table__body-wrapper {
      height: calc(100% - 66px);
    }
  }
}
</style>
