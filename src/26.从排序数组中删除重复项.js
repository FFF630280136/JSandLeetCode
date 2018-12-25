var removeDuplicates = function(nums) {
    let arr = []
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = true
            arr.push(nums[i])
        }

    }
    return arr;
}
let nums = [1, 1, 2, 2, 3, 3, 4, 5, 6, 6, 6, 7, 8, 8, ]
let a = removeDuplicates(nums)
console.log(a)