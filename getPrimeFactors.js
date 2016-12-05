module.exports = function(number){
  var results = []

  for(var base = 2;base < number;base++){
    while(number % base === 0){
      results.push(base)
      number /= base
    }
  }
  if(number > 1){
    results.push(number)
  }
  return results
}
