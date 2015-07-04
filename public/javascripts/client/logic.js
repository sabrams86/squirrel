var cookieParser = function (cookie) {
  var object = {};
  var color = cookie.split(';');
  color.forEach(function (value) {
    var clean = value.split('=');
    object[clean[0].trim()] = object[clean[0].trim()] || "";
    object[clean[0].trim()] = clean[1];
  });
  return object;
};

var logArray = function (array) {
  return array.join('<br>');
}

var error = function (input) {
  this.errorsArr = [];
};

error.prototype.validateInput = function (input, label) {
  if (input.trim().length === 0) {
    this.errorsArr.push('please enter a valid ' + label)
  }
  else if (input.trim().length > 15) {
    this.errorsArr.push(label + ' is too long. Make it less than 15 charecters.')
  }
  else if (input.trim().length < 3) {
    this.errorsArr.push(label + ' is too short. Make it more than 3 characters')
  }
};

error.prototype.validateEmail = function (input) {
  if (input.trim().length === 0) {
    this.errorsArr.push('please enter a valid email')
  }
  else if (input.indexOf('@') < 0) {
    this.errorsArr.push('Invalid email')
  }
  else if (input.trim().length > 30) {
    this.errorsArr.push('email is too long. Make it less than 30 charecters.')
  }
  else if (input.trim().length < 3) {
    this.errorsArr.push('email is too short. Make it more than 3 characters')
  }
};

var error = new error;
