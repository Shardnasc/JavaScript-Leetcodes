//Sleep problem: https://leetcode.com/problems/sleep/
//Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    
}


// Example usage:
let t = Date.now();
sleep(100).then((result) => {
  console.log(result); // 100
  console.log(Date.now() - t); // 100
});



/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

 //Using the above function sleep to solve this with sleep and millis
//I used to return a new promise ( complete failure to reject like an error
function sleep(millis) {
return new Promise(resolve, reject)



}

//This problem stumbled me and this is how far I went. I was thinking of setTimeOut, but it needs to be resolved.
