function FirstReverse(str) { 
  var newString = "";
for (var i = str.length - 1; i >= 0; i--) {   
    newString = newString + str.charAt(i);
  }
  return newString;
}   
FirstReverse(readline()); 