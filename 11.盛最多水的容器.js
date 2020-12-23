/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0, slow = 0, last = height.length-1
    //直接双重循环，每两根之间都对比一次，时间复杂度O(n^2),空间复杂度O(1)
    // for(let i = 0; i < height.length-1; i++) {
    //     let cur = 0
    //     for(let j = i+1; j < height.length; j++) {
    //         cur = Math.max(cur,Math.min(height[i],height[j]) * (j-i))
    //     }
    //     res = Math.max(res, cur)
    // }
    //思路2，双指针法，只找最优解
    while(slow < last) {
        res = Math.max(res, Math.min(height[slow], height[last]) * (last-slow))
        if(height[slow] <= height[last]) {
            slow ++
        } else {
            last--
        }
    }
    return res
};