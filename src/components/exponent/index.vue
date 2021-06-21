<!-- 指数图表 -->
<template>
  <div class="chartBox">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <div id="lineChart" class="chartSize"></div>
  </div>
</template>

<script>
import { resize } from '@/assets/js/utils'
export default {
  name: 'exponent',
  components: {},

  data () {
    return {
      chart: '',
    };
  },

  mounted () {
    this.init()
    resize(this.init, this.chart);
  },
  activated () {
    this.init()
    resize(this.init, this.chart);
  },
  deactivated () {
    this.init()
    resize(this.init, this.chart);

  },

  computed: {},

  methods: {
    //绘制折线图
    init () {
      let myChart = this.$echarts.init(document.getElementById('lineChart'))
      this.chart = myChart;
      let option = {
        color: ['#4FBBFC', '#58E2EF', '#05D79A', '#D2E12E', '#E49E48'],
        legend: {
          show: true,
          data: ['中国平安', '中国人寿', '招商银行', '中国人保', '中信'],
          icon: 'Rect',
          itemWidth: this.$fontSize(0.25),
          itemHeight: this.$fontSize(0.05),
          textStyle: {
            color: '#fff',
            fontSize: this.$fontSize(0.12)
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '7%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          splitLine: {//去除网格线
            show: false
          },
          data: ['09/10', '09/12', '09/14', '09/16', '09/18', '09/20', '09/22', '09/24'],
          axisLabel: {
            textStyle: {
              color: '#fff',
              fontSize: this.$fontSize(0.14)
            }
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#fff',//左边线的颜色
              width: this.$fontSize(0.01)//坐标线的宽度
            }
          },
          axisTick: {//刻度线朝上
            inside: true
          },
        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 60000,
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#fff',//左边线的颜色
              width: this.$fontSize(0.01)//坐标线的宽度
            }
          },
          axisLabel: {
            textStyle: {
              color: '#fff',
              fontSize: this.$fontSize(0.14)
            },
            formatter: (value, index) => {
              if (value >= 10000) {
                value = (Math.round(value / 100) / 10).toFixed(1) + 'k';
              }
              return value;



            }
          },


        },
        series: [
          {
            name: '中国平安',
            type: 'line',
            symbol: 'circle',//设定为实心点
            symbolSize: this.$fontSize(0.07),//设定实心点的大小
            smooth: true,// 这个可以显示为平滑过渡的线条
            data: [12000, 13200, 10100, 13400, 59000, 23000, 21000],
            lineStyle: {
              width: this.$fontSize(0.03),
            }
          },
          {
            name: '中国人寿',
            type: 'line',
            data: [22000, 18200, 19100, 23400, 9000, 33000, 31000],
            symbol: 'circle',//设定为实心点
            symbolSize: this.$fontSize(0.07),   //设定实心点的大小
            smooth: true,// 这个可以显示为平滑过渡的线条
            lineStyle: {
              width: this.$fontSize(0.03),
            }
          },
          {
            name: '招商银行',
            type: 'line',
            data: [15000, 23200, 20100, 15400, 19000, 33000, 41000],
            symbol: 'circle',//设定为实心点
            symbolSize: this.$fontSize(0.07),   //设定实心点的大小
            smooth: true,// 这个可以显示为平滑过渡的线条
            lineStyle: {
              width: this.$fontSize(0.03)
            }
          },
          {
            name: '中国人保',
            type: 'line',
            data: [32000, 33200, 30100, 33400, 39000, 33000, 32000],
            symbol: 'circle',//设定为实心点
            symbolSize: this.$fontSize(0.07),   //设定实心点的大小
            smooth: true,// 这个可以显示为平滑过渡的线条
            lineStyle: {
              width: this.$fontSize(0.03)
            }
          },
          {
            name: '中信',
            type: 'line',
            data: [8200, 9320, 9010, 29340, 12900, 13300, 13200],
            symbol: 'circle',//设定为实心点
            symbolSize: this.$fontSize(0.07),   //设定实心点的大小
            smooth: true,// 这个可以显示为平滑过渡的线条
            lineStyle: {
              width: this.$fontSize(0.03)
            }
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>