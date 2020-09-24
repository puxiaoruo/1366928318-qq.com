var obj = {}
function fn () {
  console.log('hello world!')
}
fn.call(obj) // call将fn临时加入obj中