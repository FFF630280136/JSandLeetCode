var intersect = function(nums1, nums2) {
    let res = [];
    let map = {};
    if (nums1.length < nums2.length) {
        for (let e of nums1) {
            map[e] = map[e] + 1 || 1;

        }
        for (let e of nums2) {
            if (map[e]) {
                res.push(e);
                map[e]--;
            }
        }
    } else {
        for (let e of nums2) {
            map[e] = map[e] + 1 || 1;

        }
        for (let e of nums1) {
            if (map[e]) {
                res.push(e);
                map[e]--;
            }
        }
    }

    return res;
};

var intersect = function(nums1, nums2) {

    let map = new Map()
    let arr = []
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums2[j] == nums1[i]) {
                arr.push(nums1[i])
                map.delete(nums1[i])
                map.set(nums1[i])
                break; //退出本次循环，找到重复的，后面再出现重复的，我也不会添加
            }
        }
    }
    return arr
}