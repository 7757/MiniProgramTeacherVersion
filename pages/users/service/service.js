var app = getApp();
Page({
  data:{
    contents: 'lyf1208087904'
  },
  // 拨打电话
  bodadianhua() {
  
    wx.makePhoneCall({
      phoneNumber: '03123688777',
    })
  },
  // 添加客服微信
  tianjiaweixin(e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })

  },
})