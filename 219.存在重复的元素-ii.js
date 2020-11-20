/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if(k < 0 || nums.length < 2) {
        return false
    }
    // let map = {}
    // let i = 0
    // while(i < nums.length) {
    //     if(map.hasOwnProperty(nums[i])) {
    //         let diff = Math.abs(map[nums[i]] - i)
    //         if(diff <= k) {
    //            return true 
    //         }
    //     }
    //     map[nums[i]] = i
    //     i++
    // }
    // return false
    
    //思路2快慢指针,时间复杂度O(n^2)
    // let slow = 0, fast = 1
    // while(slow < nums.length) {
    //     if(fast >= nums.length) {
    //         slow++
    //         fast = slow + 1
    //         continue
    //     }
    //     if(nums[slow] === nums[fast] && Math.abs(slow - fast) <= k) {
    //         return true
    //     }
    //     fast ++
    // }
    // return false

    //最佳思路，优化方法1
    let map = new WeakMap()
    let i = 0
    while(i < nums.length) {
        if(map.has(nums[i])) {
            return true
        }
        map.set(nums[i], i)
        if(map.size > k) {
            map.delete(nums[i-k])
        }
        i++
    }
    return false

};
// @lc code=end

