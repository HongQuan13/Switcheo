var sum_to_n_a = function(n) {
    // your code here
    let sum = (n * (n+1))/2;
    return sum;
};
//  Time complexity of O(1)

var sum_to_n_b = function(n) {
    // your code here
    let sum =0;
    for(let i = 1; i <=n; i++){
        sum += i
    }
    return sum
};
// Time complexity of O(n)

var sum_to_n_c = function(n) {
    // your code here
    if(n == 0){
        return 0;
    }
    return (n + sum_to_n_c(n-1));
};
// Time complexity of O(n), like the previous function, but recursion can use up a lot of memory and cause a stack overflow error if n is too large.
