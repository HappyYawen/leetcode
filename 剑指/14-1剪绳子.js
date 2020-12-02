/**
 * @param {number} n
 * @return {number}
 * 动态规划
 * 时间复杂度O(n^2)
 * 空间复杂度O(n)
 */
var cuttingRope = function(n) {
    let dp = []
    dp[0] = dp[1] = 0
    for(let i = 2; i <= n; i++) {
         let curMax = 0
         for(let j = 1; j < i; j++) {
            curMax = Math.max(curMax, Math.max(j * (i - j), j * dp[i - j]))
         }
         dp[i] = curMax
     }
     return dp[n]
 };