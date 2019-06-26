function EightQueens(strArr) { 
//strip out the numbers into an array of arrays
arr = [];
for (i = 0; i < strArr.length; i++){
  arr.push([]);
  arr[i].push(parseInt(strArr[i][1]))
  arr[i].push(parseInt(strArr[i][3]))  
}

//build an i j=i+1 comparison loop
state = true;
for (i = 0; i < arr.length; i++){
  for (j = i+1; j < arr.length; j++){
    if (QueenChecker(arr[i][0],arr[i][1],arr[j][0],arr[j][1])===false){ return strArr[i]}
  }
}
return state;

//build a function that compares for matching xs matching ys and diagonal if the slope is 1 or -1
function QueenChecker(ax,ay,bx,by){
  if (ax === bx){return false}
  if (ay === by){return false}
  if ( Math.abs((ax-bx)/(ay-by))===1){return false}
  return true;
    }

}
console.log(EightQueens(["(2,1)", "(4,3)", "(6,3)", "(8,4)", "(3,4)", "(1,6)", "(7,7)", "(5,8)"]));
