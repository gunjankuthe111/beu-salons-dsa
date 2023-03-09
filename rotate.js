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