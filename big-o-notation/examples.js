//addUpTo

//approach 1: o(n) time
//o(1) space, because we are only allocating 2 variables throughout this algorithm
//total and i
const addUpTo1 = (n) => {
    let total = 0;
    for (let i = 0; i<= n; i++) {
        total += i
    }
    return total
}

//approach 2: big O(1) time
const addUpTo2 = (n) => {
    return n * (n + 1) /  2;
}

//example of O(n^2) time
const nestedLoop = () => {
    for (let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            console.log(i,j)
        }
    }
}

//Which is better, and what does better mean?
//approach 2 is faster when timed
//approach 2 has 3 operations -> multiplication, addition, division to get to result

//approach 1 uses a loop, so the number of operations will depend on how many times the function has to run/how big n is.
//approach 1 has n operations. the number of operations grows proportionally with n.

//Space Complexity
//o(1) example is at the top

//o(n)
const double = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        //the space taken up will be proportional to the original input
        newArr.push(2 * arr[i])
    }
    return newArr
}