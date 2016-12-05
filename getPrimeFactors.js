module.exports = function(number){
  if(number % 2 === 0 && number > 2){
    return [2,number/2]
  }
  if(number > 1){
    return [number]
  }
  return []
}
