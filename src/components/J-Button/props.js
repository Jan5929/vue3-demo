/*
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-12-01 10:23:11
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-01 11:13:41
 */

export default {
  size: {
    type: String,
    default: 'small',
    validator (value) {
      // 这个值必须与下列字符串中的其中一个相匹配
      return ['medium', 'small', 'mini'].includes(value)
    }
  },
  type: {
    type: String,
    default: 'primary',
    validator (value) {
      // 这个值必须与下列字符串中的其中一个相匹配
      return ['primary', 'success', 'warning', 'danger', 'info', 'text'].includes(value)
    }
  },
  // 是否为朴素按钮
  plain: {
    type: Boolean,
    default: false
  },
  // 是否为圆角按钮
  round: {
    type: Boolean,
    default: false
  },
  // 是否为圆形按钮
  circle: {
    type: Boolean,
    default: false
  },
  // 是否为加载中状态
  loading: {
    type: Boolean,
    default: false
  },
  // 是否为禁用状态
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: [String],
    default: ''
  },
  // 是否默认聚焦
  autofocus: {
    type: Boolean,
    default: false
  },
  // 原生 type 属性
  nativeType: {
    type: String,
    default: 'button',
    validator (value) {
      // 这个值必须与下列字符串中的其中一个相匹配
      return ['button', 'submit', 'reset'].includes(value)
    }
  },
  // 自动在两个中文字符之间插入空格
  autoInsertSpace: {
    type: Boolean,
    default: false
  },
  // 按钮文字
  text: {
    type: String,
    default: '默认按钮'
  }
}
