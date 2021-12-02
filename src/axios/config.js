/*
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-12-02 10:23:19
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-02 20:37:09
 */
export default {
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  baseURL: process.env.VUE_APP_BASE_API,
  // `headers` 是即将被发送的自定义请求头
  headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/json;charset=utf-8 ' },
  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 1000,
  // `withCredentials` 表示跨域请求时是否需要使用凭证 cookie
  withCredentials: false, // default
  responseType: 'json',
  responseEncoding: 'utf8' // default

}
