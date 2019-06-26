function VowelSquare(strArr) { 

 for(i=0;i<=strArr.length - 1;i++){
     
     for(j=1;j<=strArr[i].length - 1;j++){
         
         if(strArr[i][j].match(/a|e|i|o|u/g) && strArr[i][j - 1].match(/a|e|i|o|u/g)){
             
             if(strArr[i + 1] !== undefined && strArr[i + 1][j].match(/a|e|i|o|u/g) && strArr[i + 1][j - 1].match(/a|e|i|o|u/g)){
                var row = i; 
                row = row.toString();
                var column = j - 1;
                column = column.toString();
                return row + "-" + column;
             }
         }
    }
 }
 return "not found";
}
console.log(VowelSquare(["aqrst", "ukaei", "ffooo"]));
