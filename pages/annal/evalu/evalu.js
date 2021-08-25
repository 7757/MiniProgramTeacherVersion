Page({

  /**
   * 页面的初始数据
   */
  data: {

    showAll: true,
    evaluData: null,
    noteMaxLen: 300, // 最多放多少字,   
    info: "",
    noteNowLen: 0, //备注当前字数
    isShow: false,//控制emoji表情是否显示
    isLoad: true,//解决初试加载时emoji动画执行一次
    isLoading: true,//是否显示加载数据提示
    disabled: true,
    cfBg: false,
    _index: 0,
    emojiChar: "☺-😋-😌-😍-😏-😜-😝-😞-😔-😪-😭-😁-😂-😃-😅-😆-👿-😒-😓-😔-😏-😖-😘-😚-😒-😡-😢-😣-😤-😢-😨-😳-😵-😷-😸-😻-😼-😽-😾-😿-🙊-🙋-🙏-✈-🚇-🚃-🚌-🍄-🍅-🍆-🍇-🍈-🍉-🍑-🍒-🍓-🐔-🐶-🐷-👦-👧-👱-👩-👰-👨-👲-👳-💃-💄-💅-💆-💇-🌹-💑-💓-💘-🚲",
    //0x1f---
    emoji: [
      "60a", "60b", "60c", "60d", "60f",
      "61b", "61d", "61e", "61f",
      "62a", "62c", "62e",
      "602", "603", "605", "606", "608",
      "612", "613", "614", "615", "616", "618", "619", "620", "621", "623", "624", "625", "627", "629", "633", "635", "637",
      "63a", "63b", "63c", "63d", "63e", "63f",
      "64a", "64b", "64f", "681",
      "68a", "68b", "68c",
      "344", "345", "346", "347", "348", "349", "351", "352", "353",
      "414", "415", "416",
      "466", "467", "468", "469", "470", "471", "472", "473",
      "483", "484", "485", "486", "487", "490", "491", "493", "498", "6b4"
    ],
    emojis: [],//qq、微信原始表情
    alipayEmoji: [],//支付宝表情
    evaluData: {
      evaTime: "2019年11月12日21:05",
      evaInfo: "喜欢老师的上课氛围，幽默风趣，大家都很积极回答问题，也可以学习到很多东西,喜欢老师的上课氛围，幽默风趣，大家都很积极回答问题，也可以学习到很多东西也可以学习到很来忆凡很帅气的吧,这是厕所数据hdjkqwhdkqwjhdjqwghd",
    },

    // 学生最新评论
    newStudenteva: [],
    // 老师最许评论
    newTeachereva: {
      evaTime: null,
      evaInfo: null
    },
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
      teacherName: "付鹏",
      evaDate: [{
        id: 1,
        evaTime: "2019年11月12日21:05",
        evaInfo: "喜欢老师的上课氛围，幽默风趣，大家都很积极回答问题，也可以学习到很多东西,喜欢老师的上课氛围，幽默风趣，大家都很积极回答问题，也可以学习到很多东西也可以学习到测试cease测试测试谔谔色",
        evatype: "response",
        showAllStatus: true,
      },
      {
        id: 2,
        evaTime: "2019年11月14日15:05",
        evaInfo: "喜欢老师的上课氛围，幽默风趣，大家都很积极回答问题，也可以学习到很多东西,喜欢老师的上课氛围，幽默风趣，大家都很积极回答问题，也可以学习到很多东西也可以学习到测试cease测试测试谔谔色",
        evatype: "response",
        showAllStatus: true,
      }, {
        id: 3,
        evaTime: "2019年11月16日22:05",
        evaInfo: "喜欢老师的上课氛围，幽默风趣，大家都很积极回答问题，也可以学习到很多东西,喜欢老师的上课氛围，幽默风趣，大家都很积极回答问题，也可以学习到很多东西也可以学习到测试cease测试测试谔谔色",
        evatype: "request",
        showAllStatus: true,
      }
      ],




    }


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    // let data = JSON.parse(option.data)
    // that.setData({
    //   evaluData: data
    // })
    let em = {}, emChar = that.data.emojiChar.split("-");
    let emojis = []
    that.data.emoji.forEach(function (v, i) {
      em = {
        char: emChar[i],
        emoji: "0x1f" + v
      };
      emojis.push(em)
    });
    that.setData({
      emojis: emojis
    })


    console.log(this.data.emojis[0].char + "1111")
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

  },
  bindTextAreaChange: function (e) {
    var that = this
    var value = e.detail.value,
      len = parseInt(value.length);
    if (len > that.data.noteMaxLen)
      return;
    that.setData({
      info: value,
      noteNowLen: len
    })

  },
  // 提交清空当前值
  bindSubmit: function () {
    var that = this;
    let showStatus = that.data.showStatus;
    let values = that.data.info;
    console.log(values + "记录1");
    let evaAry = that.data.newStudenteva
    evaAry.push({ evaInfo: values, showAllStatus: true })
    console.log(evaAry[0].evaInfo + "记录1");
    if (values === null || values == '') {
      wx.showToast({
        title: '回复不能为空',
        icon: 'none',
        duration: 1500,
        mask: false,
        success: function () {
          that.setData({
            info: '',
            noteNowLen: 0,
            flag: 0
          })

        }
      })

    } else {
      wx.showToast({
        title: '回复成功',
        icon: 'success',
        duration: 1500,
        mask: false,
        success: function () {
          that.setData({
            info: '',
            noteNowLen: 0,
            flag: 0,
            newStudenteva: evaAry,
            isShow: false,
            isLoad: false,
            cfBg: false
          })

        }
      })

    }




  },
  // 长按删除评论事件
  removeEvaHander(e) {
    let that = this;
    let index = e.currentTarget.dataset.index;
    let evaAry = that.data.newStudenteva
    wx.showModal({
      title: '提示',
      content: '确定要删除回复吗？',
      success: function (res) {
        if (res.confirm) {
          evaAry.splice(index, 1);
        } else if (res.cancel) {
          return false;
        }
        that.setData({
          newStudenteva: evaAry
        });
      }
    })
  },

  //文本域获得焦点事件处理
  textAreaFocus: function () {
    this.setData({
      isShow: false,
      cfBg: false
    })
  },
  //点击表情显示隐藏表情盒子
  emojiShowHide: function () {
    this.setData({
      isShow: !this.data.isShow,
      isLoad: false,
      cfBg: !this.data.false
    })
  },
  //表情选择
  emojiChoose: function (e) {
    //当前输入内容和表情合并
    this.setData({
      info: this.data.info + e.currentTarget.dataset.emoji
    })
  },
  //点击emoji背景遮罩隐藏emoji盒子
  cemojiCfBg: function () {
    this.setData({
      isShow: false,
      cfBg: false
    })
  },

  beiCourseHander(e) {
    let showStatus = e.currentTarget.dataset.showAll
    let that = this;
    that.setData({
      showAll: !this.data.showAll
    })
    console.log(1);
  },
  beiCourseHanders(e) {
    let showStatus = e.currentTarget.dataset.index
    let that = this;
    let status = 'classData.evaDate[' + showStatus + '].showAllStatus'
    that.setData({
      [status]: !that.data.classData.evaDate[showStatus].showAllStatus
    })
  },
  beiCourseHanderss(e) {
    let showStatus = e.currentTarget.dataset.index
    let that = this;
    let status = 'newStudenteva[' + showStatus + '].showAllStatus'
    that.setData({
      [status]: !that.data.newStudenteva[showStatus].showAllStatus
    })
    console.log(showStatus + "ss");
  },
  //删除原先评论
  olderEvaHander(e) {
    let index = e.currentTarget.dataset.index
    let evaArray = this.data.classData.evaDate
    let arry = 'classData.evaDate'
    let that = this;
    wx.showModal({
      title: '提示',
      content: '确定要删除回复吗？',
      success: function (res) {
        if (res.confirm) {
          evaArray.splice(index, 1);
        } else if (res.cancel) {
          return false;
        }
        that.setData({
          [arry]: evaArray
        });
      }
    })

  }
})