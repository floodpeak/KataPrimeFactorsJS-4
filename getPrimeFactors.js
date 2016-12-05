module.exports = function(number){
  var results = []
  var base = 2
  while(base < number){
    while(number % base === 0){
      results.push(base)
      number /= base
    }
    base ++
  }
  if(number > 1){
    results.push(number)
  }
  return results
}
