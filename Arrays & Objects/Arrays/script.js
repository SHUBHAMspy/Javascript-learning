// Basic Questions regarding Arrays
// ______________________________________________

// Ways to append values to an array
// Method1
// a)
  var names = ['Shubham', 'Saurabh', 'Gaurav', 'Abhinav']
  names.push('Gyan')
  console.log(names);

// b)
  names.push('zap','kundan') // add multiple values at once
  console.log(names);

// c)
  names.unshift('Mr x')
  console.log(names);

// Method2
var ages = [23,21,23,23,25,21,20]
names= names.concat(ages)
console.log(names);

//Method3(spread arrays)
var friends = ['Abhinav', 'Gaurav','Gyan']
var me = ['Shubham','Pandey',21,...friends]
console.log(me);


// Ways to check if a array includes a value

// Method1
var result = ages.includes(21)
console.log(result);

// Method2
var result = names.some((el) => el === 'Arya')
console.log(result);

// Method3(Custom Functions)
function includes(value) {
  for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    if(element === value) return true;
  }
  return false;
}
console.log(includes('Abhinav'));

// 3.Calculate length of array withou built in method
function calculateLength(array) {
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    count++; 
  }
  return count;
}
console.log(calculateLength(names));  

// 4.Calculate Sum and Average of elements
function calculateSumAndAverage(array) {
  let totalSum = 0;
  for (let index = 0; index < array.length; index++) {
    totalSum += array[index];
  }
  let average = totalSum/array.length;
  console.log(totalSum,average);
}
calculateSumAndAverage(ages)

// 4.Display even and odd position elements
function evenAndOddElements(array) {
  let even = [];
  let odd = [];
  for (let index = 0; index < array.length; index++) {
    if(array[index] % 2 == 0) even.push(array[index]);
    else odd.push(array[index]);
  }
  console.log(even,odd);
}

evenAndOddElements(ages)

// 5. Remove specific element from array
console.log(names);
// 1. By modifying the original
function removeSpecificElement(element,array) {
  for (let index = 0; index < array.length; index++) {
    if(element === array[index]) {
      for(let i = index + 1; i < array.length; i++){
        array[index] = array[i]
        index = i
      }
      array.length--;
      return array;
    }
  }
  return -1;
}

console.log(removeSpecificElement(1,names));

// 6. Reverse an Array
// a)
function reverseArray(array) {
  let left = 0;
  let right = array.length - 1;
  while(left <= right){        // O(n) time
    let temp = 0;
    temp = array[left];
    array[left] = array[right];
    array[right] = temp;

    left++;
    right--;
  }
  return array
}

console.log(reverseArray(ages));

//b) 
function reverseArray1(array) {
  let reversed = []    // O(n) space and O(n) time
  for (let index = array.length - 1; index >= 0; index--) {
    const element = array[index];
    reversed.push(element);
  }
  return reversed;
}
console.log(reverseArray1(ages));


// Print all distinct elements
function printDistinct(array) {
  const uniques = new Set(); //O(n) space and O(n) time
  for (let index = 0; index < array.length; index++) {
    uniques.add(array[index]);
  }
  console.log(uniques);
}
printDistinct(ages);

// Count the number of duplicates
// a) By using additional space
function countDuplicate1(array) {
  const uniques = new Set(); //O(n) space and O(n) time
  for (let index = 0; index < array.length; index++) {
    uniques.add(array[index]);
  }
  return array.length - uniques.size;
}
console.log(countDuplicate1(ages));

// b) By Modifying array
// function countDuplicate(array) {
//   let count = 0;
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] == 1) continue;
//     for (let j = index + 1; j < array.length; j++) {
//       if (array[j] == 1) continue;
//       if(array[j] == array[index]){
//         count++;
//         array[j] = 1;
//       }
//     }
//   }
//   return count;
// }
// console.log(countDuplicate(ages));

// Count Occurences of elements

// a) By Sorting array
function countOccurences(array) {
  let sorted = array.sort()  
  console.log(sorted);     // logn
  
  let j = 0
  while (j < sorted.length) {       //O(n2)
    let count = 1;
    let i = j+1
    while(sorted[j] == sorted[i]){
      count++;
      i++;
    } 
    console.log(`${sorted[j]}:`, count);
    j = i;
  }
}

countOccurences(ages)

// b) Using additional space/ maps
// function countOccurences(array) {
//  const map = new Map(); 
//  for (const item of array) {
//   map.set(item)
//  } 
//  return map;
// }
// console.log(countOccurences(ages));
// *Merge Sorted Array
function mergeSorteArrays(arr1,m,arr2,n) {
  const merged = [];
  let index = 0;
  // We are running loop to fill the bigger array actually which fulfills merger
  // Lesson/learning: Don't loop when nothing to be looped upon why waste calculation on looping when nothing to loop on.
  // Infinite loop happens when we are waiting for something which is not there.
  let i = 0, j = 0;
  while ( i < m && j < n ) {
      if(arr1[i] <= arr2[j]) {
        merged[index++] = arr1[i++];
      }  
      else{
        merged[index++] = arr2[j++];
      } 
    }
    while (j < n) {
      merged[index++] = arr2[j++];
    }
    while(i < m){
      merged[index++] = arr1[i++];
    }
  return merged;
}

console.log(mergeSorteArrays([1,2,3],3,[2,4,5,6],4));

// Merge Intervals
// the goal is to produce a list of mutually exclusive intervals.
// or simply an interval to be put in a list.
// Brute force works on limited cases needs huge modifications.
function mergeIntervals(intervals) {
  let modifiedIntervals = [];
  if(intervals.length == 1) modifiedIntervals.push(intervals[0])
  for (let i = 0; i < intervals.length-1; ) {
    let element = intervals[i];
    let nextInterval= intervals[i+1];
    if(element[0] >= nextInterval[0] && element[1] >= nextInterval[0]){
      modifiedIntervals.push([nextInterval[0],element[1]])
      i+=2
    }
    else if (element[1] >= nextInterval[0]) {
      modifiedIntervals.push([element[0],nextInterval[1]])
      i+=2
    } 
    else if (element[1] < nextInterval[0]) {
      modifiedIntervals.push(element)
      i++
    }
    
  }
  if (modifiedIntervals[modifiedIntervals.length-1][1] !== intervals[intervals.length-1][1]) {
    modifiedIntervals.push(intervals[intervals.length-1])
  }

  return modifiedIntervals;
}
console.log(mergeIntervals([[1,3],[0,3]]));
console.log(mergeIntervals([[1,4], [2,6], [3,5]])); 
console.log(mergeIntervals([[1,4], [2,5], [7,9]])); 
console.log(mergeIntervals([[6,7], [2,4], [5,9]])); 
console.log(mergeIntervals([[1,4],[1,5]]));

// Optimized 
// As intervals are times and are meant to be consecutive though they might overlap so we need to sort them first.
function mergeIntervals(intervals) {
  
}
// Longest Common Prefix
function longestCommonPrefix(array) { //brute force
  let lcp = "";
  const map = new Map();
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    for (let j = 0; j < element.length; j++) {
      let temp = '';
      for (let k = index + 1; k < array.length; k++) {
        if(element[j] == array[k][j]) map.set(element[j],map.has(element[j])? map.get(element[j]) + 1: 1)
        // console.log(lcp);
        // console.log(map);
      }
    }
  }
  // console.log(map);
  map.forEach((value,key) => {
    if(value == array.length){
      lcp += key
    }
  })
  console.log(lcp);
  return lcp ;
}
console.log(longestCommonPrefix(["dog","racecar","car"]));


// Intersection of two Arrays
function intersection(nums1, nums2) { // Brute force.
  let intersection = []
  nums1.sort((a,b) => a - b)
  nums2.sort((a,b) => a - b)
  // [4,5,9]
  // [4,4,8,9,9]
  let i = 0;
  
  while (i < nums1.length ) {
    let j = 0;
    while (j < nums2.length) {
      if(!intersection.includes(nums1[i]) && nums1[i] == nums2[j]){
       intersection.push(nums1[i])
      }
      j++
    }
    i++;
  }
  return intersection
  
}

console.log(intersection([4,9,5],[9,4,9,8,4]));
console.log(intersection([1,2,2,1],[2,2]));

// Maximum sum subarray size k

// function maximumSumSubarray(nums,k) {
//   let maxSum = 0;
//   for (let i = 0,j = 1, k = 2; i < nums.length - 2,j < nums.length - 1,k < nums.length; i++,j++,k++) {
//     let sum = nums[i] + nums[j] + nums[k];
//     maxSum = Math.max(sum,maxSum)
//   }
//   return maxSum;
// }
// console.log(maximumSumSubarray([2, 1, 5, 1, 3, 2],3));  // limited usecase not scalable

function maximumSumSubarray(nums,k) {
    let maxSum = 0;
    for (let i = 0; i <= nums.length - k; i++) {
      let sum = 0
      for (let j = i ; j < i + k; j++) {
        sum += nums[j];
        maxSum = Math.max(sum,maxSum)
      }
    }
    return maxSum;
}
console.log(maximumSumSubarray([2, 3, 4, 1, 5],2));  

// a) Sliding Window
function maximumSumSubarraySlidingWindow(nums,k) {
  let maxSum = 0;
  let left = 0;
  let windowSum = 0;
  for (let right = 0; right < nums.length; right++) {
    // First create the window
    if(right < k) windowSum += nums[right];
    
    if (right > k - 1) {
      // then slide the window
      maxSum = Math.max(windowSum,maxSum)
      windowSum -= nums[left++]
      windowSum += nums[right]
    }
  }
  return maxSum;
}
console.log(maximumSumSubarraySlidingWindow([2, 1, 5, 1, 3, 2],3));

// Shortest Subarray with Sum at Least K
// a) O(n2)
function smallestSubarray(nums,K) {
  let minLength = Math.min();
  for (let i = 0; i < nums.length; i++) {
   let sum = 0;
   for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if(sum >= K) minLength = Math.min(minLength,j - i + 1)
   } 
  }
  return minLength;
}

console.log(smallestSubarray([2, 1, 5, 2, 3, 2],7));
console.log(smallestSubarray([3, 4, 1, 1, 6],8));
console.log(smallestSubarray([2, 1, 5, 2, 8],7));

// b)Sliding Window
function smallestSubarraySliding(nums,k) {
  let minLength = Math.min();
  console.log(minLength);
  let windowSum = 0;
  let left = 0
  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right] // add until you get the sum required as their is no limit to window size

    while (windowSum >= k) {
      minLength = Math.min(minLength,right - left + 1)
      windowSum -= nums[left++];
      
    }
  }
  // Edge Case
  if(minLength == Infinity) return -1
  return minLength;
}
console.log(smallestSubarraySliding([2, 1, 5, 2, 3, 2],7));

//*  Rotate Arrays
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

function rotateArray(nums,k) {
  // let i = nums.length-1;
  // while (i >= nums.length - k) {
  //   let element = nums.pop(i)
  //   nums.unshift(element);
  //   i--;
  // }
  // return nums
  if (nums.length === 1 || k === 0 || k % nums.length === 0) {
    return;
  }
  if (k > nums.length) {
      k = k % nums.length;
  } 
  nums.unshift(...nums.splice(-k));
  return nums;
}
console.log(rotateArray([1,2,3,4,5,6,7],3));

//* 4Sum
function fourSum(nums,target) {
  let quadruplets = [];
  if(nums.length < 4) return;
  
  nums.sort((a,b) => a - b) // O(nlogn)
  
 
  for(let i = 0; i < nums.length-3; i++){
    if(i > 0 && nums[i] == nums[i-1]) continue;
    
    for (let j = i + 1;j < nums.length - 2; j++) {
      if(j > i+1 && nums[j] == nums[j-1]) continue;
      let sum = target - (nums[i] + nums[j])
      let x = j + 1;
      let y = nums.length - 1;
      while(x < y){
        // if(x == i) x++;
        // else if(y == j) y--;
        let diff = sum - (nums[x] + nums[y])
        if(diff == 0){
          quadruplets.push([nums[i],nums[j],nums[x],nums[y]]);
          while(nums[x]== nums[x + 1]) x++;
          while(nums[y] == nums[y - 1]) y--;
          x++;
          y--;
        } 
        else if(diff > 0) x++;
        else y--;
        
      } 
    } 
  }
  return quadruplets;
}
console.log(fourSum([1,0,-1,0,-2,2],0));
console.log(fourSum([2,2,2,2,2,2],8));
console.log(fourSum([-2,-1,-1,1,1,2,2],0));



// Recursion and Arrays

//* Sum of array integrs
// Input: [1,5,7,-2]
// O(n*2) and O(n) space
function recursiveAddition(nums) { // O(n)
  if(nums.length === 0) return 0;

  // smaller problem--> sum([5,7,-2])
  let smaller = nums.slice(1);  // O(n)
  // recursive step
  return nums[0] + recursiveAddition(smaller)
}

console.log(recursiveAddition([1,5,7,-2]));

// Optimized O(n)
function recursiveSum(nums) {
  return sum(nums,0)
}
function sum(nums,index) {
  if(index == nums.length) return 0;
  // recursive step
  return nums[index] + sum(nums,index + 1);
}
console.log(recursiveSum([1,5,7,3]));

// *Check Sorted
/****************** */
// Input: [2,4,1,6,5]
// Output: false

function checkSorted(nums) {
  // Base Case
  if(nums.length <= 1) return true;

  // Recursive step
  let smaller = nums.slice(1); //O(n)
  if(checkSorted(smaller)) {
    return nums[0] < smaller[0] 
  }
  else return false
}
console.log(checkSorted([2,4,1,6,5]));
console.log(checkSorted([1,2,3,4]));

//* Missing Number
function findMissingNumber(nums) {
  for (let i = 0; i < nums.length; i++) {
    if(i != nums[i])
    
    
  }
}
// Subsets

// Every element is a subset in itself
// Input: [1, 3]
// Output: [[], [1], [3], [1,3]]

// function subsets(nums) {
//   let ans = []
//   if(nums.length == 0) ans.push([])

  
//     subsets(ans)
//     subsets(ans.push(nums[i]));
  
//   return ans
// }

// console.log(subsets([1, 3]));
