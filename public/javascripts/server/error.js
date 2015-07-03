var error = function (input) {
  this.errorsArr = [];
};

error.prototype.validateInput = function (input, label) {
  if (input.trim().length > 15 || input.trim().length < 3) {
    this.errorsArr.push('please make sure your ' + label + ' is from 3-15 characters long')
  }
};

module.exports = error;
