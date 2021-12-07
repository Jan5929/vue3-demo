/*
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-12-07 16:51:46
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-07 16:51:46
 */
export function changeStr (str) {
  const arr = str.split('-')
  const result = arr.map((item, index) => {
    if (index) {
      item = item.charAt(0).toUpperCase() + item.slice(1)
    }
    return item
  })
  return result.join('')
}
