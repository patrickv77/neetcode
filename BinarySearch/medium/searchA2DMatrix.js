/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  // find the row to search
  let low = 0;
  let high = matrix.length - 1;
  let mid = Math.ceil((low + high) / 2);
  let foundRow = false;

  while(!foundRow) {
    if(matrix[mid][0] < target){
      if(mid < high){
        if(matrix[mid+1][0] < target){
          low = mid;
          mid = Math.ceil((low + high) / 2);
        }else{
          foundRow = true;
        }
      }else{
        foundRow = true;
      }
    }else if (matrix[mid][0] > target) {
      if(mid > low) {
        high = mid;
        mid = Math.ceil((low + high) / 2);
      }else{
        foundRow = true;
      }
    }else{
      // if target is === to matrix[mid][0] return true, it is found
      return true;
    }
  }

  // search the row
  for(let i = 0; i < matrix[mid].length; i++) {
    if(matrix[mid][i] === target) return true; 
  }

  // return true or false
  return false;
};

console.log(searchMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 17));