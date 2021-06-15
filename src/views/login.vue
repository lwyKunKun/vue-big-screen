<template>
  <div class="login-container">
    <div class="layer">
      <div class="login-box">
        <h2>大数据可视化平台</h2>
        <div class="login-content">
          <div class="login-form">
            <div class="username underline">
              <span class="el-icon-user-solid"></span>
              <el-input
                class="login-input"
                placeholder="请输入用户名"
                v-model="form.username"
                clearable
              >
              </el-input>
            </div>
            <div class="password underline">
              <span class="el-icon-lock"></span>
              <el-input
                type="password"
                class="login-input"
                placeholder="请输入密码"
                v-model="form.password"
                clearable
              >
              </el-input>
            </div>
          </div>
          <div class="login-btn">
            <el-button @click="loginIn">立即登录</el-button>
          </div>
          <div class="login-annotation">
            <span>默认用户名：</span>
            <span>admin</span>
            <span>默认密码：</span>
            <span>123456</span>
          </div>
        </div>
      </div>
    </div>

    <vue-particles
      color="#6495ED"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#6495ED"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.6"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <bgAnimation />
  </div>
</template>

<script>

export default {
  name: "login",
  components: {},
  data () {
    return {
      form: {
        username: '',
        password: ''
      }



    }
  },
  methods: {
    loginIn () {//登录

    }

  }
};
</script>
<style lang="scss">
.login-container {
  .el-input__inner {
    background: none;
    border: none;
    color: #d3d7f7;
  }
}
</style>
<style lang="scss" scoped>
.login-container {
  .layer {
    position: absolute;
    height: 100%;
    width: 100%;
    .login-box {
      width: 460px;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate3d(-50%, -50%, 0);
      transform: translate3d(-50%, -50%, 0);
      z-index: 99999;
      letter-spacing: 2px;
      background: rgba(36, 36, 85, 0.5);
      box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
      border-radius: 10px;
      -ms-animation: cloud 2s 3s ease-in infinite alternate;
      -moz-animation: cloud 2s 3s ease-in infinite alternate;
      -webkit-animation: cloud 2s 3s ease-in infinite alternate;
      -o-animation: cloud 2s 3s ease-in infinite alternate;
      -webkit-animation: cloud 2s 3s ease-in infinite alternate;
      animation: cloud 2s 3s ease-in infinite alternate;
      h2 {
        text-align: center;
        font-weight: normal;
        font-size: 22px;
        color: #d3d7f7;
        padding: 20px 0;
      }
      .login-content {
        padding: 0 20px;
        .login-form {
          .underline {
            border-bottom: 1px solid #d3d7f7;
            margin-bottom: 20px;
            color: #d3d7f7;
            display: flex;
            align-items: center;
          }
        }
        .login-btn {
          margin: 20px 0;
          .el-button {
            width: 100%;
            border: 1px solid #d3d7f7;
          }
        }
        .login-annotation {
          font-size: 14px;
          padding-bottom: 20px;
          color: #d3d7f7;
          span {
            &:nth-child(odd) {
              opacity: 0.3;
            }
            &:nth-child(2n) {
              font-weight: 700;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }

  @-ms-keyframes cloud {
    0% {
      -ms-transform: translate(-50%, -50%);
    }
    40% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      -ms-transform: translate(-50%, -40%);
    }
  }
  @-moz-keyframes cloud {
    0% {
      -moz-transform: translate(-50%, -50%);
    }
    40% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      -moz-transform: translate(-50%, -40%);
    }
  }
  @-o-keyframes cloud {
    0% {
      -o-transform: translate(-50%, -50%);
    }
    40% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      -o-transform: translate(-50%, -40%);
    }
  }
  @-webkit-keyframes cloud {
    0% {
      -webkit-transform: translate(-50%, -50%);
    }
    40% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      -webkit-transform: translate(-50%, -40%);
    }
  }
  @keyframes cloud {
    0% {
      transform: translate(-50%, -50%);
    }
    40% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -40%);
    }
  }
}
</style>
