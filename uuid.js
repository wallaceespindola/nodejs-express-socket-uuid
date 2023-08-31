const { v4: uuidv4 } = require('uuid');
const generatedUUID = uuidv4();

const moment = require('moment');
const formattedDate = moment().format('YYYY-MM-DD HH:mm');

console.log(`####### NODE UUID GENERATOR #######`);

console.log(`Generated UUID: ${generatedUUID}`);

console.log(`Done on: ${formattedDate}`);