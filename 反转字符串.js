var reverseString = function(s) {
    let a = s.split("")
    a.reverse()
    return a.join("")
};

var reverseString1 = function(s) {

}


let s = "A man, a plan, a canal: Panama"
let a = reverseString(s)
console.log(a)
console.log(s.length)