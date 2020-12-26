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
    for (let i = 0; i < num.length - 1; i++) {
        //标记flag
        let flag = false
        for (let j = 1; j < num.length - i; j++) {
            if (num[j - 1] > num[j]) {
                let temp = num[j - 1]
                num[j - 1] = num[j]
                num[j] = temp
                flag = true
            }
        }
        //如果没有移动，说明已经排好序了，直接跳出循环
        if (!flag) {
            break;
        }
    }
    console.log(num)
    return num
}
bubbleSort([3, 4, 2, 1, 5, 6])
bubbleSort1([3, 4, 2, 1, 5, 6])