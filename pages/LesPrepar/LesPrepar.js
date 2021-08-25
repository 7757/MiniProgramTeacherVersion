  // pages/LesPrepar/LesPrepar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 按钮选中状态 allCourseStatus-默认选中  dateStatus-默认未选择  allShoolStatus-默认未中
    teacherName:'傅鹏',
    courseAry: ['全部课程','初级语法课','古代汉语','奥数的秘密','美术天地'],
    schoolAry: ['全部校区','江宁景峰校区','宁南铁心桥校区','鼓楼夫子庙校区'],
    ClassAry: ['超级英语班', '超级美术班', '超级数学班', '超级钢笔班', '超级硬笔班'],
    selectedCourse:'课程',
    selectedCourses:null,
    selectedSchool: '校区',
    selectedSchools:null,
    selectedDate: '时间',
    selectedTime: '全部',
    scroll_height:null,
    selectedClasss: "班级",
    selectedClassss: null,
    course :[
      { courseId:1,
        courseName:'初级语法课',
        courseDate:'2019年11月26日',
        courseTime: '9:30-10:30',
        schoolName:'江宁景枫校区 A-301',
        className: '超级英语班',
        lesPreparInfo:'',
        lesPreparTips:'课程备课',
        //签到人
        attMent:[],
        //离校人
        leavSchool:''
    },
    {
      courseId: 2,
      courseName: '初级语法课',
      courseDate: '2019年11月26日',
      courseTime: '9:30-10:30',
      schoolName: '江宁景枫校区 A-301',
      className: '超级英语班',
      lesPreparInfo: '备课具体内容备课具体内容备课具体内容备课具 体内容备课具体内容备课具体内容备课具体内容 备课具体内容备…',
      lesPreparTips: '查看并修改备课内容',
      //签到人
      attMent:[],
      //离校人
      leavSchool: ''
      }, {
        courseId: 3,
        courseName: '初级语法课',
        courseDate: '2019年11月26日',
        courseTime: '9:30-10:30',
        schoolName: '江宁景枫校区 A-301',
        lesPreparInfo: '',
      className: '超级英语班',
        lesPreparTips: '课程备课',
      //签到人
      attMent:[],
      //离校人
      leavSchool: []
      },
      {
        courseId: 4,
        courseName: '初级语法课',
        courseDate: '2019年11月26日',
        courseTime: '9:30-10:30',
        schoolName: '江宁景枫校区 A-301',
        lesPreparInfo: '',
        lesPreparTips: '课程备课',
        className: '超级英语班',
        //签到人
        attMent:[],
        //离校人
        leavSchool: []
      },
      {
        courseId: 5,
        courseName: '初级语法课',
        courseDate: '2019年11月26日',
        courseTime: '9:30-10:30',
        schoolName: '江宁景枫校区 A-301',
        lesPreparInfo: '',
        className: '超级英语班',
        lesPreparTips: '课程备课',
        //签到人
        attMent:[],
        //离校人
        leavSchool: []
      },
      {
        courseId: 6,
        courseName: '初级语法课',
        courseDate: '2019年11月26日',
        courseTime: '9:30-10:30',
        schoolName: '江宁景枫校区 A-301',
        lesPreparInfo: '',
        lesPreparTips: '课程备课',
        className: '超级英语班',
        //签到人
        attMent:[],
        //离校人
        leavSchool: []
      },
    
    ],
    btnType:'',
    scrollTop:0,
    // 下拉隐藏
    changeStatus:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let windowHeight = wx.getSystemInfoSync().windowHeight // 屏幕的高度  
    let windowWidth = wx.getSystemInfoSync().windowWidth // 屏幕的宽度
    this.setData({
      scroll_height: windowHeight * 750 / windowWidth -232-30-130

    })
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
  // 课程事件处理函数
  allCourseHander: function(e) {
    let that = this
    if (e.currentTarget.dataset.type ==='courseType'){
      this.setData({
        istrues: true,
        btnType: e.currentTarget.dataset.type
      })
    }
  },

  // 班级处理函数
  allClassHander: function (e) {
    let that = this
    if (e.currentTarget.dataset.type === 'ClasssType') {
      this.setData({
        istruess: true,
        btnType: e.currentTarget.dataset.type
      })
    }
  },


  // 日期事件处理函数
  dateHander: function(e) {
    wx.navigateTo({
      url: '/pages/LesPrepar/choseDate/choseDate'
    })

  
  },
  // 校区事件处理函数
  allShoolHander: function(e) {
    if (e.currentTarget.dataset.type === 'schoolType') {
      this.setData({
        istrue: true,
        btnType: e.currentTarget.dataset.type
      })
    }

  },
  // 关闭遮罩1
  closeLayer1: function () {
    this.setData({
      istrues: false
    })
    wx.showTabBar({
      aniamtion: true
    })
  },

  // 关闭遮罩2
  closeLayer2: function () {
    this.setData({
      istrue: false
    })
    wx.showTabBar({
      aniamtion: true
    })
  },

  // 关闭遮罩3
  closeLayer3: function () {
    this.setData({
      istruess: false
    })
    wx.showTabBar({
      aniamtion: true
    })
  },

  // 确定事件处理函数
  determineHander1: function (e) {
    this.closeLayer1();
  },
  determineHander2: function (e) {
    this.closeLayer2();
  },
  determineHander3: function (e) {
    this.closeLayer3();
  },

 

// 点击x处理函数
  removeHander(e) {
    let that = this
    if (e.currentTarget.dataset.type === 'courseType') {
      this.setData({
        selectedCourse: '课程'
      })
    } else if (e.currentTarget.dataset.type === 'dataType'){
      this.setData({
        selectedDate: '时间'
      })
    } else if (e.currentTarget.dataset.type === 'schoolType'){
      this.setData({
        selectedSchool: '校区'
      })
    } else if (e.currentTarget.dataset.type === 'ClasssType') {
      this.setData({
        selectedClasss: '班级'
      })
    }
  },

  // 选择事件
  choseItem: function (e) {
    let value = e.detail.value;
    let than=this;
    if (than.data.btnType === 'courseType') {
      than.setData({
        selectedCourses: value
      })
    } else if (than.data.btnType === 'schoolType') {
      than.setData({
        selectedSchools: value
      })
    } else if (than.data.btnType === 'ClasssType') {
      than.setData({
        selectedClassss: value
      })
    }
   

   
  },
  determineHander(e){
    let selectedCoursess = this.data.selectedCourses;
    let selectedSchools = this.data.selectedSchools;
    let selectedClassss = this.data.selectedClassss;
    let than=this;
    if (e.currentTarget.dataset.type === 'courseType') {
      than.closeLayer1();
      if (selectedCoursess == null || selectedCoursess==""){
        than.setData({
          selectedCourse: '课程'
        })
      }else{
        than.setData({
          selectedCourse: selectedCoursess
        })
      }
     
    } else if (e.currentTarget.dataset.type === 'schoolType') {
      than.closeLayer2();
      if (selectedSchools == null) {
        than.setData({
          selectedCourse: '校区'
        })
      } else {
        than.setData({
          selectedSchool: selectedSchools
        })
      }
     
    } else if (e.currentTarget.dataset.type === 'classsType') {
      than.closeLayer3();
      if (selectedClassss == null) {
        than.setData({
          selectedClassss: '班级'
        })
      } else {
        than.setData({
          selectedClasss: selectedClassss
        })
      }

    }
  },

  beiCourseHander:function(e){
   
    let lesInfoDetails=e.currentTarget.dataset.less;
    if (e.currentTarget.dataset.less===''){
      wx.navigateTo({
        url:  `/pages/LesPrepar/lesInfo/lesInfo?`,
      })
    }else{
      wx.navigateTo({
        url: '/pages/LesPrepar/lesInfo/lesInfo?lesInfoDetails=' + lesInfoDetails,
      })
    }

  },
  //签到管理处理函数
  attMentHander:function(e){
    let index=e.currentTarget.dataset.index;


    let attMent = this.data.course[index].attMent
    var leavlSchool = JSON.stringify(attMent);
    wx.navigateTo({
      url: '/pages/LesPrepar/attMent/attMent?index=' + index + '&leavlSchool=' + leavlSchool
    })
  },
  //离校管理处理函数
  leavSchoolHander:function(e){
    let index = e.currentTarget.dataset.index;
    let attMent=this.data.course[index].attMent
    let levaPeople = this.data.course[index].leavSchool
    var leavlSchool=JSON.stringify(attMent);
    var leavlSchoolPeople = JSON.stringify(levaPeople);
    wx.navigateTo({
      url: '/pages/LesPrepar/leavSchool/leavSchool?index=' + index + '&leavlSchool=' + leavlSchool + '&leavlSchoolPeople='+leavlSchoolPeople,
    })
  },
 
 

  //监听屏幕滚动 判断上下滚动
  onPageScroll: function (ev) {
    var _this = this;
    //当滚动的top值最大或最小时，为什么要做这一步是因为在手机实测小程序的时候会发生滚动条回弹，所以为了处理回弹，设置默认最大最小值
    if (ev.scrollTop <= 0) {
      ev.scrollTop = 0;
    } else if (ev.scrollTop > wx.getSystemInfoSync().windowHeight) {
      ev.scrollTop = wx.getSystemInfoSync().windowHeight;
    }
    //判断浏览器滚动条上下滚动
    if (ev.scrollTop > this.data.scrollTop || ev.scrollTop == wx.getSystemInfoSync().windowHeight) {
      this.setData({ changeStatus: false })
      //向下滚动
    } else {
      //向上滚动
      this.setData({ changeStatus: true })
    }
    //给scrollTop重新赋值
    setTimeout(function () {
      _this.setData({
        scrollTop: ev.scrollTop
      })
    }, 0)},



  
})