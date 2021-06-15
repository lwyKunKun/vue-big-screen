<template>
  <div class="login-container">
    <div class="login-box">
      <h2>大数据可视化平台</h2>
      <div class="login-content">
        <div class="login-form">
          <div class="username underline">
            <span class="el-icon-user-solid"></span>
            <input type="text" class="login-input" />
          </div>
          <div class="password underline">
            <span class="el-icon-lock"></span>
            <input type="password" class="login-input" />
          </div>
        </div>
        <div class="login-btn">
          <el-button>立即登录</el-button>
        </div>
        <div class="login-annotation">
          <span>默认用户名：</span>
          <span>admin</span>
          <span>默认密码：</span>
          <span>123456</span>
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
};
</script>
<style lang="scss" scoped>
.login-container {
  position: relative;
}
.login-box {
  width: 460px;
  border: 1px solid #000;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  h2 {
    text-align: center;
  }
  .login-content {
    padding: 0 20px;
    .login-form {
      .underline {
        border-bottom: 1px solid #000;
        margin-bottom: 25px;
      }
      .login-input {
        background: none;
        outline: none;
        border: none;
      }
    }
    .login-btn {
      margin: 20px 0;
      .el-button {
        width: 100%;
        border: 1px solid #000;
      }
    }
    .login-annotation {
      font-size: 14px;
      padding-bottom: 20px;
      span {
        &:nth-child(2n) {
          font-weight: 700;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
