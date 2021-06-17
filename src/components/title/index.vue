<!-- title模板 -->
<template>
  <div>
    <div class="title tabTitle" v-if="isTabBtn">
      {{ title }}
      <div class="tabs">
        <div class="tab" v-for="(item, index) in tabNameList" :key="index">{{ item }}</div>
      </div>
    </div>
    <div class="title" v-else>{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "titlesTemplate",
  props: {
    title: {
      type: String,
      required: true
    },
    isTabBtn: {//是否有tab
      type: Boolean,
      default: false
    },
    tabNameList: {
      type: Array,
      default: () => {
        return [];
      }
    }

  },
  components: {},

  data () {
    return {
    };
  },

  mounted () {
  },

  computed: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.title {
  color: #57e5e6;
  font-size: 30px;
  border-left: 1px solid transparent;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  background: linear-gradient(to right, #1c4168, transparent);
  width: 500px;
  padding: 5px 0 5px 20px;
  border-radius: 3px;
  box-sizing: border-box;
  text-shadow: 2px 2px 2px grey;
}
.tabTitle {
  display: flex;
  .tabs {
    display: flex;
    font-size: 16px;
    align-items: center;
    margin-left: auto;
    color: #98a8bc;
    text-shadow: 2px 2px 2px transparent;
    font-weight: 700;
    cursor: pointer;
    .tab {
      background-color: rgba(98, 132, 164, 0.4);
      padding: 5px;
      margin-left: 5px;
      border-radius: 3px;
      position: relative;
      &:first-child {
        margin-left: 0;
      }
      &:hover {
        background-color: #3a98bb;
        color: #fff;
      }
    }
    .tab:hover::before {
      content: '';
      width: 0;
      height: 0;
      display: block;
      position: absolute;
      left: 50%;
      top: 115%;
      transform: translate(-50%, -50%);
      z-index: 5;
      /*兼容ie8-*/
      border-bottom: 5px transparent dashed;
      border-left: 5px transparent dashed;
      border-right: 5px transparent dashed;
      border-top: 5px #3a98bb solid;
      overflow: hidden;
    }
  }
}
</style>