var validator = require('validator');

console.log(`####### NODE E-MAIL VALIDATOR #######`);

const email = 'foo@bar.com'
var isValid = validator.isEmail(email); //=> true
console.log(`Email [${email}] is valid ? ` + isValid);

const email2 = 'foobar-com'
var isValid = validator.isEmail(email2); //=> false
console.log(`Email [${email2}] is valid ? ` + isValid);

const email3 = 'foo@bar'
var isValid = validator.isEmail(email3); //=> false
console.log(`Email [${email3}] is valid ? ` + isValid);
