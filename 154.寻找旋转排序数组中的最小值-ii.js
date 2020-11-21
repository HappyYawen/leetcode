/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    //思路是是用二分法
    let begin = 0,
        last = nums.length - 1
    let midIndex = (last + begin) >> 1
    while (begin <= last) {
        if (nums[midIndex] > nums[last]) {
            begin = midIndex + 1
        }
        //失误点：当两值相等时，无法判断是在左边还是右边
        else if (nums[midIndex] === nums[last]) {
            last = last - 1
        } else {
            last = midIndex
        }
        midIndex = (last + begin) >> 1
    }
    return nums[begin]
};
// @lc code=end