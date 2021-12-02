<!--
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-11-29 15:08:30
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-02 20:52:04
-->
<template>
  <div class="J-table">
    <!-- 头部 -->
    <div class="table-header">
      <slot name="header">
        <div class="header-title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler" />
        </div>
      </slot>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      max-height="710"
      @selection-change="handleSelectChange"
      v-bind="tableProps"
    >
      <!-- 多选列 -->
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      />
      <!-- 序号 -->
      <el-table-column
        v-if="showIndexColumn"
        label="序号"
        type="index"
        align="center"
        width="80"
      />
      <!-- 列 -->
      <template v-for="column in tableColumn" :key="column.prop">
        <el-table-column v-bind="column" show-overflow-tooltip align="center">
          <template #default="scope">
            <slot :name="column.slotName" :row="scope.row">
              {{ scope.row[column.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 分页组件 -->
    <div v-if="showPagination" class="table-pagination">
      <slot name="pagination">
        <J-pagination @getTableData="handleGetTableData" />
      </slot>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import JPagination from '../J-Pagination'
export default defineComponent({
  components: {
    JPagination
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    tableColumn: {
      type: Array,
      default: () => []
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    tableProps: {
      type: Object,
      default: () => ({})
    },
    showPagination: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      tableData: []
    }
  },
  setup (props, { emit }) {
    const handleSelectChange = (value) => {
    }
    // 获取表格数据
    return {
      handleSelectChange
    }
  },
  methods: {
    handleGetTableData (obj) {
      this.tableData = obj.list
    }
  }
})
</script>
<style lang="less">
</style>
