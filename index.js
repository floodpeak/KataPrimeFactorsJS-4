var getPrimeFactors = require('./getPrimeFactors')

var args = process.argv.slice(2)
console.log(getPrimeFactors(+args[0]))
