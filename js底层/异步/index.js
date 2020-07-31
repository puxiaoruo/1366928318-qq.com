/** setTimeout(() => { // 异步，放置异步队列
  console.log(1)
})
new Promise ((resolve, reject) => {
  console.log(2)
  resolve()
}).then(() => {
  console.log(3)
})
console.log(4) // 同步
*/
/**
 * 最终输出结果为 2 4 3 1
 * 2 4 属于同步任务，按照顺序输出，
 * 3 1 属于异步任务
 * 异步队列又分为
 *    微任务：Promise，process.nextTick
 *    宏任务：整体代码script，setTimeout，setInterval
 * 只有微任务队列为空，才会去执行下一个宏任务（这也就是3在1前面的原因）
 * 
 * async 本身没有异步和同步之分，只是一个语法操作符，可以帮助解决异步的问题
 * 
 * setTimeout Promise 均属于异步操作
 * Promise中的resolve和reject还是属于同步操作的，then里面的属于异步操作
 *  */
// 异步操作：先做其他的，再做异步的

// setTimeout(() => {
//   console.log('set1')
//   new Promise ((resolve, reject) => {
//       console.log('pr1')
//       resolve() // 没有resolve就不回执行then里面的东西
//     }).then(() => {
//       console.log('then1')
//     })
// })
// setTimeout(() => {
//   console.log('set2')
// })
// new Promise ((resolve, reject) => {
//   console.log('pr2')
//   resolve() // 没有resolve就不回执行then里面的东西
// }).then(() => {
//   console.log('then2')
// })
// new Promise ((resolve, reject) => {
//   console.log('pr3')
//   setTimeout(() => {
//     console.log('set3')
//   })
//   resolve() // 没有resolve就不回执行then里面的东西
// }).then(() => {
//   console.log('then3')
// })
// console.log(1)
// 输出结果为：pr1,pr3,1,then2,then3,set1,pr1,then1,set2,set3


setTimeout(() => {
  console.log('set1')
}, 2000)
setTimeout(() => {
  console.log('set2')
}, 1000)
new Promise((resolve, reject) => {
  console.log('pr1')
  setTimeout(() => {
    console.log('set3')
  }, 500)
  resolve()
}).then(() => {
  setTimeout(() => {
    console.log('set4 then1')
  }, 200)
})

// 上方代码，如果setTimeout不加时间的话输入结果应该是：pr1,set1,set2,set3,set then1
// 加上上面的时间是：pr1,set4 then1,set3,set2,set1

