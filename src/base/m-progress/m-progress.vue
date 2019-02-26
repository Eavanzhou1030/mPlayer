<template>
  <!-- 进度条拖动 -->
  <div class="mProgress" ref="mProgress" @click="barClick">
    <div class="mProgress-bar"></div>
    <div class="mProgress-outer" ref="mPrecentProgress"></div>
    <div class="mProgress-inner" ref="mProgressInner">
      <div class="mProgress-dot" @mousedown="barDown" @touchstart.prevent="barDown"></div>
    </div>
  </div>
</template>
<script>
const dotWidth = 10
export default {
  name: 'mProgress',
  data() {
    return {
      move: {
        status: false, // 是否可拖动
        startX: 0, // 记录最开始点击的X坐标
        left: 0, // 记录当前已经移动的位置
      }
    }
  },
  props: {
    // 进度值一
    percent: {
      type: [Number],
      default: 0
    },
    // 进度值二(歌曲缓冲进度使用)
    percentProgress: {
      type: [Number],
      default: 0
    }
  },
  watch: {

  },
  mounted() {
    this.$nextTick(() => {
      this.bindEvents()
      const barWidth = this.$refs.mProgress.clientWidth - dotWidth
      const offsetWidth = this.percent * barWidth
      this.moveSlide(offsetWidth)
    })
  },
  methods: {
    // 添加绑定事件
    bindEvents() {
      document.addEventListener('mousemove', this.barMove)
      document.addEventListener('mouseup', this.barUp)

      document.addEventListener('touchmove', this.barMove)
      document.addEventListener('touchend', this.barUp)
    },
    // 移除绑定事件
    unbindEvents() {
      document.removeEventListener('mouseover', this.barMove)
      document.removeEventListener('mouseup', this.barUp)

      document.removeEventListener('touchmove', this.barMove)
      document.removeEventListener('touchend', this.barUp)
    },
    // 点击事件
    barClick(e) {
      let rect = this.$refs.mProgress.getBoundingClientRect()
      let offsetWidth = Math.min(this.$refs.mProgress.clientWidth - dotWidth, Math.max(0, e.clientX - react.left))
      this.moveSlide(offsetWidth)
      this.commitPercent()
    },
    // 鼠标按下事件
    barDown(e) {
      this.move.status = true
    },
    // 鼠标触摸/移动事件
    barMove(e) {

    },
    // 鼠标触摸/释放事件
    barUp(e) {

    },
    // 移动滑块
    moveSlide(offsetWidth) {

    },
    // 修改percent
    commitPercent() {

    }
  }
}
</script>
<style lang="less" scoped>
  @import '@/assets/css/var';
  .mProgress {
    position: relative;
    padding: 5px;
    user-select: none;
    cursor: pointer;
    overflow: hidden;
    .mProgress-bar {
      height: 2px;
      width: 100%;
      background: @bar_color;
    }
    .mProgress-outer {
      position: absolute;
      top: 50%;
      left: 5px;
      display: inline-block;
      width: 0;
      height: 2px;
      margin-top: -1px;
      background: rgba(255, 255, 255, .2);
    }
    .mProgress-inner {
      position: absolute;
      top: 50%;
      left: 5px;
      display: inline-block;
      width: 0;
      height: 2px;
      margin-top: -1px;
      background: @line_color;
      .mProgress-dot {
        position: absolute;
        top: 50%;
        right: -5px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: @dot_color;
        transform: translateY(-50%);
      }
    }
  }
</style>
