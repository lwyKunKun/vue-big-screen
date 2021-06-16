<!-- 首页 -->
<template>
  <div class="home-container">
    <div class="wrap" ref="wrap">
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
          <div class="weather"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { screenSize, nowTime } from '@/assets/js/utils'
import { getWeather } from '@/api/home'
import jsonp from 'jsonp'
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
    screenSize(this.$refs.wrap);

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
    getWeather () {
      const parmas = {
        city: "成都",
      }
      getWeather(parmas).then((res, err) => {
        console.log(res, 'res');


      })
    },

  }
}
</script>
<style lang='scss' scoped>
.home-container {
  width: 100%;
  height: 100%;
  .wrap {
    transform-origin: 0px 0px 0px;
    background-size: contain;
    background-position: 50% 0;
    background-color: #0c1c35;
    min-width: auto;
    width: 1920px;
    min-height: auto;
    height: 1080px;
    overflow: auto;
    .top {
      display: flex;
      .logo {
        width: 400px;
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
        margin: 20px 20px 0 auto;
      }
    }
  }
}
</style>  