const Mock = require('mockjs')

// 格式： Mock.mock( url, 'post'|'get' , 返回的数据)
Mock.mock('/api/index', 'get', require('./data/index.json'))
Mock.mock('/api/index', 'post', require('./data/index.json'))
