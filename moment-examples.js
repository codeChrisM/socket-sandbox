var moment = require("moment");

var now = moment();


console.log(now.format());
console.log(now.format('X'));
console.log(now.valueOf());

var timestamp =2353525254352;
var timestampMoment = moment.utc(timestamp);

console.log (timestampMoment.local().format('h:mm a')); // 11:06 am





// console.log(now.format());
// console.log(now.format("MMM Do YYYY, h:mma"));