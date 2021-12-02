/*
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-12-01 11:21:58
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-01 14:22:00
 */

// 将el-icon的组件名称AbbbCddd转化为i-abbb-cddd形式
// 此前用switch做组件名时因关键字重复报错，所以格式统一加了前缀
// 例：Switch转换为i-switch，ArrowDownBold转换为i-arrow-down-bold
export function transElIconName (iconName) {
  return 'J' + iconName.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase())
}
