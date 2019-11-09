<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <hot-city title="热门城市:" :list="hotList" />
    </el-row>
    <el-row>
      <hot-city title="最近访问:" :list="recentList" />
    </el-row>
    <el-row>
      <category />
    </el-row>
  </div>
</template>

<script>
import province from "@/components/changeCity/province";
import hotCity from "@/components/changeCity/hotCity";
import category from "@/components/changeCity/category";
import api from "@/api";
export default {
  components: {
    province,
    hotCity,
    category
  },
  created() {
      api.hotCity().then(res => {
        //   console.log(res);
        this.hotList = res.data.data.map(item => item.name);
      });
      api.recentCity().then(res => {
        //   console.log(res);
        this.recentList = res.data.data.map(item => item.name);
      })
  },
  data() {
    return {
      hotList: [],
      recentList: []
    };
  },
  methods: {}
};
</script>

<style lang="scss">
@import "@/assets/css/changeCity/hot.scss";
</style>
