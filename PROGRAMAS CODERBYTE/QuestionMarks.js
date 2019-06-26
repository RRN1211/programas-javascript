function QuestionsMarks(str) { 
	var res=false;
	for(var i=0;i<str.length;i++){
		for(var j=i+1;j<str.length;j++){
			if(Number(str[i])+Number(str[j])===10){
				res=true;
				if(str.slice(i,j).split('?').length-1<3){
					return false
				}
			}
		}
	}
	return res;
}
console.log(QuestionsMarks("acc?7??sss?3rr1??????5"));
