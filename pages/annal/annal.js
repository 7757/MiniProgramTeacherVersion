Page({

  /**
   * 页面的初始数据
   */
  data: {
    StudentAry: ['来忆凡', '王恒', '罗志祥', '贺赵杰', '张杰'],
    courseAry: ['全部课程', '初级语法课', '古代汉语', '奥数的秘密', '美术天地'],
    ClassAry: ['超级英语班', '超级美术班', '超级数学班', '超级钢笔班', '超级硬笔班'],
    SchoolAry: ['江宁校区', '玉华校区', '鼓楼校区', '安德玛校区', '铁心桥校区'],
    showDialog: false,
    selectedStudent: "学生",
    selectedStudents: null,
    selectedDate: "时间",
    selectedDates: null,
    selectedCourse: "课程",
    selectedCourses: null,
    selectedClasss: "班级",
    selectedClassss: null,
    selectedSchool: "校区",
    selectedSchools: null,
    selectedEvame: "新的评价",
    selectedRepoe: "评论回复",
    btnType: "",
    // 滑动隐藏控制器
    changeStatus: true,
    // 新的评价数
    conterCount: 0,
    //新的评价点击状态
    conterStatus: false,
    //评论回复
    reponse: 0,
    reponseStatus: false,
    // 脚印
    countClassHour: 0,

    // 课程对象
    teacherArray: [{
        id: 1,
        classTime: "2019年10月26日 9:30-10:30",
        className: "超级英语班",
        courseName: "初级语法课",
        schoolArea: "雨花安德门校区",
        classInfo: "课程介绍课程介绍课程介绍课程介绍课程介绍课绍课程介绍课程…",
        calssEvaluate: "在家长的评价中，区别每个孩子的不同，提升课 程效果，让课堂充满温度。 ",
        classRepone: "及时反馈学生课堂表现，父母更好安排孩子的每 一天。",
        teacherName: "张老师",
        classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
        entryTime: 2018,
        teachingAgeA: 5,
        evaluateRespone: 2,
        // 回复状态
        courseReponse:false
      },
      {
        id: 2,
        classTime: "2019年9月26日 9:30-10:30",
        courseName: "初级语法课",
        className: "超级英语班",
        schoolArea: "鼓楼三牌楼校区",
        classInfo: "课程介绍课程介绍课程介绍课程介绍课程介绍课绍课程介绍课程…",
        calssEvaluate: "在家长的评价中，区别每个孩子的不同，提升课 程效果，让课堂充满温度。 ",
        classRepone: "及时反馈学生课堂表现，父母更好安排孩子的每 一天。",
        teacherName: "李老师",
        classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
        entryTime: 2013,
        teachingAgeA: 5,
        achievement: 89,
        ranking: 27,
        evaluateRespone: 0,
         courseReponse: false
      },
      {
        id: 3,
        classTime: "2019年11月26日 9:30-10:30",
        courseName: "初级语法课",
        className: "超级英语班",
        schoolArea: "江宁景枫校区",
        classInfo: "课程介绍课程介绍课程介绍课程介绍课程介绍课绍课程介绍课程…",
        calssEvaluate: "在家长的评价中，区别每个孩子的不同，提升课 程效果，让课堂充满温度。 ",
        classRepone: "及时反馈学生课堂表现，父母更好安排孩子的每 一天。",
        teacherName: "来老师",
        classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
        entryTime: 2020,
        teachingAgeA: 5,
        achievement: 89,
        ranking: 16,
        evaluateRespone: 1,
        courseReponse: false
      }, {
        id: 4,
        classTime: "2019年10月26日 9:30-10:30",
        courseName: "初级语法课",
        className: "超级英语班",
        schoolArea: "雨花安德门校区",
        classInfo: "课程介绍课程介绍课程介绍课程介绍课程介绍课绍课程介绍课程…",
        calssEvaluate: "在家长的评价中，区别每个孩子的不同，提升课 程效果，让课堂充满温度。 ",
        classRepone: "及时反馈学生课堂表现，父母更好安排孩子的每 一天。",
        teacherName: "张老师",
        classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
        entryTime: 2018,
        teachingAgeA: 5,
        achievement: 89,
        ranking: 15,
        evaluateRespone: 2,
        courseReponse: false
      },
      {
        id: 5,
        classTime: "2019年9月26日 9:30-10:30",
        courseName: "初级语法课",
        schoolArea: "鼓楼三牌楼校区",
        className: "超级英语班",
        classInfo: "课程介绍课程介绍课程介绍课程介绍课程介绍课绍课程介绍课程…",
        calssEvaluate: "在家长的评价中，区别每个孩子的不同，提升课 程效果，让课堂充满温度。 ",
        classRepone: "及时反馈学生课堂表现，父母更好安排孩子的每 一天。",
        teacherName: "李老师",
        classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
        entryTime: 2013,
        teachingAgeA: 5,
        achievement: 89,
        ranking: 27,
        evaluateRespone: 0,
        courseReponse: false
      },
      {
        id: 6,
        classTime: "2019年11月26日 9:30-10:30",
        courseName: "初级语法课",
        schoolArea: "江宁景枫校区",
        className: "超级英语班",
        classInfo: "课程介绍课程介绍课程介绍课程介绍课程介绍课绍课程介绍课程…",
        calssEvaluate: "在家长的评价中，区别每个孩子的不同，提升课 程效果，让课堂充满温度。 ",
        classRepone: "及时反馈学生课堂表现，父母更好安排孩子的每 一天。",
        teacherName: "来老师",
        classTeacherHead: "https://sappbkt.oss-cn-shanghai.aliyuncs.com/home/heards.jpg",
        entryTime: 2020,
        teachingAgeA: 5,
        achievement: 89,
        ranking: 16,
        evaluateRespone: 1,
        courseReponse: false
      },

    ]


  },
  openDialog: function() {
    this.setData({
      istrue: true
    })
  },
  closeDialog: function() {
    this.setData({
      istrue: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let num = this.data.teacherArray;
    //新的评价数
    let conter = num.reduce(function(valuer, n) {
      return valuer + n.evaluateRespone;
    }, 0)

    //评论恢复

    //脚印

    this.setData({
      countClassHour: num.length,
      conterCount: conter,
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
  seastu: function() {
    wx.navigateTo({
      url: '../annal/seastu/seastu',
    })
  },
  period: function() {
    wx.navigateTo({
      url: '../annal/period/period',
    })
  },
  newpl: function(e) {
    let result = e.currentTarget.dataset.coutn;
    if (result > 0) {
      wx.navigateTo({
        url: '../annal/evalu/evalu',
      })
    }

  },
  ketang: function(e) {
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../annal/feedback/feedback?index=' + index,
    })
  },
  // 点击学生处理函数
  allStudentHander(e) {
    let that = this
    if (e.currentTarget.dataset.type === 'StudentType') {
      this.setData({
        istrueStudent: true,
        btnType: e.currentTarget.dataset.type
      })
    }
  },
  closeLayerStudent: function() {
    this.setData({
      istrueStudent: false
    })
    wx.showTabBar({
      aniamtion: true
    })
  },


  // 点击时间处理函数
  dateHander(e) {
    wx.navigateTo({
      url: '/pages/LesPrepar/choseDate/choseDate',
    })
  },

  // 点击课程处理函数
  allCourseHander(e) {
    let that = this
    if (e.currentTarget.dataset.type === 'courseType') {
      this.setData({
        istrueCourse: true,
        btnType: e.currentTarget.dataset.type
      })
    }
  },
  closeLayerCourse: function() {
    this.setData({
      istrueCourse: false
    })
    wx.showTabBar({
      aniamtion: true
    })
  },
  

  // 点击班级处理函数
  allClassHander(e) {
    let that = this
    if (e.currentTarget.dataset.type === 'ClasssType') {
      this.setData({
        istrueClass: true,
        btnType: e.currentTarget.dataset.type
      })
    }
  },
  closeLayerClass: function() {
    this.setData({
      istrueClass: false
    })
    wx.showTabBar({
      aniamtion: true
    })
  },
  
  // 点击校区处理函数
  allShoolHander(e) {
    let that = this
    if (e.currentTarget.dataset.type === 'schoolType') {
      this.setData({
        istrueSchool: true,
        btnType: e.currentTarget.dataset.type
      })
    }
  },
  closeLayerSchool: function() {
    this.setData({
      istrueSchool: false
    })
    wx.showTabBar({
      aniamtion: true
    })
  },
  
  // 点击新的评价处理函数
  allEvameHander(e) {
    let conterStatuss = this.data.conterStatus;

    if (e.currentTarget.dataset.type === 'EvameType') {
      this.setData({
        conterStatus: !conterStatuss,
      })
    }


  },
  // 点击评论回复处理函数
  allRepoeHander(e) {
    let reponseStatuss = this.data.reponseStatus;

    if (e.currentTarget.dataset.type === 'RepoeType') {
      this.setData({
        reponseStatus: !reponseStatuss,
      })
    }

  },
  // 选择事件
  choseItem: function(e) {
    let value = e.detail.value;
    if (this.data.btnType === 'courseType') {
      this.setData({
        selectedCourses: value
      })
    } else if (this.data.btnType === 'schoolType') {
      this.setData({
        selectedSchools: value
      })
    } else if (this.data.btnType === 'StudentType') {
      this.setData({
        selectedStudents: value
      })
    } else if (this.data.btnType === 'ClasssType') {
      this.setData({
        selectedClassss: value
      })
    }
  },
  // 点击x处理函数
  removeHander(e) {

    let that = this
    if (e.currentTarget.dataset.type === 'studentType') {
     
      that.setData({
        selectedStudent: '学生'
      })
    } else if (e.currentTarget.dataset.type === 'dateType') {
      that.setData({
        selectedDate: '时间'
      })
    } else if (e.currentTarget.dataset.type === 'courseType') {
      that.setData({
        selectedCourse: '课程'
      })
    } else if (e.currentTarget.dataset.type === 'classsType') {
      that.setData({
        selectedClasss: '班级'
      })
    } else if (e.currentTarget.dataset.type === 'schoolType') {
      that.setData({
        selectedSchool: '校区'
      })
    }
  },
  determineHander(e) {
    // 学生
    let selectedStudents = this.data.selectedStudents;
    // 课程
    let selectedCourses = this.data.selectedCourses;
    //班级
    let selectedClassss = this.data.selectedClassss;
    //校区
    let selectedSchools = this.data.selectedSchools;
    let than = this;
    if (e.currentTarget.dataset.type === 'Student') {
      than.closeLayerStudent(); 
      console.log(11111)
      if (selectedStudents == null || selectedStudents == "") {
        than.setData({
          selectedStudent: '学生'
        })
      } else {
        than.setData({
          selectedStudent: selectedStudents
        })
      }

    } else if (e.currentTarget.dataset.type === 'Course') {
      than.closeLayerCourse();
      if (selectedCourses == null) {
        than.setData({
          selectedCourse: '课程'
        })
      } else {
        than.setData({
          selectedCourse: selectedCourses
        })
      }

    } else if (e.currentTarget.dataset.type === 'Class') {
      than.closeLayerClass();
      if (selectedClassss == null) {
        than.setData({
          selectedClasss: '班级'
        })
      } else {
        than.setData({
          selectedClasss: selectedClassss
        })
      }

    } else if (e.currentTarget.dataset.type === 'School') {
      than.closeLayerSchool();
      if (selectedSchools == null) {
        than.setData({
          selectedSchool: '校区'
        })
      } else {
        than.setData({
          selectedSchool: selectedSchools
        })
      }

    }

  },















  //监听屏幕滚动 判断上下滚动
  onPageScroll: function(ev) {
    var _this = this;
    //当滚动的top值最大或最小时，为什么要做这一步是因为在手机实测小程序的时候会发生滚动条回弹，所以为了处理回弹，设置默认最大最小值
    if (ev.scrollTop <= 0) {
      ev.scrollTop = 0;
    } else if (ev.scrollTop > wx.getSystemInfoSync().windowHeight) {
      ev.scrollTop = wx.getSystemInfoSync().windowHeight;
    }
    //判断浏览器滚动条上下滚动
    if (ev.scrollTop > this.data.scrollTop || ev.scrollTop == wx.getSystemInfoSync().windowHeight) {
      this.setData({
        changeStatus: false
      })
    } else {
      this.setData({
        changeStatus: true
      })
    }
    setTimeout(function() {
      _this.setData({
        scrollTop: ev.scrollTop
      })
    }, 0)
  },


   


})