
exports.min = function min (array) {
  if (array == null) {
    return 0;
  };
  if (array.length == 0) {
    return 0;
  };
  let min = Infinity;
  for (let i=0; i < array.length; i++){
    if(array[i] < min) {
      min = array[i];
    }
  }
  return min;
};

exports.max = function max (array) {
  if (array == null) {
    return 0;
  };
  if (array.length == 0) {
    return 0;
  };
  let max = !Infinity;
  for (let i=0; i < array.length; i++){
    if(array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

exports.avg = function avg (array) {
  if (array == null) {
    return 0;
  };
  if (array.length == 0) {
    return 0;
  };
  let sum = 0;
  let length = array.length;
  for (let i=0; i < length; i++){
    sum += array[i];
  }
  let ans = sum / length;
  return ans;
};
