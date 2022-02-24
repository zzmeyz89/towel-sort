
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if (matrix == undefined) {
    console.log ('empty')
    return [];
  } else {
    let arr = [];
    matrix.forEach((element, index) => {
    index%2 ? arr = arr.concat(element.sort(compareNumbers)) : arr = arr.concat(element);
    });
    return arr;
  }
  
}

function compareNumbers(a, b) {
  return b - a;
}