/*
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-12-03 15:31:29
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-06 15:41:34
 */
import { nextTick } from 'vue'
// 自定义滚动条
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

/**
 * @description 为自定义滚动条全局注入自定义指令。自动判断该更新PerfectScrollbar还是创建它
 * @param {Element} el - 必填。dom元素
 */
const elScrollBar = (el) => {
  // 在元素上加点私货，名字随便取，确保不会和已有属性重复即可，我取名叫做_ps_
  if (el._ps_ instanceof PerfectScrollbar) {
    el._ps_.update()
  } else {
    // el上挂一份属性
    el._ps_ = new PerfectScrollbar(el)
  }
}

export function BoxScroll (app) {
  app.directive('Scroll', {
    mounted (el, binding) {
      const { arg } = binding
      if (arg === 'table') {
        el = el.querySelector('.el-table__body-wrapper')
        if (!el) {
          return console.warn('未发现className为el-table__body-wrapper的dom')
        }
      }
      const rules = ['fixed', 'absolute', 'relative']
      if (!rules.includes(window.getComputedStyle(el, null).position)) {
        console.error(`perfect-scrollbar所在的容器的position属性必须是以下之一：${rules.join('、')}`)
      }
      elScrollBar(el)
    },
    updated (el, binding) {
      const { arg } = binding
      if (arg === '任何你喜欢的标记') {
        el = el.querySelector('.el-table__body-wrapper')
        if (!el) {
          return console.warn('未发现className为el-table__body-wrapper的dom')
        }
      }
      nextTick(
        () => {
          try {
            elScrollBar(el)
          } catch (error) {
            console.error(error)
          }
        }
      )
    }
  })
}
