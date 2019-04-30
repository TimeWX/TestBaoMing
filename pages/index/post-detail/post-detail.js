// pages/index/post-detail/post-detail.js


var app = getApp();
var util = require("../../../utils/util.js");
var network = require('../../../utils/network.js');
var config = require('../../../utils/config.js');

Page({


  data: {
    views: '',
    picUrl: config.host,
    openid: '',
    vid: '',
    view_id: 0,
    userInfo: {},
    tel: '0123456789',
    gzList: []
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 活动报名
   */
  singUp: function() {
    wx.navigateTo({
      url: '/pages/baoming/baoming?vid=' + this.data.vid
    })
  },

  /**
   * 打开地图
   */
  openMap: function(event) {
    var latitude = event.currentTarget.dataset.lat;
    var longitude = event.currentTarget.dataset.long;
    var address = event.currentTarget.dataset.address;
    wx.openLocation({
        latitude: Number(latitude),
        longitude: Number(longitude),
        scale: 18,
        name: '信息发出位置',
        address: address
      })
  },

      /**
       * 打电话
       */
  callMe : function (event) {

        wx.makePhoneCall({
          phoneNumber: event.currentTarget.dataset.tel
        })
      }

})