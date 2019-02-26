<template>
    <!-- 弹出层 -->
    <transition name="toast-fade">
      <div v-show="visible" class="m-toast" :class="positionClass">{{message}}</div>
    </transition>
</template>
<script>
export default {
  data() {
    return {
      position: 'center',
      duration: 500,
      visible: false,
      message: ''
    }
  },
  computed: {
    positionClass() {
      return 'm-toast-' + this.position
    }
  }
}
</script>
<style lang="less" scoped>
  @prefix-cls: m-toast;

  .@{prefix-cls} {
    position: fixed;
    z-index: 1996;
    left: 50%;
    transform: translateX(-50%);
    max-width: 80%;
    min-height: 40px;
    line-height: 20px;
    text-align: center;
    overflow: hidden;
    box-sizing: border-box;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 14px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    user-select: none;
    &&-top {
      top: 10%;
    }
    &&-center {
      top: 50%;
      margin-top: -20px;
    }
    &&-bottom {
      bottom: 10%;
    }
  }

  .toast-fade-enter {
    opacity: 0;
    transform: translate3d(-50%, -10px, 0)
  }

  .toast-fade-enter-active {
    will-change: transform;
    transition: all .2s;
  }

  .toast-fade-enter-to {
    opacity: 1;
    transform: translate3d(-50%, 0, 0);
  }
</style>
