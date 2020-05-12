// 工具函数 bind
function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length)
    for (let index = 0; index < args.length; index++) {
      args[index] = arguments[i]
    }
    return fn.apply(thisArg, args)
  }
}

// 工具函数 extend
function extend(a, b, thisArg) {
  array.forEach(b, function assignValue (val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg)
    } else {
      a[key] = val
    }
  })
}

// 初始化的方式
/**
 * 最终会暴露出的东西最开始只是一个非常简单的类
 * 通过模块合并把复杂的东西合并在一起（建造设计模式）
 */
function axiox (instanceofConfig) {
  this.default = instanceofConfig
}

axiox.prototype.requst = function () {

}
