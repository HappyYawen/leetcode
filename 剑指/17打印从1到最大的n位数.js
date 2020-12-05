/**
 * @param {number} n
 * @return {number[]}
 * 正常思路,不考虑js最大位数限制，时间复杂度O(n),空间复杂度O(1)
 * 考虑最大位数限制：
 * 1、使用BigInt
 * 2、使用字符串拼接（时间复杂度O(10^n),空间复杂度O(10^n)）
 */
var printNumbers = function(n) {
    //正常思路
    let res = [], str = '', char = new Array(9).fill('')
    // let max = Math.pow(10, n)
    // for(let i = 1; i< max;i++) {
    //     res.push(i)
    // }
    // return res
    //字符串思路
    let loop = ['0','1','2','3','4','5','6','7','8','9']

    dfs = (index,len, char) => {
        if (index === len) {//如果位数长度与指定的位数相等，则退出递归，并记录当前值
            str = str + char.join('') + ','
            // res.push(char.join(''))
            char = null //及时释放内存
            return; //跳出递归
        } else {
            let start = 0
            if(!index) {
                start = 1
            } else {
                start = 0
            }
            for(let i=start;i < 10;i++){ //遍历，顺序存放0-9
                //当前为index位数，就创建一个长度为index的数组，存放每一个值
                char = char ? char : new Array(index).fill('') 
                char[index] = loop[i]
                dfs(index+1,len, char) //递归存放下一位数
            }
        }
    }
    for(let i = 0; i < n; i++) {
        dfs(0,i+1)
    }
    return str
};
console.time()
printNumbers(8)
console.timeEnd()