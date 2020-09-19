// write a function called same, which accepts 2 arrays. the function
// should return true if every value in the array has it's corresponding value
// squared in the second array. the values must appear the same amount of times.
//my version of same function below, rewritten with my own code to better understand colt's approach.

const same = (arr1, arr2) => {
    if(arr1.length !== arr2.length) {
        return false
    }
    let freqCount1 = {}
    let freqCount2 = {}
    for(let val of arr1) {
        freqCount1[val] = freqCount1[val] ? freqCount1[val] + 1 : 1
    }
    for(let val of arr2) {
        freqCount2[val] = freqCount2[val] ? freqCount2[val] + 1 : 1
    }
    for(let key in freqCount1) {
        //checks if each num has a square in other array
        if(!freqCount2.hasOwnProperty(key ** 2)) {
            return false
        }
        //checks if nums + their square appear in the same frequency
        if(freqCount2[key ** 2] !== freqCount1[key]) {
            return false
        }
    }
    console.log(freqCount1, freqCount2)
    return true
}
//
same([2, 9, 5], [25, 81, 4])

//given 2 string, write a function to determine if the second string is an anagram of the first
const validAnagram = (str1, str2) => {
    //if the length of the two strings don't match, then
    if (str1.length !== str2.length) {
        return false
    }
    //loop through strings and map them to objects that count their frequency
    let freqCounter1 = {}
    let freqCounter2 = {}
    for (let char = 0; char < str1.length; char++) {
        freqCounter1[str1[char]] = freqCounter1[str1[char]] ? freqCounter1[str1[char]] + 1 : 1
    }
    for (let char = 0; char < str2.length; char++) {
        freqCounter2[str2[char]] = freqCounter2[str2[char]] ? freqCounter2[str2[char]] + 1 : 1
    }
    console.log(freqCounter1, freqCounter2)
    //check if same letters appear in both strings
    for (let key in freqCounter1) {
        if(!freqCounter2.hasOwnProperty(key)) {
            return false
        }
    //check if the letters appear in the same frequency
        if(freqCounter1[key] !== freqCounter2[key]) {
            return false
        }
    }
    return true
}

validAnagram("iceman", "cinema")


//Multiple Pointers
//SumZero accepts a sorted array of integers, and should return the first pair where the sum is zero.
//strategy:
//pointer on largest and smallest number + find sum and compare to zero

const sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        }
        else if(sum > 0) {
            right--;
        } else {
            left++
        }
    }
}

