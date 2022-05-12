// add whatever parameters you deem necessary & write docstring
function pivotIndex(nums) {
    console.log("THIS IS THE ORIGINAL ARRAY:", nums)
    const sumAtIndex = new Map();
    let currentSum = 0;
    for(let i = 0; i < nums.length; i++){
        currentSum += nums[i];
        sumAtIndex.set(i, currentSum);
    }
    console.log("sum at index:", sumAtIndex);
    

    let pivotIndex = 1;
    while(pivotIndex < nums.length-1){
        let leftSum = sumAtIndex.get(pivotIndex-1);
        let rightSum = sumAtIndex.get(nums.length-1) - sumAtIndex.get(pivotIndex)

        console.log("sum to the left of ", nums[pivotIndex],":", leftSum)
        console.log("sum to the right of ", nums[pivotIndex],":", rightSum)
        if(leftSum === rightSum )return  pivotIndex;
        pivotIndex++
    }
    return -1;  
}
