<template>
  <div class="m-header">
    <el-row>
        <top-bar />
    </el-row>
    <el-row>
        <search-bar />
    </el-row>
  </div>
</template>

<script>
import topBar from './topBar'
import searchBar from './searchBar'
export default {
  components: {
    topBar,
    searchBar
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
  @import '@/assets/css/public/header/index.scss';
</style>
