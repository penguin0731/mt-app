<template>
  <div class="m-geo">
      <div class="position">
          <i class="el-icon-location" />
          <span>{{ $store.state.position.name }}</span>
          <router-link class="changeCity" :to="{name: 'changeCity'}">切换城市</router-link>
          [<a class="city-guess" href="#" v-for="item in nearCity" :key="item.id">{{ item.name }}</a>]
      </div>
      <div class="m-user" v-if="!$store.state.userName">
          <router-link class="login" :to="{name: 'login'}">
              立即登录
          </router-link>
          <router-link class="register" :to="{name: 'register'}">
              注册
          </router-link>
      </div>
  </div>
</template>

<script>
import api from '@/api';
export default {
  created () {
    api.getPosition().then(res => {
      // console.log(res);
      this.$store.dispatch('setPosition', res.data.data);
      this.nearCity = res.data.data.nearCity;
    })
  },
  watch: {
    "$store.state.position": function () {
      this.nearCity = this.$store.state.position.nearCity;
    }
  },
  data () {
    return {
      nearCity: []
    }
  },
  methods: {

  }
}
</script>

