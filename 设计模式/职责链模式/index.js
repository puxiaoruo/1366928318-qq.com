// 目的：让功能的完成以消息按链条传递来处理
// 使用方式：先行处理，同步模块

// 时间绑定模块-》前端验证模块-》后端验证模块

nput.onblur = function () {
  var _value = input.value
  // 依次执行_arr里面的每一个方法，然后把上一个方法的结果给到下一个
  var _arr = [font, back]

  // 在font和back都是同步的话可以这么做，但正常情况下后端验证是要调接口需要用到异步的
  // var _result = _value
  // while (_arr.length > 0) {
  //   _result = _arr.shift()(_result)
  // }
  // return _result

  // async...await 为了解决有同步有异步的情况下还保持线性进行
  async function test () {
    var _result = _value
    while (_arr.length > 0) {
      _result = await _arr.shift()(_result)
    }
  }

  // 调用
  test().then(res => {
     
  })
}

function font () {

}

function back () {

}

