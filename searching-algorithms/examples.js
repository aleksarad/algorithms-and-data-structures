//linear search example
// O(n) time complexity worst case, the bigger the array the longer it will take
const linearSearch = (arr, val) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}

const popstars = ["nicki", "doja", "megan", "beyonce", "mariah"]

//returns -1
linearSearch(popstars, 'gaga')

//returns 1
linearSearch(popstars, 'doja')


//binary search
//O(log n)
const binarySearch = (arr, val) => {
    let left = 0;
    let right = arr.length-1;

    while(left <= right) {
        let pointer = Math.floor((right+left)/2);
        if(arr[pointer] === val) {
            return pointer;
        }
        if(arr[pointer] < val) {
            left = pointer + 1;
        }
        if(arr[pointer] > val) {
            right = pointer - 1;
        }
    }
    return -1;
}


const numbers = [1,3,5,7,9,11,13,15,25,27,31,33,35,22,85,65]
const num = 100

//search through string for a substring
//count how many times substr appears

const stringSearch = (longStr,subStr) => {
    let counter = 0;
    for(let a = 0; a < longStr.length; a++) {
        for(let b = 0; b < subStr.length; b++) {
            console.log(longStr[a+b],subStr[b])
            if(longStr[a+b] !== subStr[b]) {
                break;
            }
            if(b === subStr.length-1) {
                counter++;
            }
        }

    }
    return counter;
}


const str1 = "umdumbumzumm"
const str2 = "um"
stringSearch(str1, str2)