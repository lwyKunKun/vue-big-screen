<!-- 重点关注话题图表 -->
<template>
  <div class="chartBox">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <div id="main" class="chartSize"></div>
  </div>
</template>

<script>
import { resize } from '@/assets/js/utils'
export default {
  name: 'topics',
  components: {},

  data () {
    return {
      chart: ''

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
    //绘制饼图
    init () {
      let myChart = this.$echarts.init(document.getElementById('main'))
      this.chart = myChart;
      let option = {
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['25%', '55%'],
            hoverAnimation: true,//鼠标移入变大
            avoidLabelOverlap: true,//解决标签重叠的问题
            center: ['50%', '50%'],
            label: {
              show: true,
              position: 'outside',
              formatter: (data) => {
                let str = `{a|${data.data.name}}` + '\n' + `{b|${data.data.amount}}` + '\n' + `{c|${data.data.percent}}` + '\n'
                return str
              },
              rich: {
                a: {
                  color: '#fff',
                  fontSize: this.$fontSize(0.16),
                  fontWeight: 700,
                  paddingTop: this.$fontSize(1.5),
                },
                b: {
                  color: '#F79B4D',
                  fontSize: this.$fontSize(0.4),
                  fontWeight: 700,


                },
                c: {
                  color: '#3BB8B7',
                  backgroundColor: '#1c4168',
                  fontWeight: 700,
                  fontSize: this.$fontSize(0.2),
                  padding: this.$fontSize(0.04),
                }
              }

            },
            emphasis: {
              label: {
                show: true,
                fontSize: this.$fontSize(0.1),
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: true,
              length: this.$fontSize(0.5),
              lineStyle: {
                color: '#224D7B',
                width: this.$fontSize(0.02)
              },
              formatter: [
                '{b|}' //引导线下面文字
              ],
              rich: {
                b: {
                  height: 5,
                  width: 5,
                  lineHeight: 5,
                  marginBottom: 10,
                  padding: [0, -5],
                  borderRadius: 5,
                  backgroundColor: 'red',
                }
              },

            },
            itemStyle: {
              normal: {
                //控制引导线上文字颜色和位置,此处a是显示文字区域，b做一个小圆圈在引导线尾部显示
                formatter: [
                  '{b|}' //引导线下面文字
                ],
                rich: {
                  b: {
                    height: 5,
                    width: 5,
                    lineHeight: 5,
                    marginBottom: 10,
                    padding: [0, -5],
                    borderRadius: 5,
                    backgroundColor: 'red',
                  }
                },


              }
            },

            data: [
              { value: 1048, name: '竞品热点', amount: 3714, percent: '15.75%', symbol: 'circle' },
              { value: 735, name: '平安热点', amount: 3717, percent: '10.65%' },
              { value: 736, name: '行业热点', amount: 2719, percent: '12.65%' },
            ]
          },


        ],
        color: ['#E09638', '#4DBEFD', '#54F0F2']

      }
      myChart.setOption(option)
    }
  }
}

</script>


<style lang='scss' scoped>
</style>