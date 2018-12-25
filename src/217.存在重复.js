var containsDuplicate = function(nums) {
    let hasObj = new Map()
    for (item of nums) {
        if (hasObj.has(item)) {
            return true
        } else {
            hasObj.set(item)
        }
    }
    return false

};

var containsDuplicate = function (nums) {
    nums.sort()
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            return true
        }

    }
    return false
};