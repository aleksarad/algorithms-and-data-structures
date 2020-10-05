const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

const digitCount = (num) => {
    return num.toString().length
}

const mostDigits = (arr) => {
    let max = 0;
    let i = 0;
    while(i < arr.length) {
        if(digitCount(arr[i]) > max) {
           max = digitCount(arr[i])
        }
        i++
    }
    return max
}

const radixSort = (arr) => {
   let maxDigitCount = mostDigits(arr)
   for(let i = 0; i < maxDigitCount; i++) {
       let digitBuckets = Array.from({length: 10}, () => [])
       for(let j = 0; j < arr.length; j++) {
           digitBuckets[getDigit(arr[j], i)].push(arr[j])
       }
       arr = [].concat(...digitBuckets)
   }
   return arr;
}


radixSort([12, 180, 13, 175, 2000, 83])