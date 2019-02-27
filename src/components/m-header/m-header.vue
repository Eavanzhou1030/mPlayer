<template>
  <header class="m-header">
    <h1 class="header">mPlayer在线音乐播放器</h1>
    <dl class="user">
      <template v-if="user.userId">
        <router-link class="user-info" to="/music/userlist" tag="dt">
          <img :src="`${user.avatarUrl}?param=50y50`">
          <span>{{user.nickname}}</span>
        </router-link>
        <dd class="user-btn" @click="openDialog(2)">退出</dd>
      </template>
      <dd v-else class="user-btn" @click="openDialog(0)">登录</dd>
    </dl>
     <!-- 登录 -->
    <m-dialog ref="loginDialog" headText="登录" confirmBtnText="登录" cancelBtnText="关闭" @confirm="login">
      <div class="m-dialog-text">
        <input type="number" autofocus placeholder="请输入您的网易云uid" class="m-dialog-input" v-model.trim="uidValue" @keyup.enter="login">
      </div>
      <div slot="btn" @click="openDialog(1)">帮助</div>
    </m-dialog>
     <!-- 帮助 -->
    <m-dialog ref="helpDialog" headText="登录帮助" confirmBtnText="去登录" cancelBtnText="关闭" @confirm="openDialog(0)">
      <div class="m-dialog-text">
        <p>1、<a target="_blank" href="http://music.163.com">点我(http://music.163.com)</a>打开网易云音乐官网</p>
        <p>2、点击页面右上角的"登录"</p>
        <p>3、点击您的头像，进入我的主页</p>
        <p>4、复制浏览器地址栏/user/home?id=后面的数字(网易云UID)</p>
      </div>
    </m-dialog>
     <!-- 退出 -->
     <m-dialog ref="logoutDialog" @confirm="logout" bodyText="确定退出当前用户吗？"></m-dialog>
  </header>
</template>
<script>
import {getUserPlaylist} from '@/api'
import {mapGetters, mapActions} from 'vuex'
import MDialog from '@/base/m-dialog/m-dialog'

export default {
  name: 'm-header',
  components: {
    MDialog
  },
  data() {
    return {
      user: {},
      uidValue: ''
    }
  },
  computed: {
    ...mapGetters(['uid'])
  },
  created() {

  },
  methods: {
    ...mapActions(['setUid']),
    openDialog(key) {
      switch(key) {
        case 0:
          this.$refs.loginDialog.show()
          break;
        case 1:
          this.$refs.loginDialog.hide()
          this.$refs.helpDialog.show()
          break;
        case 2:
          this.$refs.logoutDialog.show()
          break;
        case 3:
          this.$refs.loginDialog.hide()
          break;
      }
    },
    login() {
      if(this.uidValue === '') {
        this.$mToast('UID不能为空！')
        this.openDialog(0)
        return
      }
      this.openDialog(3)

    },
    logout() {
      this.user = {}
      this.setUid(null)
      this.$mToast('退出成功!')
    },
    _getUserPlaylist(uid) {
      getUserPlaylist(uid).then(res => {

      })
    }
  }
}
</script>
<style lang="less" scoped>
  @import '~assets/css/var';

  .m-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    @media (max-width: 768px) {
      background-color: @header_bg_color;
    }
    .header {
      text-align: center;
      line-height: 60px;
      color: @text_color_active;
      font-size: @font_size_large;
      @media (max-width: 768px) {
        padding-left: 20px;
        text-align: left;
      }
    }
    .user {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;
      text-align: right;
      &-info {
        float: left;
        margin-right: 15px;
        cursor: pointer;
        img {
          width: 30px;
          height: 30px;
          border-radius: 90px;
          vertical-align: middle;
        }
        span {
          color: @text_color_active;
        }
      }
      &-btn {
        float: left;
        cursor: pointer;
        &:hover {
          color: @text_color_active;
        }
      }
      @media (max-width: 768px) {
        &-info {
          margin-right: 10px;
          span {
            display: none;
          }
        }
      }
    }
  }

  .m-dialog-text {
    text-align: left;
    .m-dialog-input {
      width: 100%;
      height: 40px;
      box-sizing: border-box;
      padding: 0 15px;
      border: 1px solid @btn_color;
      outline: 1;
      background: transparent;
      color: @text_color_active;
      font-size: @font_size_medium;
      box-shadow: 0 0 1px 0 #fff inset;
      &::placeholder {
        color: @text_color;
      }
    }
    a:hover {
      color: #d43c33;
    }
  }
</style>
