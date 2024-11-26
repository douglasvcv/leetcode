var twoSum = function(nums, target) {
    for(i=0; i<nums.length; i++){
        for(j=1; j<nums.length; i++){
          if(nums[i]+nums[j]== target){
            return [i, j]
            
          }
            }       
        }
    }

    twoSum([1,3,5,6], 4)