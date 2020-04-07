// Es6写法
class Queue {
  constructor () {
    this.items = []
  }

  /**
   * push() 在数组末尾添加一个或多个元素，并返回新数组长度
   * shift() 在数组开始添加一个或多个元素，并返回新数组长度
   * unshift()  在数组开始删除一个元素(删且只删除1个),并返回 被删除的元素(效率不高，和push差了很多)
   * pop() 从数组末尾删除1个元素(删且只删除1个), 并返回 被删除的元素
   */

  // 队尾添加
  enqueue (ele) {
    this.items.push(ele)
  }

  // 队首删除
  dequeue () {
    return this.items.shift()
  }

  // 返回队列中的第一个元素
  front () {
    return this.items[0]
  }

  // 判断是否为空
  isEmpty () {
    return this.items.length === 0
  }

  // size
  size () {
    return this.items.length
  }

}