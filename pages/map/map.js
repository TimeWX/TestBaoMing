var bmap = require('../../utils/bmap-wx.js');
var config = require('/../../utils/config.js');
var wxMarkerData = [];
var BMap = '';

Page({
  data: {
    ak: config.baiduAK,
    latitude: '',
    longitude: '',
    //POI检索热词联想
    sugDatas: [],
    city: '',
    value: '' //input输入默认值

  },
  onLoad: function(options) {
    this.setData({
      value: options.value,
      longitude: options.longitude,
      latitude: options.latitude
    });
    this.analysisCoordinate();
  },
  //解析坐标
  analysisCoordinate: function() {
    let that = this;
    wx.request({
      url: 'https://api.map.baidu.com/geocoder/v2/?ak=' + that.data.ak + '&location=' + that.data.latitude + ',' + that.data.longitude + '&output=json',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        let city = res.data.result.addressComponent.city;
        that.setData({
          city: city
        });
      },
      fail: function() {
        that.setData({
          city: '获取定位失败'
        });
      },
      complete: function() {
        wx.hideLoading();
      }
    });
    wx.showLoading({
      title: '定位获取中',
      mask: true
    });

  },

  //suggestion检索
  baiduSearch: function(options) {
    let that = this;
    let sugDatas=[];
    var BMap = new bmap.BMapWX({
      ak: that.data.ak
    });
    var fail = function(data) {
      console.log(data)
    };
    var success = function(data) {
      for (var i = 0; i < data.result.length; i++) { 
        sugDatas[i] = data.result[i].name ;
      };
      that.setData({
        sugDatas: sugDatas
      });
    }
    // 发起suggestion检索请求 
    BMap.suggestion({
      query: options.detail.value,
      region: that.data.city,
      city_limit: true,
      fail: fail,
      success: success
    });

  },
  //绑定Input输入
  bindKeyInput: function(e) {
    this.baiduSearch(e);
  },

  onAddressTap:function(e){
    let address=e.currentTarget.dataset.address;
    let currPage=null;
    let prevPage=null;
    var pages=getCurrentPages();
    if(pages.length>=2){
      currPage = pages[pages.length - 1];
      prevPage = pages[pages.length - 2];
    }
    if(prevPage){
      prevPage.setData({
        address:address
      });
    }
    wx.navigateBack({
      url:'../baoming/baoming'
    })

  }


})