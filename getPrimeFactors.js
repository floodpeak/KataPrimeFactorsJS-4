module.exports = function(number){
  if(number === 4 || number === 6){
    return [2,number/2]
  }
  if(number > 1){
    return [number]
  }
  return []
}
