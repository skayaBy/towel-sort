
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }

  let arr=[];
  for (let i=0; i<matrix.length; i++) {
     /* if (i%2!=0) {
      matrix[i].sort(function(a, b){return b-a});
    }*/
    for (let j=0; j<matrix[i].length; j++) {
        let ind = i%2 === 0 ? j  : (matrix[i].length - j - 1)
        // arr.push(matrix[i][j]);
         arr.push(matrix[i][ind]);
    }
   }
  return arr;
}
