class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let res = [];
        const idx = {};
        for(let i=0;i<nums.length;i++) {
            idx[nums[i]] = i;
        }

        for(let i=0;i<nums.length;i++){
            let complement = target - nums[i];
            if(idx[complement] != undefined && idx[complement] != i){
                return [i,idx[complement]];
            }
        }
        return [];
    }
}
