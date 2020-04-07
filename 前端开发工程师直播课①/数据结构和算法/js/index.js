// Es6写法
class Stack {
  constructor () {
    this.items = []
  }

  // 入栈
  push (ele) {
    this.items.push(ele)
  }

  // 移除站定元素
  pop () {
    return this.items.pop()
  }

  // 返回站栈顶元素
  peek () {
    return this.items[this.items.length - 1]
  }

  // 判断是否为空
  isEmpty () {
    return this.items.length === 0
  }

  // 长度
  size () {
    return this.items.length
  }

  // 清空栈
  clear () {
    this.items = []
  }

}