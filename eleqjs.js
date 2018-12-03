
var ques2=function(){
	for (var x=0;x<101;x++){
		if (x%3===0 && x%5 === 0){
			console.log('FuzzJazz');}
		else if (x%3 === 0){
			console.log('Fuzz');}
		else if (x%5 === 0){
			console.log('Jazz');}
		else{
			console.log(x);}
	}
}

ques2()

/*
var ques2New=function(){
	for (var x=0;x<101;x++){
      var word=''
      if (x%3===0 && x%5 === 0){
         word='FizzJazz';
      }
*/


var ques3=function(x){
   var board=[]
   for (var u=0; u < x;u++){
      for(var v=0;v<x;v++){
         if((u+v)%2===0){
            board.push('#');
         }
         else{
            board.push(' ');
         }
      }
      board.push('\n');
   }
   console.log(board.join(""))
}


/*

var ques3=function(x){
   var board=[]
   for (var u=1; u <= (x*x)+1;u++){
      if (u%2===0 && u%x!==0){
        board.push('#');}
      if (u%2!==0 && u%x!==0){
        board.push(' ');}
      if (u%x===0){
        board.push('\n');}
   }
   console.log(board.join(""));
}

*/

ques3(8)
ques3(11)
