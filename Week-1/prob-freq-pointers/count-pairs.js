// add whatever parameters you deem necessary & write docstring

/**
 * Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array.
 */
function countPairs(nums, target) {
    let numPairs = 0;
    let pairFinder = {};
    for(let num of nums){
        if(pairFinder[target-num]){
            numPairs++;
        }else{
            pairFinder[num] = true;
        }
    }
    return numPairs;
}
