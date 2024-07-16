'use strict';

function getSecondLargest(nums) {
 nums.sort(function sort(a,b){
     if(a>b)return 1;
     if(a<b)return -1;
     return 0;
 });
 for(let i=nums.length-1;;i--){
     if(nums[i]!=nums[i-1]) return nums[i-1]
 }
}
