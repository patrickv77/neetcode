/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function(matrix, target) {
//   // find the row to search
//   let low = 0;
//   let high = matrix.length - 1;
//   let mid = Math.ceil((low + high) / 2);
//   let foundRow = false;

//   while(!foundRow) {
//     console.log(low,mid,high)
//     if(matrix[mid][0] < target){
//       if(mid < high){
//         if(matrix[mid+1][0] === target){
//           return true;
//         }else if(matrix[mid+1][0] < target){
//           low = mid;
//           mid = Math.ceil((low + high) / 2);
//         }else{
//           foundRow = true;
//         }
//       }else{
//         foundRow = true;
//       }
//     }else if (matrix[mid][0] > target) {
//       if(mid > low) {
//         if(matrix[mid-1][0] === target) {
//           return true;
//         }else if(matrix[mid-1][0] > target){
//           high = mid;
//           mid = Math.floor((low + high) / 2);
//         }else{
//           mid = low
//           foundRow=true;
//         }
//       }else{
//         foundRow = true;
//       }
//     }else{
//       // if target is === to matrix[mid][0] return true, it is found
//       return true;
//     }
//   }
//   console.log(low,mid,high)
//   // search the row
//   for(let i = 0; i < matrix[mid].length; i++) {
//     if(matrix[mid][i] === target) return true;
//   }

//   // return true or false
//   return false;
// };

// console.log(searchMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 17));
// console.log(searchMatrix([[-10,-8],[-6,-5],[-2,-2],[-1,0],[3,4],[7,7],[8,9],[10,10],[11,11],[12,14],[15,16],[17,19],[20,21],[22,22],[25,27],[28,30],[32,32],[35,36]],16));
// console.log(searchMatrix([[1],[3],[5]],0));

var searchMatrix = function (matrix, target) {
  let low = 0;
  let high = matrix.length - 1;
  let mid = Math.ceil((low + high) / 2);
  let foundRow = false;

  do {
    if (matrix[mid][0] === target) return true;
    else if (
      matrix[mid][0] < target &&
      matrix[mid][matrix[mid].length - 1] >= target
    )
      foundRow = true;
    else {
      if (target < matrix[mid][0]) {
        high = mid;
        mid = Math.floor((low + high) / 2);
      } else {
        low = mid;
        mid = Math.ceil((low + high) / 2);
      }
    }
  } while (!foundRow && mid !== low && mid !== high);

  // search the row
  for (let i = 0; i < matrix[mid].length; i++) {
    if (matrix[mid][i] === target) return true;
  }

  return false;
};

// console.log(searchMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 16));
console.log(searchMatrix([[-10,-8],[-6,-5],[-2,-2],[-1,0],[3,4],[7,7],[8,9],[10,10],[11,11],[12,14],[15,16],[17,19],[20,21],[22,22],[25,27],[28,30],[32,32],[35,36]],-10));
console.log(searchMatrix([[1], [3]], 1));
