import * as echarts from '../../ec-canvas/echarts';
var common = require('../common/common.js');
function initPie(canvas, width, height) {
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
      bottom: common.fontSize(1) * -1
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

function initLine(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var option = {
    grid: {
      left: '12%',
      bottom: common.fontSize(10),
      top: common.fontSize(10)
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}'
    },
    yAxis: {
      scale: true,
      show: true,
      splitNumber: 3,
      splitLine: {

        lineStyle: {
          type: 'solid',
          opacity: 0.1
        }
      },
      axisTick: {
        show: false
      },
      nameTextStyle: { fontWeight: 400 },
      type: 'value',
      data: [],
      axisLine: { show: false },
      //axisPointer: { show: true, type: 'shadow' },
      axisLabel: {
        show: true,
        formatter: "{value}{mini|%}",
        rich: {
          mini: {
            fontSize: common.fontSize(3, 7),
            verticalAlign: 'bottom'
          }
        },
        fontSize: common.fontSize(6, 14),
        color: '#7E7E7E',
      },
    }, xAxis: {
      lineStyle: {show:false, type: 'solid' },
      axisTick: {
        show: true,
        length: 0
      },
      type: 'category',
      boundaryGap: true,
      data: ['3-10', '3-10', '3-10', '3-10', '3-10', '3-15']

    },
    series: [
      {
        itemStyle: {},
        color: '#075097',
        name: '最低气温',
        type: 'line',
        data: [{ symbol: 'circle', symbolSize: 5, value: 10 }, { symbol: 'circle', symbolSize: 5, value: 15 }, { symbol: 'circle', symbolSize: 5, value: 4 }, { symbol: 'circle', symbolSize: 5, value: 8 }, { symbol: 'circle', symbolSize: 5, value: 9 }, { symbol: 'circle', symbolSize: 5, value: 18 }],
        markLine: {
          data: [
          ]
        }
      }
    ]
  };
  chart.setOption(option);

  return chart;
}

module.exports = {
  initPie: initPie,
  initLine: initLine
};