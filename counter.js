//Counter problem: https://leetcode.com/problems/counter/
/*
Given an integer n, return a counter function. 
This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
*/
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
        
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

//Start variable
//I used the const counter to make (n, n + 1, n + 2, etc).
// The return n is probably return n();
var createCounter = function(n) {
    
    return function() {
      const counter = function(10)
     const counter1 = createCounter();
      const counter2 = createCounter();
    const counter3 = createCounter();
      
//Outputting all three
console.log(counter1()); 
console.log(counter2()); 
console.log(counter3()); 

        return n();
    };
};
