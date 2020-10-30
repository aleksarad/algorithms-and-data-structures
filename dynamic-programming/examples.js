function fib(n){
    if(n === 2 || n === 1) return 1
    return fib(n - 1) + fib(n - 2)
}   
//doing this^ with a large number will take forever
//since we're essentially waiting for n to hit the base case and
//repeating a bunch of the same fib(n)

//What if we could remember the repeated values and store their solutions?


//Memoization

function fibMemo(n, memo=[]){
    if(memo[n] !== undefined) return memo[n]
    if(n <= 2) return 1
    let res = fib(n-1, memo) + fib(n-2, memo)
    memo[n] = res 
    return res
}


//Bottom Up - Tabulation
function fibTab(n){
    if(n <= 2) return 1
    let fibNums = [0, 1, 1]
    for(let i = 3; i <=n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2]
    }
    return fibNums[n]
}
