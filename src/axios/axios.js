/*
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-12-02 10:16:36
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-02 11:13:24
 */

import axios from 'axios'
import defaultConfig from './config'

// 自定义axios实例
const instance = axios.create(defaultConfig)

// 请求拦截器
instance.interceptors.request.use(function (config) {
  // 请求之前做些什么
  return config
}, function (error) {
  // 对请求出错做点什么
  return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  const { data } = response
  if (data && data.code === 200) {
    return Promise.resolve(data)
  } else {
    return Promise.reject(data)
  }
}, function (error) {
  // 对相应错误做点什么
  return Promise.reject(error)
})

export default instance
