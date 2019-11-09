<template>
  <div class="page-detail">
    <el-row class="m-crumbs">
      <crumbs />
    </el-row>
    <el-row></el-row>
  </div>
</template>

<script>
import api from '@/api';
import crumbs from '@/components/products/crumbs';
export default {
  components: {
    crumbs,

  },
  created() {
    api.detail().then(res => {
      console.log(res.data.data);
    });
  }
};
</script>

<style lang="scss">
@import "@/assets/css/detail/index.scss";
</style>