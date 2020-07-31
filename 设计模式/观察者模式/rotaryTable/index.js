var observe = {
  message: {

  },
  // 注册监听
  regist: function (type, fn) {
    this.message[type] = fn // 向message存放监听
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

// html初始化模块
var _domArr = []
function htmlInit (target) {
  // 9个奖品
  for (let index = 0; index <= 9; index++) {
    var _div = document.createElement('div')
    // item-onabort
    _div.setAttribute('class', 'item')
    _div.innerHTML = i
    target.appendChild(_div)    
    _domArr.push(_div)
  }
}

// 最后结果模块
function getFinal () {
  var _num = Math.random() * 10 + 40
  return Math.floor(_num) // 向下取整
}

/**
 * moveConfig: {
 *   moveTime: 10, 转圈数
 *   speed: 速度,
 * }
 *  */
function mover (moveConfig) {
  var nowIn = 0
  var removeNum = 9
  var timer = setInterval(() => {
    if (nowIn != 0) {
      removeNum = nowIn - 1
    }
    _domArr[removeNum].setAttribute('class', 'item')
    _domArr[nowIn].setAttribute('class', 'item item-on')
    nowIn++
    if (nowIn === moveConfig.moveTime) {
      clearInterval(timer)
      if (moveConfig.moveTime === 10) {
        observe.fire('finish')
      }
    }
  }, moveConfig.speed)
}

// 转动控制模块
function moverControll () {
  var final = getFinal()
  var _circle = Math.floor(final / 10, 0)
  var _runCircle = 0
  var _stopnum = final % 10
  var _speed = 200
  mover({
    moveTime: 10,
    speed: _speed
  })
  observe.regist('finish', function () {
    var _time = 0
    _speed -= 50
    _runCircle++
    if (_runCircle <= _circle) {
      _time = 10
    } else {
      _time = _stopnum
    }
    mover({
      moverTime: _time,
      speed: _speed
    })
  })
}

function begin () {
  htmlInit(document.getElementById('app'))
  moverControll()
}

window.begin = begin

