function FirstFactorial(num) { 
  var factorial = 1;
  for (var i = 1; i <= num; i++) {  
  factorial = factorial * i;
  }
  return factorial;         
}
   
FirstFactorial(4); 
console.log(FirstFactorial(4))