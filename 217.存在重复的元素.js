/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //此题没有限制数组元素为正整数，所以不能使用哈希表 将元素放在对应索引下的思路，如果是负数就没法放置
    
    //思路1,Set自动过滤重复元素的特性
    //return [...new Set(nums)].length !== nums.length

    //思路2，定义obj,按照obj不存在重复属性的特性,空间复杂度和时间复杂度都为O(n)
    // let obj = {}
    // for(let num of nums) {
    //     //不直接使用obj[num]，是防制obj[num] = 0的情况
    //     if(obj.hasOwnProperty(num)) {
    //         return true
    //     }
    //     obj[num] = num
    // }
    // return false

    //思路3 先排序再比较,性能最好，时间复杂度O(n),空间复杂度O(1)
    nums = nums.sort()
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] === nums[i + 1]) {
            return true
        }
    }
    return false
};
// @lc code=end

