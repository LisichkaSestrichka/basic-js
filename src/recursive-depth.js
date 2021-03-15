const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    let deph = 0;
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            count = this.calculateDepth(arr[i]);
            if (count > deph) deph = count;
        }
    }
    return deph + 1;
  }
};
