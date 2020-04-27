// vue2双向绑定原理

// var ob = {
//   a: 1,
//   b: 2
// }

// 设置ob对象的a属性， a就是obj对象的绝对私有属性
// Object.defineProperty(ob, 'a', {
//   writable: false, //设置为不可写
//   enumerable: false, // 没办法被设置
//   configurable: false //没办法被删除
// })
// console.log(Object.getOwnPropertyDescriptor(ob, 'a')) // 得到某个对象的属性标签
// ob.a = 33 // 设置ob对象的a为33
// console.log(ob.a) //输出1，这就是设置writable: false的作用

// get set 取值和存值
// var _value = ob.a
// Object.defineProperty(ob, 'a', {
//   get: function () {
//     console.log('-')
//     return  _value // 一个函数如果没有return的话默认返回undefined
//   },
//   set: function (newvalue) {
//     console.log('+')
//     _value = newvalue
//     return _value
//   }
// })
// console.log(ob.a) // - 执行get
// ob.a = 233 // + 执行set
// console.log(ob.a) // 233

function vue () {
  this.$data = { a: 1 }
  this.el = document.getElementById('app')
  this.virtuadom = ''
  this.observer(this.$data)
  this.render()
}
// 注册get和set
vue.prototype.observer = function (obj) {
  var value
  var self = this
  for (const key in obj) {
    value = obj[key]
    if (typeof value === 'object') {
      this.observer(value)
    } else {
      // Dep 对象进行依赖收集
      // dep = new Dep()
      /**
       * dep.depend()
       * 1.我们data里面的数据并不是所有的地方都用到的
       * 2.如我们直接更新整个视图，是不是有点亏
       * 3.先收集过来依赖于a变量的组件
       * data: {
       *  aL 1
       * }
       * dep.notify() 触发更新
       */
      Object.defineProperty(this.$data, key, {
        get: function () {
          // 进行依赖手机 dep.depend()
          return value
        },
        set: function (newvalue) {
          // 触发更新收集过来的依赖 dep.notify()
          value = newvalue
          self.render()
        }
      })
    }
  }
}

vue.prototype.render = function () {
  this.virtuadom = 'i am' + this.$data.a
  this.el.innerHTML = this.virtuadom
}

// defineProperty监听的是对象，数组监听怎么办？
// 其实就是做了个装饰着模式

// var arraypro = Array.prototype
// var arrob = Object.create(arraypro) // 需要拷贝一份，不然在修改的时候回影响到原来的原型链
// var arr = ['push', 'pop', 'shift'] // 只是数组中的部分
// arr.forEach(function (method, index) {
//   arrob[method] = function () {
//     var ret = arraypro[method].apply(this, arguments) // 先调用原本的push方法
//     dep.notify()
//   }
// })
