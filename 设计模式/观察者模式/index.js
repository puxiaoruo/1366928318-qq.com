// 目的：当模块之间不方便直接沟通
// 使用方式：通过一个中介模块，来转发消息

异步模块
原本不在设计之内的模块
  首页 - 评论

var observe = {
  message: {

  },
  // 注册监听
  regist: function (type, fn) {
    this.message[type] = fn
  },
  // 触发
  fire: function (type) {
    this.message[type]()
  },
  // 删除
  remove: function () {
    delete this.message[type]
  }
}