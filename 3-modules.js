// Modules
//CommonJS, every file is module (by default_
// Modules - encapsulated Code(only share minimum))
 
const names = require('./4-name');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
console.log(names);

console.log(data);
sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);
