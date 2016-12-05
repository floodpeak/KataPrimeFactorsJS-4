module.exports = function(number){
  var results = []
  var base = 2
  if(number % base === 0){
    results.push(base)
    number /= base
  }
  if(number === 4){
    results.push(base)
    number /= base
  }
  if(number > 1){
    results.push(number)
  }
  return results
}
