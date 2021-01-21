/**
 * 堆排序
 * 时间复杂度O(nlogn)
 * 空间复杂度O(n)
 * 1、把每一个父元素，都做下沉式调整
 * 2、然后得到一个最大堆
 * 3、然后再依次删除每一个堆顶元素，可以得到从小到大顺序排列的数组
 */

function heapSort(arr) {
    //最后一个父元素的索引(arr.length-2)/2
    let len = arr.length
    for (let i = (len - 2) / 2; i >= 0; i--) {
        downAdjust(arr, i, len)
    }

    for (let i = len - 1; i >= 0; i--) {
        //将堆顶最大值移到最后一位，并（假）删除
        let temp = arr[i]
        arr[i] = arr[0]
        arr[0] = temp
        downAdjust(arr, 0, i)
    }
    console.log(arr)
}

//时间复杂度O(logn)
function downAdjust(array, parentIndex, len) {
    let childIndex = parentIndex * 2 + 1
    let temp = array[parentIndex]
    while (childIndex < len) {
        //如果左孩子小于右孩子，则选择右孩子
        if (childIndex + 1 < len && array[childIndex] < array[childIndex + 1]) {
            childIndex++
        }
        //如果较大的孩子，小于父元素，则无需下沉调整，直接跳出
        if (array[childIndex] <= temp) {
            break;
        }
        //无需真正交换，直接赋值即可
        array[parentIndex] = array[childIndex]
        parentIndex = childIndex
        childIndex = childIndex * 2 + 1
    }
    array[parentIndex] = temp
}
heapSort([3, 4, 2, 1, 5, 6])