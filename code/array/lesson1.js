export default (str) => {
  let defaultData = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let num = str.split('')
  let code = num.map((item) => defaultData[item])

  let init = (arr) => {
    // 临时变量
    let tmp = []
    tmp = arr[0]
      .split('')
      .map((item) => arr[1].split('').map((value) => `${item}${value}`))
      .flat()

    // for (let index = 0; index < arr[0].length; index++) {
    //   for (let i = 0; i < arr[1].length; i++) {
    //     tmp.push(`${arr[0][index]}${arr[1][i]}`)
    //   }
    // }

    arr.splice(0, 2, tmp)
    if (arr.length > 1) {
      init(arr)
    } else {
      return tmp
    }

    return arr[0]
  }

  return init(code)
}
