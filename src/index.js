module.exports = function getZerosCount(number, base) {
  let maxSimpleMutiplier=2;
  let copyBase=base;
  let zerosCount=0;
  let extraDivide=0;
  while (copyBase!=1){
    if(copyBase%maxSimpleMutiplier==0){
      copyBase/=maxSimpleMutiplier;
      extraDivide++;
    }
    else {
      maxSimpleMutiplier++;
      extraDivide=0;
    }
  }
  
 while(number>0){
   number/=maxSimpleMutiplier;
   number=Math.floor(number)
   zerosCount+=number;
 }
 return Math.floor(zerosCount/extraDivide); // your implementation
}