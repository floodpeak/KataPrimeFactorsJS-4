module.exports = function(number){
  var results = []
  for(var base = 2;base <= number;base++)
    for(;number % base === 0;number /= base)
      results.push(base)
  return results
}
