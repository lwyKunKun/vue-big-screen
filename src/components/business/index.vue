<!-- 业务板块舆情图表 -->
<template>
  <div class="chartBox">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <div id="business" class="chartSize"></div>
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
          itemHeight: this.$fontSize(0.14),
          itemWidth: this.$fontSize(0.14),
          left: '70%',
          orient: 'horizontal',//水平布局
          itemGap: this.$fontSize(0.2),
          padding: [30, 10, 0, 0],    // [5, 10, 15, 20]
          textStyle: {
            color: '#fff',
            fontSize: this.$fontSize(0.16),
            fontWeight: 700
          }

        },
        grid: {
          left: '3%',
          bottom: '10%',
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
              color: '#fff',
              fontSize: this.$fontSize(0.16),
            }
          },
          axisLine: {
            lineStyle: {
              width: this.$fontSize(0.01),//坐标线的宽度
              color: '#fff',
            },
          },
          axisTick: {//刻度线朝上
            inside: true,
            width: this.$fontSize(0.4)
          },
        },
        yAxis: {
          type: 'category',
          axisLabel: {
            textStyle: {
              color: '#fff'
            },
            fontSize: this.$fontSize(0.2),
            fontWeight: 700,
          },
          axisLine: {
            show: false,

          },
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
              fontSize: this.$fontSize(0.2),
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
              fontSize: this.$fontSize(0.2),
              formatter: (data) => {
                return data.data.toLocaleString('en-US')

              }
            },
          },

        ]

      },
      chart: ''

    };
  },

  mounted () {
    this.getBarChart()
    this.resize(this.chart)

  },
  activated () {
    this.getBarChart()
    this.resize(this.chart)
  },
  deactivated () {
    this.getBarChart()
    this.resize(this.chart)

  },


  computed: {},

  methods: {
    //绘制条形图
    getBarChart () {
      let myChart = this.$echarts.init(document.getElementById('business'))
      this.chart = myChart
      myChart.setOption(this.option)

    },
    //监听
    resize (option) {
      const that = this;
      window.addEventListener('resize', () => {
        this.getBarChart();
        option.resize();
        // option.clear();
      })

    },
    debounce (fn, delay) {
      let timer = null;
      return () => {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          fn()
        }, delay)
      }

    }
  }
}

</script>
<style lang='scss' scoped>
</style>