<!--
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-11-29 15:08:30
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-01 17:11:36
-->
<template>
  <div>
    <J-table :table-column="tableColumn" showIndexColumn showSelectColumn>
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <J-button type="primary" size="mini" text="新建用户"></J-button>
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
import { defineComponent } from 'vue'
import JTable from '../../components/J-Table'
import { tableColumn } from './tableConfig.js'
export default defineComponent({
  components: {
    JTable
  },
  setup (props, { emit }) {
    const handleDelete = (row) => {
      // 删除逻辑
    }
    return {
      tableColumn,
      handleDelete
    }
  }
})
</script>
<style lang="less">
.J-table {
  height: 800px;
  .el-table {
    height: 100%;
    .el-table__body-wrapper {
      height: calc(100% - 48px);
    }
  }
}
</style>
