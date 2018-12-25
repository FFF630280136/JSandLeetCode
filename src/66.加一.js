var plusOne = function(digits) {
    let index = 0;
    let arr = []
    let len = digits.length
    for (i of digits) {
        if (i != 9) {
            break;
        }
        index++;
    }
    if (index == digits.length) {
        arr[0] = 1;
        for (let j = 0; j < digits.length; j++) {
            arr.push(0)
        }
        return arr;
    } else {
        let carry = 0;
        digits[len - 1] += 1;
        for (i = len - 1; i >= 0; i--) {
            digits[i] += carry;
            if (digits[i] >= 10) {
                carry = digits[i] / 10;
                digits[i] = digits[i] % 10;
            }

        }
        return digits
    }
};

let arr = [2, 4, 9, 3, 9]

let a = plusOne(arr)
console.log(a)