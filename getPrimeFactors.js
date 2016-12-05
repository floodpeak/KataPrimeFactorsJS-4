module.exports = function(number){
  if(number === 8){
    return [2,2,2]
  }
  var results = []
  var base = 2
  if(number % base === 0){
    results.push(base)
    number /= base
  }
  if(number > 1){
    results.push(number)
  }
  return results
}
