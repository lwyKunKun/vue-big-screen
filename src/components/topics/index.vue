<!-- 重点关注话题图表 -->
<template>
  <div id="main" :style="{ width: '500px', height: '400px' }"></div>
</template>

<script>
export default {
  name: 'topics',
  components: {},

  data () {
    return {
      option: {
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['40%', '70%'],
            label: {
              show: true,
              position: 'outside',
              formatter: (data) => {
                let str = `{a|${data.data.name}}` + '\n' + `{b|${data.data.amount}}` + '\n' + `{c|${data.data.percent}}`
                return str
              },
              rich: {
                a: {
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 700,
                },
                b: {
                  color: '#F79B4D',
                  fontSize: 40,
                  fontWeight: 700,
                  marginBottom: '10px'
                },
                c: {
                  color: '#3BB8B7',
                  backgroundColor: '#1c4168',
                  fontWeight: 700,
                  fontSize: 20,
                }
              }

            },
            emphasis: {
              label: {
                show: false,
                fontSize: '10',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 20,
                lineStyle: {
                  color: '#224D7B'
                }
              }
            },
            data: [
              { value: 1048, name: '竞品热点', amount: 3714, percent: '15.75%' },
              { value: 735, name: '平安热点', amount: 3717, percent: '10.65%' },
              { value: 736, name: '行业热点', amount: 2719, percent: '12.65%' },
            ]
          },

        ],
        color: ['#E09638', '#4DBEFD', '#54F0F2']

      }
    };
  },

  mounted () {
    this.getPie()
  },

  computed: {},

  methods: {
    //绘制饼图
    getPie () {
      let myChart = this.$echarts.init(document.getElementById('main'))
      myChart.setOption(this.option)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>