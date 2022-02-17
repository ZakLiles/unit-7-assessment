const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);
const superSizeArray = getSizedArray(1000000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
// perf.start();                     // Starts timer
// doublerAppend(superSizeArray);
// let resultsAppend = perf.stop();  // Stops timer and save time results


// // Try it with second function
// perf.start();
// doublerInsert(superSizeArray);
// let resultsInsert = perf.stop();


// console.log('Results for the superSizeArray');
// console.log("insert", resultsInsert.preciseWords);
// console.log("append", resultsAppend.preciseWords);

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(largeArray);
resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(largeArray);
resultsInsert = perf.stop();


console.log('Results for the largeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(mediumArray);
resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(mediumArray);
resultsInsert = perf.stop();


console.log('Results for the mediumArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(smallArray);
resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(smallArray);
resultsInsert = perf.stop();


console.log('Results for the smallArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
resultsInsert = perf.stop();


console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

//                            Insert(ms)	Append(ms)	
// tinyArray	    10	         0.0021	     0.0053	
// smallArray	    100	         0.0280	     0.0048	
// mediumArray	    1000	     0.1115	     0.0174	
// largeArray	    10000	     9.2922	     1.2161	
// extraLargeArray	100000	   983.4798	     3.9720
// superSizeArray	1000000	105999.9999	    25.9353	


/*  
    4.
    Insert function scales at a rapid rate, the number of inputs multiplies by ten with each increase in array size, while the runtime jumps increases much more rapidly than 10x, the last increase over 100 times the previous array runtime. The append function scales approximately linearly with the number of inputs. On average increasing 10x with each 10x increase in number of inputs. The append function scales much better. 
*/

/*  
    5.
    The push function always adds a number to the end of the array, a method which is not impacted by the length of the array. O(1) - Constant

    The unshift function must "shuffle" array shifting each element over 1 by 1, this method is directly impacted by the length of the array O(n) - Linear

*/
