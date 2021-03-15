const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  try {
    date.getTime();
  } catch(err) {
    throw new Error(err);
  }

  if (date.getMonth()+1 ===12||date.getMonth()+1 ===1||date.getMonth()+1 ===2){
    return "winter";
  }
  if (date.getMonth()+1 ===3||date.getMonth()+1 ===4||date.getMonth()+1 ===5){
    return "spring";
  }
  if (date.getMonth()+1 ===6||date.getMonth()+1 ===7||date.getMonth()+1 ===8){
    return "summer";
  }
  if (date.getMonth()+1 ===9||date.getMonth()+1 ===10||date.getMonth()+1 ===11){
    return "autumn";
  }
};
