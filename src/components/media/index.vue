<!-- 媒体曝光分布图 -->
<template>
  <div class="chartBox">
    <span></span>
    <span></span>
    <span></span>
    <div id="myChart" :style="{ width: '500px', height: '400px' }"></div>
  </div>
</template>

<script>
export default {
  name: 'media',
  components: {},

  data () {
    return {
      option: {
        color: ['#60B8F1', '#5AE8F6', '#28D49F'],
        legend: {
          show: true,
          right: 10,
          bottom: 0,
          orient: 'vertical',
          data: [{ name: '网络媒体' }, '社交媒体', '传统媒体']
        },
        radar: {
          shape: 'polygon',//配置雷达图最外层的图形（多边形）
          splitNumber: 5, // 雷达图圈数设置
          startAngle: 60,//修改雷达图的形状
          name: {
            textStyle: {
              color: '#fff',//雷达图外的字体颜色
            }
          },
          axisLine: {//雷达图中间射线的颜色
            lineStyle: {
              color: '#215885',
            },
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['transparent', 'rgba(7,65,107,0.3)'//图表背景颜色
              ]
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: '#2E7DA7'//网格颜色
            }
          },
          indicator: [
            { name: '09/20', max: 6500 },
            { name: '09/21', max: 16000 },
            { name: '09/22', max: 30000 },
            { name: '09/23', max: 38000 },
            { name: '09/24', max: 52000 },
            { name: '09/25', max: 25000 }
          ]
        },
        series: [{
          name: '雷达图',
          type: 'radar',
          symbol: 'circle',//拐点样式
          symbolSize: 6,//拐点大小
          areaStyle: {  //拐点颜色
            width: 60,
            opacity: 0.4,
          },
          emphasis: {
            focus: 'series',
            blurScope: 'coordinateSystem'
          },

          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: '网络媒体',

            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: '社交媒体'
            },
            {
              value: [200, 3000, 4000, 5000, 6000, 7000],
              name: '传统媒体'
            }
          ]
        }]

      }
    };
  },

  mounted () {
    this.getRadar()
  },

  computed: {},

  methods: {
    //绘制雷达图
    getRadar () {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      window.onresize = myChart.resize;
      myChart.setOption(this.option)
    }
  }
}

</script>
<style lang='scss' scoped>
.lwy {
  color: transparent;
}
</style>