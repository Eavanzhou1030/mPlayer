/**
 * loading状态
 * @type {{data(): *, methods: {_hideLoad():void}}}
 */
export const loadMixin = {
  data() {
    return {
      mLoadShow: true
    }
  },
  methods: {
    _hideLoad() {
      let timer
      clearTimeout(timer)
      timer = setTimeout(() => {
        this.mLoadShow = false
      }, 200)
    }
  }
}
