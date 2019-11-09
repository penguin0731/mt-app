<template>
  <div class="recommend-box">
    <div class="top-nav-box">
      <div class="label">猜你喜欢</div>
    </div>
    <div class="recommend-list">
      <router-link v-for="item in recommendList" :key="item.itemId" :to="{name: 'productDetail', params: {detail: item.title}}">
        <div class="recommend-card-wrapper">
          <div class="img-box">
            <img :src="item.imgUrl" class="image" />
          </div>
          <div class="info-box">
            <div class="title" title>{{item.title}}</div>
            <div class="score-line">
              <p>
                <el-rate
                  v-model.number="item.score"
                  :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                  score-template="{value}"
                  disabled
                ></el-rate>
              </p>
              <div class="comment-number">{{ item.commentNum }}个评价</div>
            </div>
            <div class="desc-line">
              <div class="desc">{{ item.areaName }}</div>
            </div>
            <div class="bottom-line">
              <div class="price-box">
                <span>
                  <span class="yuan">￥</span>
                  <span class="price-number numfont">{{ item.avgPrice }}</span>
                  <span class="price-desc">起</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  created() {
    api.recommend().then(res => {
      console.log(res.data.data);
      this.recommendList = res.data.data;
      this.recommendList.forEach(item => {
        item.score = +item.score;
      });
    });
  },
  data() {
    return {
      recommendList: null
    };
  },
};
</script>

<style>
.recommend-box {
  margin-top: 10px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 16px 20px 0;
  width: 230px;
  box-sizing: border-box;
  margin-left: 10px;
}
</style>