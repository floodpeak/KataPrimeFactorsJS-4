module.exports = function(number){
  var results = []
  if(number % 2 === 0 && number > 2){
    results.push(2)
    number /= 2
  }
  if(number > 1){
    results.push(number)
  }
  return results
}
