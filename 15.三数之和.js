/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    let len = nums.length,
        res = []
    if (nums[0] > 0 || nums[len - 1] < 0) {
        return res
    }
    for (let i = 0; i < len - 2;) {
        if (nums[i] > 0) { // 优化2: 最左值为正数则一定无解
            break;
        }
        let f = i + 1,
            l = len - 1
        do {
            if (f >= l || nums[i] * nums[l] > 0) {
                break;
            }
            let sum = nums[i] + nums[f] + nums[l]
            if (sum === 0) {
                res.push([nums[i], nums[f], nums[l]])
            } 
            if (sum <= 0) {
                while(f<l && nums[f] === nums[++f]){} // 如果相等就跳过
            } else {
                while(f<l && nums[l] === nums[--l]){} // 如果相等就跳过
            }
        } while (f < l)
        while (nums[i] === nums[++i]) {}
    }
    return res
};
// @lc code=end