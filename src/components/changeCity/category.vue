<template>
  <div class="category">
    <dl class="m-category">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item, index) in list" :key="index">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl class="m-category-section" :id="'city-' + index" v-for="(item, index) in cityGroup" :key="index">
      <dt>{{ index }}</dt>
      <dd>
        <span :id="'city-' + item" v-for="city in item" :key="city.id" @click="changeCity(city)">{{ city.name }}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from '@/api';
export default {
  created () {
    api.cityList().then(res => {
      var obj = {};
      res.data.data.forEach((item, index) => {
        if(!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = [];
        }
        obj[item.firstChar.toUpperCase()].push(item);
      });
      this.cityGroup = obj;
    });
  },
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityGroup: [],
    };
  },
  methods: {
    changeCity (item) {
      this.$store.dispatch('setPosition', item);
      this.$router.push({name: 'index'});
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/category.scss";
</style>
