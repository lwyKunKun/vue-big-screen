<!-- 业务板块舆情图表 -->
<template>
  <div class="chartBox">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <div id="business" :style="{ width: '500px', height: '400px' }"></div>
  </div>
</template>

<script>
export default {
  name: 'business',
  components: {},

  data () {
    return {
      option: {
        color: ['#DC944A', '#4FBEFD'],
        legend: {
          data: ['正面', '负面'],
          icon: 'Rect',
          itemHeight: 12,
          itemWidth: 12,
          left: '70%',
          orient: 'horizontal',
          textStyle: {
            color: '#fff'
          }

        },
        grid: {
          left: '3%',
          bottom: '3%',
          containLabel: true,//设置自适应画布大小状态为开，也可通过设置left左移实现相同效果。
        },
        xAxis: {
          type: 'value',
          boundaryGap: true,
          splitLine: {//去除网格线
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#fff',
              join: 'miter'
            },
          },
          axisTick: {//刻度线朝上
            inside: true
          },
          //   min: -500,
          //   max: 3000
        },
        yAxis: {
          type: 'category',
          axisLabel: {
            textStyle: {
              color: '#fff'
            },
            fontSize: 20,
          },
          axisLine: {
            show: false,

          },
          boundaryGap: [0.1, 0.1],
          data: ['集团', '保险', '投资', '银行']
        },
        series: [
          {
            name: '负面',
            type: 'bar',
            stack: '总量',//堆叠
            // barWidth: 25,//柱图宽度
            barGap: '-50%',
            barCategoryGap: 50,
            label: {
              show: true,
              position: 'left',
              fontWeight: 'bolder',
              fontSize: 20,
              formatter: (data) => {
                return (Math.abs(data.data)).toLocaleString('en-US')
              },

            },
            data: [-102, -58, -100, -97],

          },
          {
            name: '正面',
            type: 'bar',
            stack: '总量',//堆叠
            data: [2443, 1766, 789, 1890],
            // barWidth: 25,//柱图宽度
            barGap: '-50%',
            barCategoryGap: 50,
            label: {
              show: true,
              position: 'right',
              fontWeight: 'bolder',
              fontSize: 20,
              formatter: (data) => {
                return data.data.toLocaleString('en-US')

              }
            },
          },

        ]

      }
    };
  },

  mounted () {
    this.getBarChart()
  },

  computed: {},

  methods: {
    //绘制条形图
    getBarChart () {
      let myChart = this.$echarts.init(document.getElementById('business'))
      window.onresize = myChart.resize;
      myChart.setOption(this.option)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>