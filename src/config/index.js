/**
 * 环境配置文件
 * 一般三个环境
 * 开发
 * 测试
 * 线上
 * 
*/ 
// 当前环境
const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
  development: {
    baseApi: '',
    mockApi: ''
  },
  test:{
    baseApi: '',
    mockApi: ''
  },
  pro: {
    baseApi: '',
    mockApi: ''
  }
}

export default {
  env,
  mock: true,
  ...EnvConfig[env]
}