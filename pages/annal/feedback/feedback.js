



Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:null,
    countPic: 5,//上传图片最大数量
    showImgUrl: "", //路径拼接，一般上传返回的都是文件名，
    uploadImgUrl: '',//图片的上传的路径
    info: null,
    noteMaxLen: 300, // 最多放多少字
    classData: {
      studentName: "来忆凡",
      teacherPrice: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/me/hader.jpg",
      courseName: "初级语法课",
      className: "快乐学习班",
      shchoolName: "江宁景峰店",
      courseDate: "2019年11月26日",
      courseTime: "9:30-10:30",
      scope: 85,
      ranking: 115,
      totalScore: 4.8,
      trueDetails: 4,
      classEffect: 4,
      environHealth: 5,
      teacherName: "付鹏"
  
    },





  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      index: options.index
    })
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.info +'onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(this.data.info +'onShow')
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
  //监听组件事件，返回的结果
  myEventListener: function (e) {
    console.log("上传的图片结果集合")
    console.log(e.detail.picsList)
  },

 
  // 提交清空当前值
  purchaseHander: function () {
    var that = this;
    let showStatus = this.data.info;
    let len = parseInt(showStatus.length);
    let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
    let prevPage = pages[pages.length - 2];
    let flag = 'teacherArray[' + that.data.index + '].courseReponse'



    if (showStatus.length > 1 && showStatus!='') {
      wx.showToast({
        title: '反馈成功',
        icon: 'success',
        duration: 1500,
        mask: false,
        success: function () {
          that.setData({ noteNowLen: len })

          prevPage.setData({  // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。

            [flag]: true

          })


        }
      })
      setTimeout(function () {
        wx.navigateBack({
          delta: 2
        })
      }, 1500)


    } else {
      wx.showToast({
        title: '请先填写后再发表',
        icon: 'none',
        duration: 1500,
        mask: false,
        success: function () {
        }
      })
    }
    console.log(that.data.info)

  },


  bindTextAreaChange: function (e) {
    var that = this
    var value = e.detail.value,
      len = parseInt(value.length);
    if (len > that.data.noteMaxLen)
      return;
    that.setData({ info: value, noteNowLen: len })
    console.log(that.data.info)
  },
 

  
})