// Apply Transform Over Each Element in Array

var map = function(arr, fn) {
   
   let res = [];
   for (const i in arr){
        res.push(fn(arr[i],Number(i)))
}
  return res;
  }
