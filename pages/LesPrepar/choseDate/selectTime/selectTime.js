// pages/home/amtCourse/addTime/addTime.js
import {
  jump
} from '../../../../component/calendar/calendar2/main.js';



const conf = {

  /**
   * 页面的初始数据
   */
  data: {
    chocesDate:'',
    choseTime: { date: "", time: "" },
    jumpTips: "",
    calendarConfig: {
      multi: false, // 是否开启多选,
      theme: 'elegant', // 日历主题，目前共两款可选择，默认 default 及 elegant，自定义主题在 theme 文件夹扩展
      showLunar: false, // 是否显示农历，此配置会导致 setTodoLabels 中 showLabelAlways 配置失效
      inverse: true, // 单选模式下是否支持取消选中,
      chooseAreaMode: false, // 开启日期范围选择模式，该模式下只可选择时间段
      markToday: '今', // 当天日期展示不使用默认数字，用特殊文字标记
      defaultDay: true, // 默认选中指定某天；当为 boolean 值 true 时则默认选中当天，非真值则在初始化时不自动选中日期，
      highlightToday: true, // 是否高亮显示当天，区别于选中样式（初始化时当天高亮并不代表已选中当天）
      takeoverTap: false, // 是否完全接管日期点击事件（日期不会选中），配合 onTapDay() 使用
      preventSwipe: true, // 是否禁用日历滑动切换月份
      disablePastDay: true, // 是否禁选当天之前的日期
      disableLaterDay: false, // 是否禁选当天之后的日期
      firstDayOfWeek: 'Mon', // 每周第一天为周一还是周日，默认按周日开始
      onlyShowCurrentMonth: true, // 日历面板是否只显示本月日期
      hideHeadOnWeekMode: false, // 周视图模式是否隐藏日历头部
      showHandlerOnWeekMode: true, // 周视图模式是否显示日历头部操作栏，hideHeadOnWeekMode 优先级高于此配置
      selectionDate:0,
      currtenDate:0,
      toIndex:'',
    },
    atmDateTime: [{
      id: 1,
      timeSlot: "08:30-09:00",
      optional: false
    }, {
      id: 2,
      timeSlot: "09:30-10:00",
      optional: false
    }, {
      id: 3,
      timeSlot: "10:30-11:00",
      optional: true
    }, {
      id: 4,
      timeSlot: "11:30-12:00",
      optional: true
    }, {
      id: 5,
      timeSlot: "13:30-14:00",
      optional: true
    }, {
      id: 6,
      timeSlot: "14:30-16:00",
      optional: true
    }],
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this
    let parameterDate=options.amtDate;
    let selectionDates = 'calendarConfig.selectionDate';
    let currtenDates = 'calendarConfig.currtenDate';
    let toIndexs = 'calendarConfig.toIndex';
    let selesctDateArray = parameterDate.split("-");
    let day2 = new Date();
     day2.setTime(day2.getTime());
     let s2 =day2.getDate();
    console.log(s2)
    that.setData({
      chocesDate: parameterDate,
      [selectionDates]: selesctDateArray[2],
      [currtenDates]: s2,
      [toIndexs]: `a${selesctDateArray[2]-1}`
    }) 

    console.log(this.data.calendarConfig.toIndex)

    // 获取预约时间段

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // 将传递过来的参数，变成指定选定日期 
    let str = this.data.chocesDate
    let s = str.split("-");
    this.calendar.jump(s[0], s[1], s[2]).then(date => { }); 
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

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

  backHander: function() {

    let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
    let prevPage = pages[pages.length - 3];
  
    if (this.data.choseTime.date != '' && this.data.choseTime.time !='' ){

     
      let dateResult = this.data.choseTime.date  
      let  timeResult=this.data.choseTime.time
      prevPage.setData({  // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
        selectedDate: dateResult,
        selectedTime: timeResult
      })
      wx.navigateBack({
        delta: 2  // 返回2级页面。
      })
    }else{
      if (!this.data.choseTime.date != ''){
          this.setData({
            jumpTips:'请选择备课时间！'
          })
      }else{
        this.setData({
          jumpTips: '请选择备课时间段。'
        })
      }
      this.showModal();
    }

    



 
  },
  /**
   * 选择日期后执行的事件
   * currentSelect 当前点击的日期
   * allSelectedDays 选择的所有日期（当mulit为true时，allSelectedDays有值）
   */
  afterTapDay(e) {
    
    // 获取点击时间
    let date = e.detail.year + "-" + e.detail.month + "-" + e.detail.day
    console.log(date)
    let dates = 'choseTime.date';
    if (!e.detail.choosed){
      this.setData({
        [dates]: date
      })
    }else{
      this.setData({
        [dates]: ''
      })
    }

  },
  /**
   * 当日历滑动时触发(适用于周/月视图)
   * 可在滑动时按需在该方法内获取当前日历的一些数据
   */
  onSwipe(e) {
    console.log('onSwipe', e.detail);
    const dates = this.calendar.getCalendarDates();
  },
  /**
   * 当改变月份时触发
   * => current 当前年月 / next 切换后的年月
   */
  whenChangeMonth(e) {
    console.log('whenChangeMonth', e.detail);
    // => { current: { month: 3, ... }, next: { month: 4, ... }}
  },
  /**
   * 周视图下当改变周时触发
   * => current 当前周信息 / next 切换后周信息
   */
  whenChangeWeek(e) {
    console.log('whenChangeWeek', e.detail);
    // {
    //    current: { currentYM: {year: 2019, month: 1 }, dates: [{}] },
    //    next: { currentYM: {year: 2019, month: 1}, dates: [{}] },
    //    directionType: 'next_week'
    // }
  },
  /**
   * 日期点击事件（此事件会完全接管点击事件），需自定义配置 takeoverTap 值为真才能生效
   * currentSelect 当前点击的日期
   */
  onTapDay(e) {
    console.log('onTapDay', e.detail); // => { year: 2019, month: 12, day: 3, ...}
  },
  /**
   * 日历初次渲染完成后触发事件，如设置事件标记
   */
  afterCalendarRender(e) {
// 当前日期赋值给时间
    let date = 'choseTime.date';
    let that = this
    let selectedDay = that.calendar.getSelectedDay();
    let dates = selectedDay[0].year + "-" + selectedDay[0].month + "-" + selectedDay[0].day
    that.setData({
      [date]: dates,
    })

  },
  choseHander: function(e){
    let s = e.currentTarget.dataset.optional
    let index = e.currentTarget.dataset.index
    if(s){
      this.setData({
        key:  e.target.dataset.index
      })
    }
    // 选择的时间段 数组中的下标
    if(s){
      let date = 'choseTime.time';
      let time = this.data.atmDateTime[index].timeSlot
      this.setData({
          [date]:time
      })
    }

  },

  // 禁止屏幕滚动
  preventTouchMove: function () {
  },

  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function () {
    wx.showTabBar({
      animation: false
    });
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 0,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(0).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 0)
  },
}


Page(conf)