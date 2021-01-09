/**
 * 双重循环排序
 * 正向排序，向后冒泡，每一轮都将该轮最大值移到最后
 * 时间复杂度O(n^2)
 */
function bubbleSort(num) {
    for (let i = 0; i < num.length - 1; i++) {
        for (let j = 1; j < num.length - i; j++) {
            if (num[j - 1] > num[j]) {
                let temp = num[j - 1]
                num[j - 1] = num[j]
                num[j] = temp
            }
        }
    }
    console.log(num)
    return num
}
//优化
function bubbleSort1(num) {
    //最后一次交换元素的索引
    let lastExchangeIndex = 0
    //比较元素的右边界
    let sortBorder = num.length - 1
    for (let i = 0; i < num.length - 1; i++) {
        //标记flag
        let flag = false
        for (let j = 1; j < sortBorder; j++) {
            if (num[j - 1] > num[j]) {
                let temp = num[j - 1]
                num[j - 1] = num[j]
                num[j] = temp
                flag = true
                //最后一次交换元素的位置，说明后面的元素都已经排好序的，不需要重复比较了
                lastExchangeIndex = j
            }
        }
        //如果没有移动，说明已经排好序了，直接跳出循环
        if (!flag) {
            break;
        }
        sortBorder = lastExchangeIndex
    }
    console.log(num)
    return num
}
bubbleSort([3, 4, 2, 1, 5, 6])
bubbleSort1([3, 4, 2, 1, 5, 6])