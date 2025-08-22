var containsDuplicate = function(arr){
    arr.sort();
      for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
         
            if(arr[i]== arr[j]){
              console.log(i, j)  
              return true;
            }else{
              return false;
            }
          }
    }
}
let arr = [1,1,1,3,3,4,3,2,4,2];
console.log("Contains Duplicate", containsDuplicate(arr));