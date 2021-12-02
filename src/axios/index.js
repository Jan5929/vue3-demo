/*
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-12-02 10:37:32
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-02 20:34:35
 */

import axios from './axios'
export async function $http (options) {
  if (!options.method) options.method = 'post'
  let result = {}
  try {
    result = await axios({
      url: options.url,
      method: options.method || 'post', // 默认为post 请求
      data: options.data,
      params: null,
      loading: options.loading
    })
  } catch (err) {
    console.log(err)
  }
  return result
}
