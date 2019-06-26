function ClosestEnemyII(strArr) { 
var onepos = [], twopos = [];
var len = strArr[0].length

for (i = 0; i < strArr.length; i++ ){
  for (j = 0; j < strArr[0].length; j++){
    if (strArr[i][j] === "1"){ onepos.push(i, j)}
    if (strArr[i][j] === "2"){ twopos.push(i, j)}
    
  }
  
}


// deal with the 4 ways you could count the distance

var ct = 8;
for (i = 0; i < twopos.length; i++){
  var d = (Math.abs(onepos[0]-twopos[i]) + Math.abs(onepos[1]-twopos[i+1]));
  if (d < ct) {ct = d};
  var d = (Math.abs(onepos[0]-twopos[i]) + (len-Math.abs(onepos[1]-twopos[i+1])));
   if (d < ct) {ct = d};
  var d = (len-(Math.abs(onepos[0]-twopos[i])) + (len-Math.abs(onepos[1]-twopos[i+1])));
   if (d < ct) {ct = d};
    var d = (len-(Math.abs(onepos[0]-twopos[i])) + Math.abs(onepos[1]-twopos[i+1]));
   if (d < ct) {ct = d};
  i++
}
if (ct === 8) { return 0 }
return ct;
}
console.log(ClosestEnemyII(["0000", "2010", "0000", "2002"]));
