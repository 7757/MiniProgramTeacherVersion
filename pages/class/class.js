import * as echarts from '../ec-canvas/echarts';

const app = getApp();
//存放初始数据,因为初始化方法不能给page中data赋值,所以设置了个全局的数组存放数据
var dayArry = [0, 0, 0, 0, 0, 0, 0];
var chart;

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    color: ["#54C337", "#33D5D1"],
    legend: {
      data: ['课时', '排名'],
      top: 10,
      right: '10%',
      z: 100
    },
    grid: {
      containLabel: true,
      show: false
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      position: ['50%', '50%'],
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    xAxis: {
      splitLine: {
        show: false
      }, //是否去除网格线
      splitArea: {
        show: false
      }, //是否去除网格区域
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisPointer: {
        show: true
      },
      type: 'category',
      boundaryGap: true,
      data: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '1.10', '1.11', '1.12', '1.13', '1.14', '1.15', '1.16', '1.17', '1.18', '1.19', '1.20', '1.21', '1.22', '1.23', '1.24', '1.25', '1.26', '1.27', '1.28', '1.29', '1.30', '1.31'],
      show: false //是否显示 x 轴。
    },
    yAxis: {
      splitLine: {
        show: false //去除网格线
      },
      axisTick: {
        show: false //y轴刻度线
      },
      axisLine: {
        show: false, //是否显示轴线
        lineStyle: {
          color: "#777777",
        }
      },
      type: 'value',
      show: false //是否显示 Y 轴。
    },
    series: [{
        symbol: "none",
        name: '课时',
        type: 'line',
        smooth: true,
        data: [3, 6, 5, 4, 7, 9, 8, 9, 5, 7, 6, 4, 6, 9, 5, 7, 6, 4, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
      },
      {
        symbol: "none",
        name: '排名',
        type: 'line',
        smooth: true,
        data: [3, 6, 5, 4, 7, 9, 8, 9, 5, 7, 6, 4, 6, 9, 5, 7, 6, 4, 1, 2, 4, 2, 6, 8, 6, 3, 2, 4, 5, 3, 2]
      }
    ]
  };

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function(res) {
    return {
      title: '',
      path: '/pages/class/class',
      success: function() {},
      fail: function() {}
    }
  },
  data: {
    ec: {
      onInit: initChart
    },
    selectedDate: "时间",
    selectedDates: null,
    selectedCourse: "课程",
    selectedCourses: null,
    selectedSchool: "校区",
    selectedSchools: null,
    selectedClasss: "班级",
    selectedClassss: null,
    btnType: "",
    courseAry: ['全部课程', '初级语法课', '古代汉语', '奥数的秘密', '美术天地'],
    ClassAry: ['超级英语班', '超级美术班', '超级数学班', '超级钢笔班', '超级硬笔班'],
    SchoolAry: ['全部校区','江宁校区', '玉华校区', '鼓楼校区', '安德玛校区', '铁心桥校区'],
    showStatus:false,
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
      that.setData({
        istrueCourse: true,
        showStatus:true,
        btnType: e.currentTarget.dataset.type
      })
  
    }
  },
  closeLayerCourse: function () {
    this.setData({
      istrueCourse: false,
      showStatus: false,
      imgSrc: '',
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
        showStatus: true,
        btnType: e.currentTarget.dataset.type
      })
    }
  },
  closeLayerSchool: function () {
    this.setData({
      istrueSchool: false,
        showStatus: false,
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
        showStatus: true,
        istrueClass: true,
        btnType: e.currentTarget.dataset.type
      })
    }
  },
  closeLayerClass: function () {
    this.setData({
      istrueClass: false,
        showStatus: false,
    })
    wx.showTabBar({
      aniamtion: true
    })
  },
// 选择事件
  choseItem: function (e) {
    let value = e.detail.value;
    if (this.data.btnType === 'courseType') {
      this.setData({
        selectedCourses: value
      })
    } else if (this.data.btnType === 'schoolType') {
      this.setData({
        selectedSchools: value
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
   if (e.currentTarget.dataset.type === 'dateType') {
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

    // 课程
    let selectedCourses = this.data.selectedCourses;
    //班级
    let selectedClassss = this.data.selectedClassss;
    //校区
    let selectedSchools = this.data.selectedSchools;
    let than = this;
     if (e.currentTarget.dataset.type === 'Course') {
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


  onReady() {}
});