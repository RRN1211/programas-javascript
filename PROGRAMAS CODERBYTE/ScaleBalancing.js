function ScaleBalancing(strArr) { 
  var scale = JSON.parse(strArr[0]);
  var weights = JSON.parse(strArr[1]);

  if (scale[0] == scale[1]) return "";

  function isEqual(scaleArr, weight1, weight2) {
   if(scaleArr[0] + weight1 + weight2 == scale[1]) return true;
   if(scaleArr[0] + weight1 == scale[1] + weight2) return true;
   if(scaleArr[0] + weight2 == scale[1] + weight1) return true;
   if(scaleArr[0] == scale[1] + weight1 + weight2) return true;
   return false;  
  }
  
  for(let i = 0; i < weights.length; i++) {
    if(isEqual(scale,weights[i],0)) {
        return weights[i].toString();
    }
    for(let j = i+1; j < weights.length; j++) {
      if(isEqual(scale,weights[i],weights[j])) {
        return weights[i] + "," + weights[j];
      }
    }  
  }
  return "not possible";         
}
console.log(ScaleBalancing(["[3, 4]", "[1, 2, 7, 7]"]));
