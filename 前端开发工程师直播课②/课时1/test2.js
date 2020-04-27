// vue3双向绑定原理
/**
 * proxy的有点
 * 1.不用遍历
 * 2.不用设置外部参数来接收值
 * 3.不会污染原对象，会给一个新的代理对象 
 */
// var ob = {
//   a: 1,
//   b: 2
// }
// new Proxy(ob, {
//   /**
//    * 
//    * @param {*} target 要取值的对象
//    * @param {*} key 对象的key值
//    * @param {*} receiver 
//    */
//   get: function (target, key, receiver) {
//     console.log(target, key, receiver)
//     return target[key]
//   },
//   set: function (target, key, value, receiver) {
//     // return target[key] = value
//     return Reflect.set(target, key, value) // 这样写会更优雅有点
//   }
// })

function vue () {
  this.$data = { a: 1 }
  this.el = document.getElementById('app')
  this.virtuadom = ''
  this.observer(this.$data)
  this.render()
}
// 注册get和set
vue.prototype.observer = function (obj) {
  var self = this
  this.$data = new Proxy(this.$data, {
    get: function (target, key, receiver) {
      return target[key]
    }, 
    set: function (target, key, value, receiver) {
      target[key] = value
      self.render()
      // return Reflect.set(target, key, value)
    }
  })
}

vue.prototype.render = function () {
  this.virtuadom = 'i am' + this.$data.a
  this.el.innerHTML = this.virtuadom
}

// 用proxy进行类型验证
// 一个人，name必须是中文，age必须是数组且 > 18

// 验证
// 典型的策略模式
var validtor = {
  name: function () {
    var reg = /^[\u4E00-\u9FA5]$/ // 名字必须是中文的正则表达式
    if (typeof value === 'string' && reg.test(value)) {
      return true
    }
    return false
  },
  age: function () {
    if (typeof value === 'number' && value >= 18) {
      return true
    }
    return false
  }
}

function person (age, name) {
  this.age = age
  this.name = name
  return new Proxy(this, {
    get: function (target, key) {
      return target[key]
    },
    set: function (target, key, value) {
      if (validtor[key](value)) { // key->属性名称 value->属性值
        return Reflect.set(target, key, value)
      } else {
        throw new Error(key + ' is not right')
      }
    }
  })
}

