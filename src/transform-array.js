const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let myArr = Array.from(arr);
  if(typeof(arr)!== "object") throw Error
  if(!Array.isArray(arr)) throw Error
  if(arguments.length === 0) throw Error
  if(arr.length == 0) return arr

  for (i = 0; i < arr.length;i++){
    if(myArr[i] == '--discard-next' && myArr[i+2] == '--double-prev') myArr.splice(i, 3)
    if(myArr[i] == '--discard-next' && myArr[i+2] == '--discard-prev') myArr.splice(i, 3)

    if(myArr[i] == '--discard-prev' && i===0) myArr.splice(i, 1)
    if(myArr[i] == '--double-prev' && i===0) myArr.splice(i, 1)
    if(myArr[i] == '--double-next' && i===myArr.length-1) myArr.splice(i, 1)
    if(myArr[i] == '--discard-next' && i===myArr.length-1) myArr.splice(i, 1)

    if(myArr[i] == '--double-next') myArr[i] = myArr[i+1]
    if(myArr[i] == '--double-prev') myArr[i] = myArr[i-1]
    if(myArr[i] == '--discard-next') {myArr.splice(i, 2); i = i - 1}
    if(myArr[i] == '--discard-prev') {myArr.splice(i-1, 2); i = i - 2}
  }
  return myArr
  }
