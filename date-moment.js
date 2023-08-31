const moment = require('moment');

console.log(`####### NODE DATE FORMAT GENERATOR WITH MOMENT #######`);

const formattedDate = moment().format('YYYY-MM-DD');
console.log(formattedDate);  // Outputs: YYYY-MM-DD

const readableDate = moment().format('MMMM Do YYYY');
console.log(readableDate);  // Outputs: August 31st 2021 (depending on the actual date)
