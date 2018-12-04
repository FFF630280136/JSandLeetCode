var singleNumber = function(nums) {
    let hasObj = new Set()
    for (item of nums) {
        if (hasObj.has(item)) {
            hasObj.delete(item)
        } else {
            hasObj.add(item)
        }
    }
    let a
    hasObj.forEach(function(item) {
        a = item
    });
    return a
};
let nums = [1, 1, 2, 2, 3, 3, 4]
let a = singleNumber(nums)
console.log(a)



var singleNumber1 = function(nums) {
    nums.sort()
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum = i % 2 == 0 ? sum + nums[i] : sum - nums[i]
    }
    return sum
};

var singleNumber2 = function(nums) {

    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum = sum ^ nums[i]
    }
    return sum
};