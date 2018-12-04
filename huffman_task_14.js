function freq(message){
   countObj={};
   for(x of message){
      if (countObj[x]===undefined){countObj[x]=1;}
      else{countObj[x]+=1;};
   }
   return countObj
};



function sortFreq(freq){
   d=[]
   for (x of Object.keys(freq)){
   d.push([freq[x],x])
   }
   return d.sort();
};

function buildTrimTree(c){
   var tuples=[];
   Object.assign(tuples,c);
   while (tuples.length>1) {
        var leastTwo = tuples.slice(0,2);                  //get the 2 to combine
        var theRest  = tuples.slice(2);                        //  # all the others
        var combFreq = leastTwo[0][0] + leastTwo[1][0];   //  # the branch points freq
        //console.log([combFreq,[leastTwo[0][1],leastTwo[1][1]]])
        theRest.push([combFreq,[leastTwo[0][1],leastTwo[1][1]]]);
        tuples=theRest.sort();
   }
    return tuples[0][1];
}

function assignCodes(node,codes,pat=''){
if (typeof(node) === typeof("")){
   codes[node] = pat;}
   else{
      //console.log(pat)
      assignCodes(node[0], codes,pat+"0")  
      assignCodes(node[1], codes,pat+"1")
};
};

function encode(message,code){
   var out=''
   for (x of message){
      out+=code[x]
   }
   return out
}

function decode(tree,message){
     var output = "";
     var p = tree;
     for (bit of message){
         if (bit === '0'){ p = p[0]} 
         else            {p = p[1]}   
         if (typeof(p) == typeof("")){ 
             output += p;           
             p = tree;}
     }
   return output
}





mes="holy shit!"
var a=sortFreq(freq(mes));
var b=buildTrimTree(a);
//console.log("\nsortFreq\n",require('util').inspect(a,false,100));
//console.log("\nencode tree\n", require('util').inspect(b,false,100));

assignCodes(b,d);
e=encode(mes,d)
f=decode(b,e)
//console.log("\nassign codes\n",d);
//console.log("\nencode\n",e);
console.log(mes)
console.log("decoded\n",f);



