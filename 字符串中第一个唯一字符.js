var firstUniqChar = function(s) {
    let hashObj = {}
    let b //存入索引
    if (s == "") {
        b = -1
    }
    for (let i = 0; i < s.length; i++) {
        if (hashObj[s[i]] && hashObj[s[i]] != -2) {
            hashObj[s[i]] = -2
        } else if (hashObj[s[i]] != -2) {
            hashObj[s[i]] = i + 1
        }
    }
    for (let item in hashObj) {
        if (hashObj[item] != -2) {

            b = (hashObj[item]) - 1
            break;
        } else {
            b = -1
        }
    }
    return b
};
let s = "leetcode"
let a = firstUniqChar(s)
console.log(a)