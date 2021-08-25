// pages/LesPrepar/attMent/attMent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  items: [],
  index:null,
  checkPeople: [],
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
   onLoad: function (options) {
    
     let allcurrent= JSON.parse(options.leavlSchool)
     let currentPeople = JSON.parse(options.leavlSchoolPeople)
     for (let i = 0; i < allcurrent.length; i++) {
       for (let j = 0; j < currentPeople.length; j++) {
         if (currentPeople[j].name === allcurrent[i].name) {

           allcurrent[i].checked = 'true'
         }
       }
     }


  
    this.setData({
      index: options.index,
      items: allcurrent,
    })

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

  },


  // 多选框点击事件
  checkboxChange: function (e) {

    let item = e.detail.value
    let resultArray = []
    if (item.length >= 1) {
      for (let i = 0; i < item.length; i++) {
        let row = item[i].split(",") //将数组进行分割
        resultArray.push({ name: row[0], value: row[1], checked: '' })
      }
    }
    this.setData({
      checkPeople: resultArray
    })
  },
  // 点击完成按钮
  completeHander(){
    let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
    let prevPage = pages[pages.length - 2];
    let index = this.data.index;
    let attMent = 'course[' + index + '].leavSchool'

    prevPage.setData({  // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
      [attMent]: this.data.checkPeople,
    })
    wx.navigateBack({
      delta: 1,
    })
  }
})