// write a function called same, which accepts 2 arrays. the function
// should return true if every value in the array has it's corresponding value
// squared in the second array. the values must appear the same amount of times.

const same = (arr1, arr2) => {
    if(arr1.length !== arr2.length) {
        return false
    }
    let freqCount1 = {}
    let freqCount2 = {}
    for(let val = 0; val < arr1.length; val++) {
        freqCount1[val] = (freqCount1[val] || 0 ) + 1
    }
    console.log(freqCount1)
}