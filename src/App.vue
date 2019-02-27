<template>
  <div id="app">
    <!-- 主体 -->
    <m-header></m-header>
    <router-view class="router-view"></router-view>

    <!-- 更新说明 -->

  </div>
</template>

<script>
import MHeader from '@/components/m-header/m-header'
import MDialog from '@/base/m-dialog/m-dialog'

export default {
  name: 'App',
  components: {
    MHeader,
    MDialog
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
  @import '~assets/css/var';

  #app {
    position: relative;
    width: 100%;
    height: 100%;
    color: @text_color;
    font-size: @font_size_medium;
    .router-view {
      width: 100%;
      height: 100%;
    }
    audio {
      position: fixed;
    }
  }
</style>

