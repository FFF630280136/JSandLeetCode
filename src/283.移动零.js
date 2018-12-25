var moveZeroes = function(nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[k++] = nums[i];
        }
    }
    for (let j = k; j < nums.length; j++) {
        nums[j] = 0;
    }
    return nums
};


let nums = [1, 2, 3, 0, 6, 8, 0, 6, 0, 4, 0]
let a = moveZeroes(nums)
console.log(a)