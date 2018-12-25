var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false
    } else if (s.length == 0 && t.length == 0) {
        return true
    } else {
        let sObj = {}
        let tObj = {}
        for (let i = 0; i < s.length; i++) {
            if (sObj[s[i]]) {
                sObj[s[i]]++
            } else {
                sObj[s[i]] = 1
            }
        }
        for (let i = 0; i < t.length; i++) {
            if (tObj[t[i]]) {
                tObj[t[i]]++
            } else {
                tObj[t[i]] = 1
            }
        }
        let arr = Object.keys(tObj)
        for (let i = 0; i < arr.length; i++) {
            if (tObj[arr[i]] != sObj[arr[i]]) {
                return false
            }
        }
        return true

    }
};
let t = "cat";
let s = "let"
let a = isAnagram(t, s)
console.log(a)



let s = "adcert"
s = s.split("")
s.sort()
console.log(s)
var isAnagram = function(s, t) {
    let a = s.split("")
    let b = t.split("")
    if (a.length == b.length) {
        a.sort()
        b.sort()

        for (let i = 0; i < a.length; i++) {
            if (a[i] != b[i]) {
                return false
            }
        }
        return true
    }
    return false
}