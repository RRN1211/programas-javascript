function PentagonalNumber(num) { 
 var res = 1;
 for(var i = 1; i < num; i++) res += i * 5;
 return res;
}
console.log(PentagonalNumber(5));
