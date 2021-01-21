/**
 * 虽然快速排序的平均时间复杂度是O(nlogn) ，但最坏情况下的时 间复杂度是O(n^2 ),因为可能选择的基准元素是最大值或者最小值
 * 时间复杂度O(nlogn)
 * 实现方法：
 * 1. 双边循环法。 2. 单边循环法。
 * 双边循环法使用双指针
 */
//双边循环法
function quickSort(arr, startIndex, endIndex) {
    if(startIndex >= endIndex) {
        return;
    }
    //基准元素的索引
    let pivotIndex =  partition(arr, startIndex, endIndex) //分治
    quickSort(arr, startIndex, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1,endIndex)
}
/**
 * 找到基准元素，同时对
 * @param {*} arr 
 * @param {*} startIndex 
 * @param {*} endIndex 
 */
function partition(arr, startIndex, endIndex) {
    let left = startIndex, right = endIndex
    // 取第1个位置（也可以选择随机位置）的元素作为基准元素
    let privot = arr[startIndex]
    while(left !== right) {
        //控制right 指针比较并左移
        while(arr[right] > privot && left < right) {
            right--
        }
        //控制left指针比较并右移
        while(left < right && arr[left] <= privot) {
            left++
        }
        //交换left和right 指针所指向的元素
        if(left < right) {
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
        }
    }
    //pivot 和指针重合点交换
    arr[startIndex] = arr[left]
    arr[left] = privot

    return left;
}
let array = [3,4,2,1,5,6]
quickSort(array, 0, array.length - 1)
console.log(array)