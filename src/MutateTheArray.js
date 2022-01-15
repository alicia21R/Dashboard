const MutateTheArray =(a) =>{
  var b;
  for(var n=0; n<= (a.length-1); n++){
      if(n === 0){
          b[n]=0+ a[n] +a[n+1]
      } else if(n === (a.length-1)){
        b[n]=[n-1] + a[n] +0
      } else{
          b[n]=a[n-1] + a[n] +a[n+1]
      }
  }
  return b;
}