/*
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-11-29 14:57:41
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-11-29 15:39:35
 */
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'

createApp(App).use(ElementPlus).use(router).mount('#app')
