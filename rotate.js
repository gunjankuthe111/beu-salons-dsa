// You are given an array of length N (1 < N <= 100) and a number K. Print the array after K rotations in clockwise direction.
// E.g. 
// N = 10, K = 3
// Arr = [1,2,3,4,5,6,7,8,9,10]
// after K rotations
// Arr = [4,5,6,7,8,9,10,1,2,3]

// NOTE:
// Please mention use of any in-built javascript function is not allowed like shift, unshift, substr etc.
// You can use any editor of your choice.


let N = 10;
let K = 3;
let arr = [1,2,3,4,5,6,7,8,9,10];

let temp = K%N;

let ans = []
for(let i=temp;i<N;i++){
    ans.push(arr[i])
}
for(let i=0;i<temp;i++){
    ans.push(arr[i])
}
console.log(ans)