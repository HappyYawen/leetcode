/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 * 时间复杂度O(n),空间复杂度O(n)
 */
var validateStackSequences = function(pushed, popped) {
    let s = [], i = 0, sCur = null
    let cur = popped.shift()
    //先继续进栈
    while(i < pushed.length) {
        //如果当前索引下值与poped栈顶的相同，则直接不入s栈，索引+1
        if(pushed[i] === cur) {
            cur = popped.shift()
            i++
        } 
        //如果s栈顶的元素与poped栈顶的值相同，则s出栈，索引不变，s栈顶元素更新
        else if (sCur === cur) {
            s.pop()
            sCur = s[s.length-1]
            cur = popped.shift()
        } 
        //否则，去s栈，索引+1，s栈顶元素更新
        else {
            sCur = pushed[i]
            s.push(pushed[i])
            i++
        }
    }
    //如果栈没有清空，则继续出栈比较
    while(s.length) {
        if(s.pop() !== cur) {
            break;
        }
        cur = popped.shift()
    }
    return  s.length === 0
};
var validateStackSequences2 = function(pushed, popped) {
    let s = [], i = 0
    let cur = popped.shift()
    while(i < pushed.length) {
        s.push(pushed[i])
        while(s.length && s[s.length-1] === cur){
            s.pop()
            cur = popped.shift()
        } 
        i++
    }
    return  s.length === 0
};