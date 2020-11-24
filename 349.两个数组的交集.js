/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 题目中说到，返回的交集是数组，且每个元素唯一，不考虑顺序
 * 总结就是：无序且唯一，这是集合的特性
 * 所以解决思路是使用集合
 * 集合的has时间复杂度是O(1)
 **/
var intersection = function(nums1, nums2) {
    let set1, set2
    if(nums1.length > nums2.length) {
        set1 = new Set(nums2)
        set2 = new Set(nums1)
    } else {
        set1 = new Set(nums1)
        set2 = new Set(nums2)
    }
    return [...set1].filter(v => set2.has(v))
};

// @lc code=end

