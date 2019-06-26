function LongestWord(sen) { 
    
    sen = sen.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
   var strings = sen.split(" ");
   var long = 0;
  
   
   for( var i = 0 ; i < strings.length ; i++ ){
       
       if(strings[i].length > long){
           
           sen = strings[i]; 
           long = strings[i].length;
       }
       
   }
 // code goes here  
 return sen; 
        
}
  
// keep this function call here 
LongestWord(readline());                            
