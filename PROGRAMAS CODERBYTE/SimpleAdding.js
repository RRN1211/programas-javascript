function SimpleAdding(num) { 
    var answer = 0;
    for (var i = 1; i <= num; i++) {
      answer = answer + i;
    } 
    return answer;        
  }
console.log(SimpleAdding(4));