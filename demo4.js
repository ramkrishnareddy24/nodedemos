var validator = require("validator");
console.log(validator.isEmail('hi@gmail.com'));
console.log(validator.isEmail('higmail.com'));
console.log(validator.isURL('http://www.google.com'));
console.log(validator.isURL('www.google.com'));
console.log(validator.isURL('wwwgooglecom'));


