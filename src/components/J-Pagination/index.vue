<!--
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-12-01 14:47:46
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-02 16:29:42
-->
<template>
  <el-pagination
    v-model:currentPage="page.currentPage"
    :page-sizes="[10, 20, 50, 100]"
    :page-size="page.pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="page.total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  >
  </el-pagination>
</template>
<script>
import { defineComponent, getCurrentInstance, reactive } from 'vue'
export default defineComponent({
  props: {
    httpParams: {
      type: Object,
      default: () => { }
    }
  },
  emits: ['getTableData'],
  setup (props, { emit }) {
    const page = reactive({
      currentPage: 1,
      pageSize: 10,
      total: 0
    })
    const { appContext } = getCurrentInstance()
    // 获取表格数据
    const handleGetTableDat = (params) => {
      const data = Object.assign({}, {
        currentPage: page.currentPage,
        pageSize: page.pageSize,
        ...props.httpParams, // 业务参数
        ...params // 分页参数
      })
      appContext.config.globalProperties.$http({
        url: '/list',
        data
      }).then(res => {
        page.total = res.data.totalSize
        page.currentPage = res.data.currentPage
        page.pageSize = res.data.currentPageSize
        emit('getTableData', res.data)
      })
    }
    handleGetTableDat()
    const handleCurrentChange = (currentPage) => {
      handleGetTableDat({ currentPage })
    }
    const handleSizeChange = (pageSize) => {
      handleGetTableDat({ pageSize, currentPage: 1 })
    }
    // 请求数据
    return {
      page,
      handleCurrentChange,
      handleSizeChange
    }
  }
})
</script>
