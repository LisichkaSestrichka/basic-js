const CustomError = require('../extensions/custom-error')

class VigenereCipheringMachine {
  constructor(modification = true) {
    this.isDirect = modification
  }
  encrypt(message, key) {
    try {
      let keyChars = key
        .toUpperCase()
        .split('')
        .map((el) => el.charCodeAt(0))
      let keyCounter = 0
      let messageChars = message
        .toUpperCase()
        .split('')
        .map((el) =>
          /(?=[A-z])(?!\^)/u.test(el)
            ? String.fromCharCode(
                65 +
                  ((el.charCodeAt(0) +
                    keyChars[keyCounter++ % keyChars.length]) %
                    26)
              )
            : el
        )

      return this.isDirect
        ? messageChars.join('')
        : messageChars.reverse().join('')
    } catch (e) {
      throw new Error(e)
    }
  }
  decrypt(message, key) {
    let keyChars = key
      .toUpperCase()
      .split('')
      .map((el) => el.charCodeAt(0))
    let keyCounter = 0
    let messageChars = message
      .toUpperCase()
      .split('')
      .map((el) =>
        /(?=[A-z])(?!\^)/u.test(el)
          ? String.fromCharCode(
              65 +
                ((el.charCodeAt(0) -
                  keyChars[keyCounter++ % keyChars.length] +
                  26) %
                  26)
            )
          : el
      )
    return this.isDirect
      ? messageChars.join('')
      : messageChars.reverse().join('')
  }
}

module.exports = VigenereCipheringMachine
