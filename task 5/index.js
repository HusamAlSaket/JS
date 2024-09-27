let result = '';
for (let i = 1; i < 11; i++) {
    result += i + ' ';
}
console.log(result);

let result2 ='';
let i =1;
while(i < 11){
    result2 += i + ' ';
    i++
}
console.log(result2);

let result3='';
for (let i = 1; i < 6; i++) {
    result3 += i + ' ';
}
console.log(result3);

let result4 = '';
for(let i =0; i<11; i++){
if (i % 2 ==0) {
    result4 += i + ' ';
    console.log(result4);
}
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);

let arr = [1,2,3,4,5];
let max= arr[0];

for(let i =1; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log(max);

let arr2 = [1,2,3,4,5];
let min= arr[0];

for(let i =1; i<arr2.length; i++){
    if(arr2[i] < min){
        max = arr2[i];
    }
}
console.log(min);
let total =0;
let arr3=[1,2,3,4,5];
for(let i =1; i<arr3.length;i++){
total += arr3[i];
}
var avg= total /arr3.length;
console.log(avg);

var factorial =1;
for(let i=1; i<6;i++){
factorial *= i;
}
console.log(factorial);

function printFibonacciSequence(limit) {
    let a = 0, b = 1, nextTerm;

    console.log(a); 
    console.log(b); 

    for (let i = 1; i <= limit; i++) {
        nextTerm = a + b;
        if (nextTerm > limit) break;
        console.log(nextTerm);
        a = b;
        b = nextTerm;
    }
}

printFibonacciSequence(10);

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function printPrimeNumbers(n) {
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
printPrimeNumbers(20);

function printMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + number * i);
    }
}
printMultiplicationTable(5);

let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function print2DArrayElements(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result += arr[i][j] + ' ';
        }
    }
    console.log(result.trim());
}
print2DArrayElements(array);

let result5='';
function printArrayInReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}


const array5 = [1, 2, 3, 4, 5];
printArrayInReverse(array5);


