<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <category />
        </el-row>
        <el-row>
          <list />
        </el-row>
      </el-col>
      <el-col class="right-content" :span="5">
        <el-row>
          <div class="map">地图</div>
        </el-row>
        <el-row>
          <recommend />
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import crumbs from '@/components/products/crumbs';
import category from '@/components/products/category';
import list from '@/components/products/list';
import recommend from '@/components/products/recommend';
export default {
  components: {
    crumbs,
    category,
    list,
    recommend
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .map{
    width: 230px;
    height: 222px;
    background-color: yellow;
    margin-left: 10px;
    text-align: center;
    line-height: 222px;
  }
</style>
