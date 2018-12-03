function arrayToList(a){
   out=[]
   for(x=(a.length-1);x>=0;x--){
      if (x===(a.length-1)){
         out={value:a[x],
            rest:null}
      }
      else{
         out={value:a[x],rest:out}
      }
   }
   return out
}

console.log(require('util').inspect(arrayToList([99,88,77,66]),true,10))

function listToArray(a){
   out=[]
   while(a.rest!==null){
      out.push(a.value);
      a=a.rest;
   };
   out.push(a.value)
   return out;
}

console.log(listToArray(arrayToList([99,88,77,66])))

function prepend(list,elt){
   return out={value:elt,rest:list}}

console.log(require('util').inspect(prepend(arrayToList([99,88,77,66]),111),true,10))

function nth(list,pos){
   var a=list.rest
   for(i=0;i<pos-1;i++){
      if (a.rest===null){
         return undefined}
      a=a.rest;}
   return a.value}

console.log(nth(prepend(arrayToList([99,88,77,66]),111),4))
console.log(nth(prepend(arrayToList([99,88,77,66]),111),9))


