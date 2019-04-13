import ajax from './ajax'
const BASE_URL = '/api'
// 请求拼多多首页数据
export const hotShop = (params) => ajax(BASE_URL + '/proxy/api/api/alexa/v1/goods', params)