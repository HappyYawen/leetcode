/**
 * 给定一个数组，使用插入排序的方法排序
 * [3，4，2，1，5，6]
 * 思路：
 * 1、假定该数组为两部分，第一部分是默认的数组[3],另一部分是需要插入到该数组的元素
 * 2、从第一个需要插入的元素4开始，与现有数组，从后往前比较。如果当前数大于需要插入的数，则该数字往后挪一位给该数字腾出位置，如果当前数小于需要插入的数，则直接插入在末尾。
 * 3、插入下一个元素，思路同上，直到元素插入完为止。
 * 最好的情况，原本就是顺序排序，时间复杂度O(n)
 * 最差的情况，数组是倒序排序的，时间复杂度O(n^2)
 */
function insertSort(arr) {
    let j = 1
    while(j < arr.length) {
        let i = j - 1, temp = arr[j]
        while(temp < arr[i] && i >= 0) {
            arr[i+1] = arr[i]
            i--
        }
        arr[i+1] = temp
        j++
    }
    console.log(arr)
    return arr
}
insertSort([3,4,2,1,5,6])