
// 数据请求地址
var host = "127.0.0.1:8081/mini"

var config = {

  // 下面的地址配合云端 Server 工作
  host: `http://${host}/`, 

  // 数据请求接口地址
  requestUrl: `http://${host}/Huod/`,

  // 百度AK填写，用于获取地理位置
  baiduAK: 'loMENzUq9k4HVkzQfPVI6oe4kk39Ws6w'
  
};

module.exports = config