const sumRange = (num) => {
    if(num === 1) return 1;
    return num + sumRange(num-1)
}

//iterative vs recursive factorial
const factorialIterative = (num) => {
    let total = 1;
    for(let i = num; i > 1; i--) {
        total *= i;
    }
    return total
}

const factorialRecursive = (num) => {
    //base case
    if(num === 1) return 1;
    //recursive call
    return num * factorialIterative(num - 1)
}

//all odd values in an array
//inner helper recursive function
const oddValues = (arr) => {
    let result = []
    const helper = (helperInput) {
        if(helperInput.length === 0) {
            return
        }
        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}

////////////////////////
//Recursion Problem Set:
////////////////////////

//power, a function that accepts a base and an exponent

const power = (base, exponent) => {
    if(exponent === 0) {
        return 1
    }
    return base * power(base, exponent-1)
}

//factorial, where 0! === 1
const factorial = (num) => {
    if(num === 0) {
        return 1
    }
    if(num === 1) {
        return num
    }
    return num * factorial(num - 1)
}

//productOfArray
//returns the product of all nums in a given array

const productOfArray = (arr) => {
    if(arr.length === 0) {
        return 1;
    }
    //remove the first arr item, so that each time the function is called
    //arr[0] is the next value after the last
    return arr[0] * productOfArray(arr.slice(1))
}

//recursiveRange
//accepts a number and adds up all the nums from 0 to that num

const recursiveRange = (num) => {
    if(num === 0) {
        return 0
    }
    return num + recursiveRange(num - 1)
}