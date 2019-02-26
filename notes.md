### babel-polyfill

Babel默认只转换新的JavaScript语法，而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。


### vue-lazyload

vue中图片的懒加载插件


### 自定义动画效果

toast-fade的css类的定义

