function CorrectPath(str) { 
var x = 0;
  var y = 0;
  var array = [];
  var countQ = str.match(/[?]/g).length;
  var strA = str.split('');
  for (let i = 0; i < strA.length; i++){
      strA[i] === 'u'? x = x - 1 : null;
      strA[i] === 'd'? x = x + 1 : null;
      strA[i] === 'r'? y = y + 1 : null;
      strA[i] === 'l'? y = y - 1 : null;
  }
  function addX (){
      while(x !== 4){
          if (x < 4){
              x = x + 1;
              array.push('d');
          }
          else {
              x = x - 1;
              array.push('u');
          }
      }
  }
  function addY (){
      while (y !== 4){
          if (y < 4){
              y = y + 1;
              array.push('r');
          }
          else {
              y = y - 1;
              array.push('l');
          }
      }
  }
  if (x < y){
      addY();
      addX();
  }
  if (x >= y){
      addX();
      addY();
  }
  while (array.length < countQ){
      if (array[array.length - 1] === 'r'){
          y = y + 1;
          array.push('r');
          addY();
      }
      if (array[array.length - 1] === 'l'){
          y = y - 1;
          array.push('l');
          addY();
      }
      if (array[array.length - 1] === 'd'){
          x = x + 1;
          array.push('d');
          addX();
      }
      if (array[array.length - 1] === 'u'){
          x = x - 1;
          array.push('u');
          addX();
      }
      
  }
  for (let i = 0; i < strA.length; i++){
      if (strA[i] === '?'){
          strA[i] = array.shift();
      }
  }
  return strA.join('');
}
console.log(CorrectPath("drdr??rrddd?"));                        
