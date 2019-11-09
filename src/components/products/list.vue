<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key" :class="{'s-nav-active': item.active}">{{ item.name }}</li>
    </ul>
    <el-row>
      <my-item v-for="(item, index) in productList" :key="index" :meta="item" />
    </el-row>
  </div>
</template>

<script>
import MyItem from "./item";
import api from "@/api";
export default {
  components: {
    MyItem
  },
  created() {
    api.goodsList().then(res => {
      // console.log(res.data.data);
      this.productList = res.data.data;
    });
  },
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-commend",
          name: "评价最高",
          active: false
        }
      ],
      productList: []
    };
  },
  methods: {}
};
</script>

<style lang="scss">
// @import '@/assets/css/';
</style>
