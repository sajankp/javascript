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


