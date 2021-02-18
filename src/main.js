var myChart = echarts.init(document.getElementById('skills'));

var option = {
  tooltip: {},
  radar: {
    // shape: 'circle',
    name: {
      textStyle: {
        color: '#fff',
        backgroundColor: '#999',
        borderRadius: 3,
        padding: [3, 5]
      }
    },
    indicator: [
      { name: '静态页面', max: 100},
      { name: '编程基础', max: 100},
      { name: 'Vue', max: 100},
      { name: 'React', max: 100},
      { name: '项目开发', max: 100},
      { name: '沟通能力', max: 100}
    ]
  },
  series: [{
    name: 'ability',
    type: 'radar',
    // areaStyle: {normal: {}},
    data: [
      {
        value: [90, 70, 80, 65, 70, 85],
        name: '能力'
      }
    ]
  }]
};

myChart.setOption(option);
