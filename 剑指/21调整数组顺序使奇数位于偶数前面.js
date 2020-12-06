/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    //空间复杂度O(n),时间复杂度O(n)
    // let res = []
    // nums.forEach(v => {
    //     if(v % 2 === 0) {
    //         res.push(v)
    //     } else {
    //         res.unshift(v)
    //     }
    // })
    // return res
    //使用首尾指针,空间复杂度O(1),时间复杂度O(n)
    let i = 0, j = nums.length - 1
    while(i < j) {
        if (nums[i] % 2 === 0 && nums[j] % 2 !== 0) {
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++
            j--
        } else if (nums[i] % 2 !== 0) {
            i++
        } else {
            j--
        }
    }
    return nums
};