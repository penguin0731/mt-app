<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <my-menu />
      </el-col>
      <el-col :span="19">
        <my-life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <my-container :nav="iStyle" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <my-container :nav="recommend" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyMenu from "@/components/index/menu";
import MyLife from "@/components/index/life";
import MyContainer from "@/components/index/container";
export default {
  components: {
    MyMenu,
    MyLife,
    MyContainer
  },
  data() {
    return {
      iStyle: {
        class: 'istyle',
        title: "有格调",
        list: [
          {
            tab: "all",
            text: "全部"
          },
          {
            tab: "food",
            text: "约会聚餐"
          },
          {
            tab: "spa",
            text: "丽人SPA"
          },
          {
            tab: "movie",
            text: "电影演出"
          },
          {
            tab: "travel",
            text: "品质出游"
          }
        ]
      },
      recommend: {
        class: 'youhui',
        title: "很优惠",
        list: [
          {
            tab: "all",
            text: "全部"
          },
          {
            tab: "food",
            text: "美食"
          },
          {
            tab: "xiuxian",
            text: "休闲"
          },
        ]
      }
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>
