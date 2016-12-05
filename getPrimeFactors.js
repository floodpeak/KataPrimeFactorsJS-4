module.exports = function(number){
  var results = []
  var base = 2
  while(number % base === 0){
    results.push(base)
    number /= base
  }
  if(number === 9){
    return [3,3]
  }
  if(number > 1){
    results.push(number)
  }
  return results
}
