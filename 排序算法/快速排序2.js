/**
 * 虽然快速排序的平均时间复杂度是O(nlogn) ，但最坏情况下的时间复杂度是O(n^2 ),因为可能选择的基准元素是最大值或者最小值
 * 时间复杂度O(nlogn)
 * 空间复杂度O(logn)
 * 实现方法：
 * 1. 双边循环法。 2. 单边循环法。
 * 单边循环法使用单指针
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
    // 取第1个位置（也可以选择随机位置）的元素作为基准元素
    let pivot = arr[startIndex]
    let mark = startIndex
    for(let i = startIndex + 1; i <= endIndex; i++) {
        if(arr[i] < pivot) {
            mark++
            let p = arr[mark]
            arr[mark] = arr[i]
            arr[i] = p
        }
    }
    arr[startIndex] = arr[mark]
    arr[mark] = pivot
    return mark
}
let array = [3,4,2,1,5,6]
quickSort(array, 0, array.length - 1)
console.log(array)