// pages/LesPrepar/attMent/attMent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    items: [
      { name: 'USA', value: '张三', disabled: '', checked: '' },
      { name: 'asd', value: '张二', disabled: '', checked: ''},
      { name: 'BRA', value: '张一', disabled: '', checked: ''},
      { name: 'JPN', value: '张四', disabled: '', checked: ''},
      { name: 'ENG', value: '张五', disabled: '', checked: ''},
      { name: 'TUR', value: '张六', disabled: '', checked: '' },
      { name: 'dasdas', value: '张七', disabled: '', checked: ''},
      { name: 'dwhj', value: '张八', disabled: '', checked: '' },
      { name: 'edrqw', value: '张九', disabled: '', checked: ''},
      { name: 'dqw', value: '李一', disabled: '', checked: '' },
      { name: 'sad', value: '李二', disabled: '', checked: ''},
      { name: 'TUasdasR', value: '李三', disabled: '', checked: ''},
      { name: 'ca', value: '李四', disabled: '', checked: '' },
      { name: 'asxcas', value: '李五', disabled: '', checked: '' },
      { name: 'asca', value: '李六', disabled: '', checked: '' },
      { name: 'xzv', value: '李七', disabled: '', checked: '' },
      { name: 'ca', value: '李八', disabled: '', checked: ''},
      { name: 'pi', value: '李九', disabled: '', checked: ''},
      { name: 'USascA', value: '王一', disabled: '', checked: ''},
      { name: 'gdg', value: '王二', disabled: 'ture', checked: ''},
      { name: 'zxvrh', value: '王三', disabled: '', checked: '' },
      { name: 'sdfsd', value: '王四', disabled: '', checked: '' },
      { name: 'rge', value: '王五', disabled: '', checked: ''},
      { name: 'iuo', value: '王六', disabled: '', checked: '' },
  ],
  checkPeople:[],
  index:null,
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
  onLoad: function (options) {

  
    let disabledpelpel= JSON.parse(options.leavlSchool)
    let allPeopel= this.data.items

    for (let i = 0; i < allPeopel.length; i++) {
      for (let j = 0; j < disabledpelpel.length; j++) {
        if (disabledpelpel[j].name === allPeopel[i].name) {
     
          allPeopel[i].checked='true'
        }
      }
      }


   
    this.setData({
      index: options.index,
      items: allPeopel
    })
   
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
    let resultArray=[]
    if(item.length>=1){
      for (let i = 0; i < item.length; i++) {
        let row = item[i].split(",") //将数组进行分割
        resultArray.push({ name: row[0], value: row[1], checked:''})
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
    let index =this.data.index;
    let attMent = 'course['+index+'].attMent'

    prevPage.setData({  // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
      [attMent]: this.data.checkPeople,
    })
    wx.navigateBack({
      delta: 1,
    })
  }
})