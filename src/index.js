module.exports = function getZerosCount(n, base) {
  let maxSimpleMultiplier=2;
  let SimpleMultiplier=[];
  let i=0;
  let copyBase=base;
  let zerosCount=0;
  let minZerosCount=999999999999;
  let extraDivide=0;
  let arrDivide=[];
  let number=n;
  while (copyBase!=1){
    if(copyBase%maxSimpleMultiplier==0){
      copyBase/=maxSimpleMultiplier;
      extraDivide++;
      arrDivide[i]=extraDivide;
      SimpleMultiplier[i]=maxSimpleMultiplier;
    }
    else
    { 
      if (extraDivide!=0)i++;
      maxSimpleMultiplier++;
      extraDivide=0;
    }
  }
  for (i=0;i<SimpleMultiplier.length;i++){
    number=n;
    zerosCount=0;
    while(number>0){
      number/=SimpleMultiplier[i];
      number=Math.floor(number);
      zerosCount+=number;
    }
    zerosCount=Math.floor(zerosCount/arrDivide[i])
    if(minZerosCount>zerosCount)minZerosCount=zerosCount;
  }
 return minZerosCount; // your implementation
}