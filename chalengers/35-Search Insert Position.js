var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length-1
    let mid = 0
    while(left <= right){
        mid = Math.floor((left + right)/2)
        if(nums[mid]===target){
            return mid
        } 
        if(target<nums[mid]){
            right = mid-1
        }else{
            left = mid+1
        }
    }
    console.log(left, right, mid)
       return left 
};

searchInsert([1,2,3,5], 3 )