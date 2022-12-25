const twoSum = (nums, target) => {
    let map = {}

    for(let i = 0; i < nums.length; i++) {
        let diff = Math.abs(target - nums[i])
        if(map[diff] != undefined) {
            return [map[diff], i]
        }
        map[nums[i]] = i

    }
};



console.log(twoSum([2,7,11,15], 18))