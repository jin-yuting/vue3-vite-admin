// 整个项目api的管理

import request from "./request";
export default {
  // home组件 左侧表格数据获取
  getTableData(params){
    return request({
      url: '/home/getTableData',
      method: 'get',
      data: params,
      mock: true,
    })
  }
}