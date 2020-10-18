// pages/start/start.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
start:function(){
  wx.navigateTo({
    url: "../../pages/plain/plain",
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    function drawLogo() {
      var logo_img = flyimages[ "logo" ];
      var logo_width = logo_img.width;
      var logo_height = logo_img.height;

      var y = 100;
      cxt.drawImage( logo_img.src, 0, y, logo_width, logo_height );
  }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})