/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; ++i){
    for (let j = 1; j < nums.length; ++j) {
      if (compareIndices(i, j) && sumsEqualTarget(nums[i], nums[j], target)) {
        return [i, j];
      }
    }
  }
};

const compareIndices = (i, j) => {
return i !== j;
}

const sumsEqualTarget = (n1, n2, target) => {
return n1 + n2 === target;
}