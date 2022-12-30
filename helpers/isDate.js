const moment = require("moment");

const isDate = (value) => {
  if (!value) {
    return false;
  }

  const fecha = moment(value);
  if (fecha.isValid()) {
    // isValid() es un método de moment
    return true;
  } else {
    return false;
  }
};

module.exports = { isDate };
