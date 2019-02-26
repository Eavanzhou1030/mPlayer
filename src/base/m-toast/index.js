import TempToast from './m-toast.vue'

let instance, showToast = false, time
const mToast = {
  install(Vue, options = {}) {
    let opt = TempToast.data()
    Object.assign(opt, options)
    Vue.prototype.$mToast = (message, position) => {
      if(showToast) {
        clearTimeout(time)
        instance.vm.visible = showToast = false
        document.body.removeChild(instance.vm.$el)
      }
      if(message) {
        opt.message = message
      }
      if(position) {
        opt.position = position
      }
      let TempToastConstructor = Vue.extend(TempToast)
      instance = new TempToastConstructor({
        data: opt
      })
      instance.vm = instance.$mount()
      document.body.appendChild(instance.vm.$el)
      instance.vm.visible = showToast = true

      time = setTimeout(() => {
        instance.vm.visible = showToast = false
        document.body.removeChild(instance.vm.$el)
      }, opt.duration)
    }
  }
}

export default mToast
