class Solution {
  hasDuplicate(nums) {
    const seen = new Set();
    for(const num of nums) {
      if(seen.has(num)) {
        return true;
      }
      seen.add(num);
    }
    return false;
  }
}

const obj = new Solution();
const nums = [1,2,3,3];
console.log(obj.hasDuplicate(nums));
