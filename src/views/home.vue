<!-- 首页 -->
<template>
  <div class="home-container">
    <div class="wrap" ref="wrap">
      <div class="all-content">
        <div class="top">
          <div class="logo">
            <img src="../assets/img/logo.jpeg" alt="" />
          </div>
          <div class="top-middle">
            <div class="top-middle-box" v-for="(item, index) in addDivide" :key="index">
              <div class="title">{{ item.key }}</div>
              <div :style="{ color: item.color }" class="count">{{ item.newValue }}</div>
            </div>
          </div>
          <div class="top-right">
            <div class="time">{{ time }}</div>
            <div class="weather">
              <span>{{ weatherInfo.city }}</span>
              <span>{{ weatherInfo.newTemperature }}</span>
              <span>{{ weatherInfo.windpower }}</span>
              <span>{{ weatherInfo.weather }}</span>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="cotent-left">
            <titlesTemplate title="重点关注话题"></titlesTemplate>
            <topics></topics>
            <titlesTemplate title="媒体曝光分布"></titlesTemplate>
            <media></media>
          </div>
          <div class="map">这是中间地图</div>
          <div class="cotent-right">
            <titlesTemplate title="指数" :isTabBtn="true" :tabNameList="tabNameList" @mouseOver="mouseOver"></titlesTemplate>
            <exponent></exponent>
            <titlesTemplate title="业务板块舆情"></titlesTemplate>
            <business></business>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { nowTime } from '@/assets/js/utils'
import { getWeather } from '@/api/home'
export default {
  name: 'home',
  components: {},
  data () {
    return {
      totalData: [
        {
          key: '整体曝光',
          value: 8063,
        },
        {
          key: '正面信息',
          value: 6635,
        },
        {
          key: '中性报道',
          value: 15857,
        },
        {
          key: '负面报道',
          value: 8063,
        },
        {
          key: '高管信息',
          value: 686,
        }
      ],
      time: '',//当前时间
      timer: '',  // 定时器名称
      weatherInfo: [],//天气信息
      tabNameList: ['微博指数', '微信指数', '百度指数'],//标题tab列表
    };
  },
  created () {
    const that = this;
    this.timer = setInterval(function () {  //使用定时器，每一秒执行一次
      that.time = nowTime();
    }, 1000)
    // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
    this.$once('hook:beforeDestroy', () => {
      clearInterval(this.timer);
    })
    this.getWeather();

  },
  mounted () {

  },
  computed: {
    addDivide () {
      this.totalData.forEach((item, index) => {
        (item.value).toLocaleString('en-US')
        const color = ['#13DD93', '#07E3F3', '#07E3F3', '#FA8B30', '#07E3F3']
        this.totalData[index] = { ...item, newValue: (item.value).toLocaleString('en-US'), color: color[index] }
      })
      return this.totalData
    },
  },
  methods: {
    getWeather () {//获取气温
      const parmas = {
        city: "成都",
      }
      getWeather(parmas).then((res, err) => {
        this.weatherInfo = {
          ...res.lives[0],
          newTemperature: `${res.lives[0].temperature}°`
        }


      })
    },
    mouseOver (index) {//指数移入事件
      console.log(index, 'index');

    }

  }
}
</script>
<style lang='scss' scoped>
.home-container {
  width: 100%;
  height: 100%;
  color: #fff;
  box-sizing: border-box;

  .wrap {
    transform-origin: 0px 0px 0px;
    background-size: contain;
    background-position: 50% 0;
    background-color: #0c1c35;
    min-width: auto;
    width: 1920px;
    min-height: auto;
    height: 1080px;
    overflow-y: auto;
  }
  .all-content {
    padding: 20px 35px;
    background-color: #0c1c35;
    .top {
      display: flex;
      .logo {
        width: 250px;
        height: auto;
        img {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
        }
      }
      .top-middle {
        display: flex;
        color: #fff;
        margin: 40px auto;
        .top-middle-box {
          margin-left: 30px;
          &:first-child {
            margin-left: 0px;
          }
        }
        .title {
          color: #b2c0db;
          font-size: 25px;
        }
        .count {
          font-size: 70px;
          font-weight: 700;
          margin-top: -20px;
        }
      }
      .top-right {
        color: #fff;
        font-weight: 700;
        font-size: 40px;
        margin: 20px 0 0 auto;
        .weather {
          font-size: 30px;
          text-align: right;
          span {
            margin-left: 10px;
            &:last-child {
              font-size: 15px;
              margin-left: 5px;
            }
          }
        }
      }
    }
    .content {
      display: flex;
      .map {
        flex: 1;
      }
      .cotent-right {
        margin-left: auto;
      }
    }
  }
}
</style>  