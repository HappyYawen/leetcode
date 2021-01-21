/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 * 使用最小堆
 */
var getLeastNumbers = function(arr, k) {
    let res = []
    //先下沉式调整每一个父元素
    for(let i = Math.ceil((arr.length - 2) / 2); i >=0; i--) {
        downAdjust(arr, i, arr.length)
    }
    //再将k个堆顶元素，删除，每一个堆顶都是当前最小值
    for(let i = arr.length - 1; i >= arr.length - k; i--) {
        let p = arr[0]
        arr[0] = arr[i]
        arr[i] = p
        res.push(p)
        downAdjust(arr, 0, i)
    }
    return res
};

function downAdjust(array, parentIndex, length) {
    let temp = array[parentIndex], childIndex = parentIndex * 2 + 1
    while(childIndex < length) {
        if(childIndex + 1 < length && array[childIndex + 1] < array[childIndex]) {
            childIndex++
        }
        if(array[childIndex] >= temp) {
            break;
        }
        array[parentIndex] = array[childIndex]
        parentIndex = childIndex
        childIndex = childIndex * 2 + 1
    }
    array[parentIndex] = temp
}