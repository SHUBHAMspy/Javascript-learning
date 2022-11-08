// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function sumToTarget(nums,target) {
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if(sum == target){
        return [i,j]
      }
    }
    
  }
}
console.log(sumToTarget([2,7,11,15],17));
