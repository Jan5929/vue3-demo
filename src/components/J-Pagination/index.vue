<!--
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-12-01 14:47:46
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-06 16:27:46
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
import { defineComponent, getCurrentInstance, reactive, watch } from 'vue'
export default defineComponent({
  props: {
    httpParams: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['getTableData'],
  setup (props, { emit }) {
    const page = reactive({
      currentPage: 1,
      pageSize: 20,
      total: 0
    })
    const { appContext } = getCurrentInstance()
    // 获取表格数据
    const handleGetTableDat = (params) => {
      if (props.httpParams.url) {
        const data = Object.assign({}, {
          url: props.httpParams.url,
          data: {
            currentPage: page.currentPage,
            pageSize: page.pageSize,
            ...props.httpParams.data,
            ...params // 分页参数
          }
        })
        appContext.config.globalProperties.$http(data).then(res => {
          page.total = res.data.totalSize
          page.currentPage = res.data.currentPage
          page.pageSize = res.data.currentPageSize
          emit('getTableData', res.data)
        })
      }
    }
    // 监听表格请求参数
    watch(props, (val, old) => {
      handleGetTableDat()
    })
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
