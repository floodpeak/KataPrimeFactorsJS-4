module.exports = function(number){
  var results = []

  for(var base = 2;base < number;base++){
    for(;number % base === 0;number /= base){
      results.push(base)
    }
  }
  if(number > 1){
    results.push(number)
  }
  return results
}
