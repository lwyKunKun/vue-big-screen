<!-- 中国地图 -->
<template>
  <div>
    <div class="map-container" id="map"></div>
  </div>
</template>

<script>
import chinaJson from '@/assets/json/china.json'
import { resize } from '@/assets/js/utils'
export default {
  name: 'chinaMap',
  components: {},

  data () {
    return {
      chart: ''
    };
  },
  created () {

  },

  mounted () {
    this.init()
    resize(this.init, this.chart);
  },

  computed: {},

  methods: {
    init () {
      let myChart = this.$echarts.init(document.getElementById('map'))
      this.chart = myChart;
      this.$echarts.registerMap("china", chinaJson);

      //模拟数据
      let data = [
        { name: '海门', value: 90, num: 5, id: 8 },
        { name: '鄂尔多斯', value: 102, num: 15, id: 16 },
        { name: '齐齐哈尔', value: 140, num: 30, id: 20 }
      ];
      let geoCoordMap = {
        '海门': [121.15, 31.89],
        '鄂尔多斯': [109.781327, 39.608266],
        '齐齐哈尔': [123.97, 47.33]
      };

      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
              num: geoCoord.concat(data[i].num),
              id: geoCoord.concat(data[i].id)
            });
          }
        }
        return res;
      };

      var option = { // 进行相关配置
        geo: { // 这个是重点配置区
          map: 'china', // 表示中国地图
          label: {
            show: false, // 是否显示对应地名
            textStyle: { //字体颜色
              color: '#797979'
            },
            emphasis: {//鼠标进入显示对应地名
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: this.$fontSize(0.16)
              }
            }
          },
          roam: false,//是否鼠标进行缩放
          itemStyle: {
            normal: {
              borderWidth: this.$fontSize(0.01), // 地图边框宽度
              borderColor: '#3188C1', // 地图边框颜色
              areaColor: '#10407E' // 地图颜色
            },
            emphasis: {//选中省份的颜色
              areaColor: '#026295',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 0,
              borderWidth: this.$fontSize(0.01),
              shadowColor: '#fff'
            }
          }
        },
        //滑动显示数据
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            return params.name + ' 已接入: ' + params.data.num[2];
          }
        },
        series: [{
          name: '散点',
          type: 'scatter',
          coordinateSystem: 'geo',
          color: "#e1ebe3",//点的颜色
          data: convertData(data),
          symbolSize: this.$fontSize(0.25),//点的大小
          symbol: "pin",//点的样式
          cursor: "pointer",//鼠标放上去的效果
          label: {
            normal: {//默认展示
              show: false
            },
            emphasis: {//滑过展示
              show: false
            }
          },
          itemStyle: {
            emphasis: {
              borderColor: '#5c8f6e',
              borderWidth: this.$fontSize(0.05)
            }
          },
          zoom: 1.2,
        },

        {
          type: 'map',
          map: 'china',
          geoIndex: 0,
          aspectScale: 0.75,
          tooltip: {
            show: false
          }
        },

        ],
      }
      myChart.setOption(option)

    }
  }
}

</script>
<style lang='scss' scoped>
#map {
  width: 100%;
  height: 1080px;
}
</style>