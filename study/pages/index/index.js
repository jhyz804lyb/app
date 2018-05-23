
//index.js
//获取应用实例
const app = getApp()
var echart = require('../common/echarts.js');
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var option = {
    title: {
      text: '全品类：￥1200.00',
      x: 'center',
      textStyle: {
        fontSize: common.fontSize(4),
        color: '#010101',
        textAligen: 'left'
      },
      bottom: common.fontSize(-1)
    },
    backgroundColor: "#ffffff",
    color: ["#4C4C4C", "#07509D", "#999999", "#CCCCCC"],
    series: [{
      startAngle: -30,
      label: {
        normal: {
          fontSize: 12
        }
      },
      type: 'pie',
      center: ['50%', '50%'],
      data: [{
        value: 35,
        name: 'p2'
      }, {
        value: 30,
        name: 'p1'
      }, {
        value: 20,
        name: 'p3'
      }, {
        value: 10,
        name: 'p4'
      }
      ],
      "label": {
        "fontSize": common.fontSize(4),
        "show": true,
        "position": "inside",
        "formatter": function (param) {
          for (var i = 0; i < option.series[0].data.length; i++) {
            if (option.series[0].data[i].name == param.name)
              return option.series[0].data[i].value + '{a|%}';
          }
          return "";
        }
        ,
        "rich": {
          "a": {
            "color": "white",
            "lineHeight": 20,
            "fontSize": 5
          }
        }
      },
      labelLine: { show: false },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 2, 2, 0.3)'
        }
      }
    }]
  };
  chart.setOption(option);
  return chart;
}

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    pie: {
      onInit: echart.initPie
    },
    line: { onInit: echart.initLine},
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
