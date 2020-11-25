/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 利用字典Map键值对的特性
 * 空间换取时间，空间复杂度O(n),时间复杂度O(n)
 */
var twoSum = function(nums, target) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
        let n = nums[i]
        let n2 = target - n
        if(map.has(n2)) {
            return [map.get(n2), i]
        } else {
            map.set(n, i)
        }
    }
};
// @lc code=end
