<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{active: kind == item.tab}"
        :data-type="item.tab"
      >{{ item.text }}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{ item.title }}</div>
            <div class="sub-title" :title="item.sub_title">{{ item.subTitle }}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">￥</span>
                <span class="current-price numfont">{{ item.price }}</span>
                <span class="sold bottom-right-info">{{ item.address }}</span>
              </span>
            </div>


            <!-- <div class="price-info" v-if="item.rentNum && item.price_info.current_price">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">{{ item.price_info.price_symbol }}</span>
                <span class="current-price numfont">{{ item.price_info.current_price }}</span>
              </span>
              <span class="old-price">
                {{ item.price_info.oldPrice_type }}
                {{ item.price_info.price_symbol }}
                {{ item.price_info.old_price }}
              </span>
              <span class="sold bottom-right-info">{{ item.address }}</span>
            </div>
            <div class="price-info" v-else-if="!item.rentNum">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">{{ item.price_info.price_symbol }}</span>
                <span class="current-price numfont">抢光了</span>
              </span>
            </div>
            <div class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">{{ item.price_info.price_symbol }}</span>
                <span class="current-price numfont">{{ item.price_info.avg_price }}</span>
                <span class="units">/{{ item.price_info.units }}</span>
              </span>
            </div>-->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api";
export default {
  props: ["nav"],
  data() {
    return {
      kind: "all",
      resultData: {}
    };
  },
  created() {
    api.resultsByKeywords().then(res => {
        // console.log(res.data.data[this.kind]);
        this.resultData = res.data.data;
      });
  },
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return;
      }
      this.kind = dom.getAttribute("data-type");
      // console.log(this.kind);
      // 动态获取数据 ajax请求
      // api.resultsByKeywords().then(res => {
      //   console.log(res.data.data[this.kind]);
      //   this.list = res.data.data[this.kind];
      // });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
