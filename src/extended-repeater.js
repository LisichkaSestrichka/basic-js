const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  if (repeatTimes === undefined) {
  return '';
}
let masanys = [];
const anys = [];

for (let i = 0; i < repeatTimes; i++) {
  masanys.push(str);
}
for (let i = 0; i < additionRepeatTimes; i++) {
  anys.push(`${addition}`);
}

const anys2_0 = anys.join(additionSeparator);

masanys = masanys.map((a) => a + anys2_0)

return masanys.join(separator);
};
