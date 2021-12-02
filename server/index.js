/*
 * @Descriptions:
 * @Author: 这个Bug不予解决
 * @Date: 2021-12-02 10:00:43
 * @LastEditors: 这个Bug不予解决
 * @LastEditTime: 2021-12-02 20:39:52
 */
const express = require('express')
const bodyParser = require('body-parser')
const Mock = require('mockjs')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const Random = Mock.Random
const dataList = [] // 用于接受生成数据的数组

for (let i = 0; i < 26; i++) { // 可自定义生成的个数
  const template = {

    Boolean: Random.boolean, // 可以生成基本数据类型

    Natural: Random.natural(1, 10), // 生成1到100之间自然数

    Integer: Random.integer(1, 100), // 生成1到100之间的整数

    Float: Random.float(0, 100, 0, 5), // 生成0到100之间的浮点数,小数点后尾数为0到5位

    Character: Random.character(), // 生成随机字符串,可加参数定义规则

    String: Random.string(2, 10), // 生成2到10个字符之间的字符串

    Range: Random.range(0, 10, 2), // 生成一个随机数组

    Date: Random.date(), // 生成一个随机日期,可加参数定义日期格式

    Image: Random.image(Random.size, '#02adea', 'Hello'), // Random.size表示将从size数据中任选一个数据

    Color: Random.color(), // 生成一个颜色随机值

    Paragraph: Random.paragraph(2, 5), // 生成2至5个句子的文本

    Name: Random.name(), // 生成姓名

    Url: Random.url(), // 生成web地址

    Address: Random.province() // 生成地址

  }

  dataList.push(template)
}

app.all('*', function (req, res, next) {
  // 设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*')
  // 允许的header类型
  res.header('Access-Control-Allow-Headers', '*')
  // 跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS')
  next()
})

// 列表接口
app.post('/list', (req, res) => {
  var info = req.body
  var [currentPage, pageSize] = [info.currentPage, info.pageSize]
  const newList = JSON.parse(JSON.stringify(dataList))
  const total = newList.length
  var newDataList = newList.slice((currentPage - 1) * pageSize, currentPage * pageSize)
  const result = {
    code: 200,
    message: 'success',
    data: {
      currentPage: currentPage,
      currentPageSize: pageSize,
      list: newDataList,
      totalSize: total

    }
  }
  res.send(result)
})

app.listen('8090', () => {
  console.log('监听端口8090')
})
