// export default (str) => {
//   // 1.字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
//   let arr = str.split(' ')
//   // 2.对数组进行遍历，然后每个元素进行反转
//   let result = arr.map((item) => item.split('').reverse().join(''))
//   return result.join(' ')
// }

// export default (str) => {
//   // 1.符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序 链式调用
//   // 2. 对数组进行遍历，然后每个元素进行反转
//   return str
//     .split(' ')
//     .map((item) => item.split('').reverse().join(''))
//     .join(' ')
// }

export default (str) => {
  // 1.符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序 链式调用
  // 2. 对数组进行遍历，然后每个元素进行反转
  return str.length
    ? str
        .split(/\s/g)
        .map((item) => item.split('').reverse().join(''))
        .join(' ')
    : ''
}

// const i = [1, 0, 0, 0, 1, 0, 0, 0, 0]
// export default (array = i, value = 1) => {
//   array.forEach(item=> {
//     if(item === 1) {

//     } else {

//     }
//   })
// }
