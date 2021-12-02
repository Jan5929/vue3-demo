/*
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-11-29 14:57:41
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-02 10:44:06
 */
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import router from './router'
import { $http } from './axios'
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
