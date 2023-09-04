//we can name the exports any thing we want.
const names = require('./Tutorial/4-names')
const sayHi = require('./Tutorial/5-utilis')
const data = require('./Tutorial/6-alternative-module')
require('./Tutorial/7-mind-greneade')

// console.log(names) //for the first require only

sayHi('susan')  
sayHi(names.john)
sayHi(names.peter) 