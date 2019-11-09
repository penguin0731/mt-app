<template>
  <div class="page-login">
    <div class="login-header">
      <a class="logo" href="localhost:8080"></a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        />
      </div>
      <div class="form">
        <div :style="{visibility: hidden}" class="tips">{{ error }}</div>
        <p>
          <span>账号登录</span>
        </p>
        <el-input
          v-model="userName"
          :class="{'error': error && !userName}"
          placeholder="手机号/用户名/邮箱"
          prefix-icon="profile"
          @focus="clearError"
        ></el-input>
        <el-input
          v-model="password"
          :class="{'error': error && !password}"
          type="password"
          placeholder="密码"
          prefix-icon="password"
          @focus="clearError"
        ></el-input>
        <p class="foot">
          <a href="#">忘记密码?</a>
        </p>
        <el-button class="btn-login" type="primary" @click="submit">登录</el-button>
        <p class="reg">
          <span>还没有做账号?</span>
          <router-link to="/register">免费注册</router-link>
        </p>
        <div class="oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="oauth cf">
            <span
              class="oauth__link oauth__link--qq"
              data-href="/account/connect/tencent"
              target="_blank"
              id="J-third-tencent"
            ></span>
            <span
              class="oauth__link oauth__link--weibo"
              data-href="/account/connect/sina"
              target="_blank"
              id="J-third-sina"
            ></span>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <ul>
        <li><a href="#">关于美团</a></li>
        <li><a href="#">加入我们</a></li>
        <li><a href="#">商家入驻</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">美团手机版</a></li>
      </ul>
      <p>©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </footer>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      userName: "",
      password: "",
      error: "",
      hidden: 'hidden',
    };
  },
  methods: {
    submit() {
      if (!this.userName && !this.password) {
        this.error = "请输入账号和密码";
        this.hidden = '';
        return false;
      }
      if (!this.userName) {
        this.error = "请输入账号";
        this.hidden = '';
        return false;
      }
      if (!this.password) {
        this.error = "请输入密码";
        this.hidden = '';
        return false;
      }
      api
        .login({
          params: {
            userName: this.userName,
            password: this.password
          }
        })
        .then(res => {
          if(res.data.status == 'success') {
            this.$router.push('/index');
            this.$store.commit('setUserName', this.userName);
          }else {
            this.error = res.data.msg;
          }
        });
    },
    clearError() {
      this.error = "";
      this.hidden = 'hidden'
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>
