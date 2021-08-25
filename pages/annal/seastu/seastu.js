//获取应用实例
var app = getApp()
var wxaSortPicker = require('../../../utils/wxaSortPicker/wxaSortPicker.js');
Page({
  data: {},
  onLoad: function () {
    var that = this
    wxaSortPicker.init([{
      name: '马云',
      value: ''
    },
    {
      name: '马化腾',
      value: ''
    },
    {
      name: '许家印',
      value: ''
    },
    {
      name: '孙飘扬',
      value: ''
    },
    {
      name: '杨惠妍',
      value: ''
    },
    {
      name: '何享健',
      value: ''
    },
    {
      name: '黄峥',
      value: ''
    },
    {
      name: '丁磊',
      value: ''
    },
    {
      name: '秦英林',
      value: ''
    },
    {
      name: '张一鸣',
      value: ''
    },
    {
      name: '王卫',
      value: ''
    },
    {
      name: '李书福',
      value: ''
    },
    {
      name: '庞康',
      value: ''
    },
    {
      name: '王健林 ',
      value: ''
    },
    {
      name: '张志东',
      value: ''
    },
    ], that);
  },

  onShow: function () {
    var that = this
  },

  wxaSortPickerItemTap: function (e) {
    console.log(e.target.dataset.text);
    console.log(e.target.dataset.value);
  },
  stopTouchMove() {
    return false
  }
})