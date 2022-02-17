//O(n^2) - Quadratic
const addToZero = nums => {
    let addToZero = false;

    loop1:
    for(i = 0; i < nums.length; i++){
        for(j = 0; j < nums.length; j++){
            if(nums[i] + nums[j] === 0 && nums[i] !== nums[j])
            {
                addToZero = true;
                break loop1;
            }
        }
    }

    return addToZero;
}

//O(1) - Constant
const hasUniqueChars = word => {
    return (new Set(word).size === word.length)
}

//O(n) - Linear
const isPangram = sentence => {
    return (new Set(sentence.toLowerCase().replace(/[^a-z]/g, "")).size === 26)
}

//10 or less words O(n^2) - Quadratic
//10 or more tends towards O(n log(n))
const findLongestWord = words => {
    const sortedArr = words.sort((frstElem, secElem) => {
        return secElem.length - frstElem.length 
    })
    return sortedArr[0].length
}


