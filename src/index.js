module.exports = function getZerosCount(number, base) {
  
  var zero = 0;
  
  for (var i = 0; i <= number; i += base) {
    
    var zapas = i;
    
    if (i > 0) {
      var newBaseNumber = []; 
    
      while (zapas > 0) {
        var helpNumber =zapas;
        zapas = Math.floor(zapas / base);
        
        var restNumber = helpNumber - zapas * base;
        newBaseNumber.push(restNumber);//записываю остатки в массив
      }
  
      newBaseNumber.reverse();//переворачиваю его
      var stringNumber = newBaseNumber.join('');//преобразую в строку
      var notStringNumber = Number(stringNumber);//преобразую в число
      
      var zeroNumber = notStringNumber;
      var temp = notStringNumber % 10;
  
      while ((zeroNumber % 10) === 0) {
        zeroNumber = zeroNumber / 10;
        zero += 1;
      }
    }
  }
  
  return zero;
  
}
