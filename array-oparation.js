/**
 * Objective: write a function to give me the sum of all numbers in an array
 * step-1: declare a function
 * step-2: call check whether the function is called properly
 * step-3: set a parameter(s)
 * step-4: pas the parameter(s), check whether parameter is passed in a proper format
 * step-5: do the function task (step by step)
 */

// function sumOfNumbers (numbers){
//     let sum = 0;
//     for(const number of numbers){
//         console.log(number);
//         sum = sum + number;
//     }
//     return sum;
// }
// const numbs = [4, 3, 2, 5];
// const sum = sumOfNumbers(numbs);
// console.log('sum of numbers is', sum)

function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
const numbs = [3, 4, 6, 8, 9];
const sum = sumOfNumbers(numbs);
console.log('sum of numbers', sum);