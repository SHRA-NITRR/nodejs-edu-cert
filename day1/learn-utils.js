const utils= require('util');
const text= "Congratulations %s on ur %dth Birthday";

const x=utils.format(text, 'Shravan', 30);
console.log(x);