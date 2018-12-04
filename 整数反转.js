var reverse = function(x) {
    let s = x.toString()
    let iff;
    if (s[0] == "-") {
        let a = s.slice(1)
        let b = a.split("")
        b.reverse()
        b.unshift("-")
        iff = parseInt(b.join(""))
    } else

    {
        let a = s.split("")
        a.reverse()
        iff = parseInt(a.join(""))
    }

    if (iff > Math.pow(2, 31) - 1 || iff < -Math.pow(2, 31)) {
        return 0
    } else {
        return iff
    }

};
let x = 1534236469
let a = reverse(x)
console.log(a)