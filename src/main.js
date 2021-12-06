/*
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-11-29 14:57:41
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-06 15:17:52
 */
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
// ui组件
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
// 全局样式
import 'reset-css/less/reset.less' // 重置浏览器默认样式
import './styles/index.less'
// router
import router from './router'
// http
import { $http } from './axios'
// 自定义指令
import { BoxScroll } from './utils/directive'
import * as ElIconModules from '@element-plus/icons'
// 导入转换图标名称的函数
import { transElIconName } from './utils/icon.js'
import JButton from './components/J-Button/index.vue'
const app = createApp(App)
// 使用中文
app.use(ElementPlus, {
  locale: zhCn
})
app.use(router)
app.mount('#app')

// 注册全局组件
app.component('J-button', JButton)
// 统一注册el-icon图标 J-edit
for (const iconName in ElIconModules) {
  app.component(transElIconName(iconName), ElIconModules[iconName])
}
// 全局挂载请求方法
app.config.globalProperties.$http = $http
BoxScroll(app)
