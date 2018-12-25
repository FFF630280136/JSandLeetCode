var isValid = function(s) {
    let stack = []
    let length = s.length
    for (let i = 0; i < length; i++) {
        let c = s.charAt(i)
        if (c == "(" || c == "{" || c == "[") {
            stack.push(c)
        } else {
            let topStack = stack.pop()
            if (c == ")" && topStack != "(")
                return false
            else if (c == "}" && topStack != "{")
                return false
            else if (c == "]" && topStack != "[")
                return false

        }

    }
    return !stack.length
}

var isValid = function(s) {
    let stack = []
    let map = new Map()
    map.set(")", "(")
    map.set("]", "[")
    map.set("}", "{")
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            stack.push(s[i])
        } else {
            if (map.get(s[i]) != stack.pop()) {
                return false
            }
        }
    }
    return !stack.length

}