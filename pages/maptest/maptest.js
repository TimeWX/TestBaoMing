// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../utils/bmap-wx.js');
Page({
  data: {
    sugData: ''
  },
  // 绑定input输入 
  bindKeyInput: function (e) {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'loMENzUq9k4HVkzQfPVI6oe4kk39Ws6w'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var sugData = '';
      for (var i = 0; i < data.result.length; i++) {
        sugData = sugData + data.result[i].name + '\n';
      }
      that.setData({
        sugData: sugData
      });
    }
    // 发起suggestion检索请求 
    BMap.suggestion({
      query: e.detail.value,
      region: '上海',
      city_limit: true,
      fail: fail,
      success: success
    });
  }
}) 