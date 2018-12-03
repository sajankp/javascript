var square1=function(num){
   return num*num;
}

function square2(num){
   return num*num;
}

square3=(num) => {
   return num*num;
}
/*
console.log(square1(5))
console.log(square2(6))
console.log(square3(7))
*/

var minimum=function(x,y){
   if (x>y){ return y}
   else{ return x}
}

function isOdd(x){
   if(x===0){
      return false;}
   else if(x===1){
      return true;}
   else if(x<0){
      return isOdd(-x);}
   else{
      return isOdd(x-2);}
}

function countBs(x){
   count=0
   for(i=0;i<x.length;i++){
      if(x[i]==='B'){
         count+=1;
      }
   }
   return count
}


function countChar(a,b){
   count=0
   for(var i=0;i<a.length;i++){
      if(a[i]===b){
         count+=1;
      }
   }
   return count;
}

console.log(countChar('sajan kuttipuravan','a'))
console.log(countBs('BlackBBB'))
console.log(minimum('8','9'))
console.log(isOdd(9999))
console.log(isOdd(-1))



