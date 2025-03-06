let arr = [3, 6, 0, 6, 3];
let res = "Palindrome";
for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i])
    {
        res = "Not Palindrome";
        break;
    }
}
console.log(res);