const path = require('path');

console.log(path.sep) //prints separator

const filePath = path.join('/Tutorial', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'Tutorial', 'subfolder', 'test.txt')
console.log(absolute)