<!--
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-12-01 09:51:15
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-01 11:25:16
-->
<template>
  <el-button
    :size="size"
    :type="type"
    :plain="plain"
    :round="round"
    :circle="circle"
    :loading="loading"
    :disabled="disabled"
    :icon="icon"
    :autofocus="autofocus"
    :native-type="nativeType"
    :auto-insert-space="autoInsertSpace"
  >
    {{ text }}
    <slot />
  </el-button>
</template>
<script>
import defaultProps from './props'
export default {
  name: 'JButton',
  props: defaultProps
}
</script>
