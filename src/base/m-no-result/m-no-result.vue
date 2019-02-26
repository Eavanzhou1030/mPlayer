<template>
    <!-- 暂无数据提示 -->
    <div class="m-no-result">
      <p class="m-no-result-text">{{title}}</p>
    </div>
</template>
<script>
export default {
  name: 'm-no-reslt',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less" scoped>
  @import '@/assets/css/var';
  .m-no-result {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    &-text {
      margin-top: 30px;
      font-size: @font_size_medium;
      color: @text_color;
    }
  }
</style>
