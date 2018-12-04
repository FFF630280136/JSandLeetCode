var twoSum = function(nums, target) {
    let map = new Map()
    let one, two;
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)
    }
    for (let i = 0; i < nums.length; i++) {
        let a = target - nums[i]
        if (map.get(a) && map.get(a) != i) {
            one = i
            two = map.get(a)
            return [one, two]
        }
    }
};
let nums = [1, 3, 4, 2]
let target = 6
let a = twoSum(nums, target)
console.log(a)