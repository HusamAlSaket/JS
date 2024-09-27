var numbers = [30, 45, 60, 7];
var sorted = numbers.slice().sort(function(a, b) {
  return a - b;
});
var smallest = sorted[0];
console.log('Smallest: ' + smallest);

function AlphabeticalOrder(word) {
    return word.split("")
               .sort()
               .join("");
}

let randomWord = "hello";
console.log(AlphabeticalOrder(randomWord))


let n =8;
function factorial (n){
if(n === 0){
    return 1;
}
else{
    return n* factorial (n-1);
}
}

console.log(factorial(8));
let number =9;
function oddOrEven(number){
if (number % 2 == 0)
    console.log("the number is even");
else{
    console.log("the number is odd");
}
}
console.log(oddOrEven(9));

function removeOdds(arr) {
    return arr.filter(number => number % 2 === 0);
  }
  
  const evenNumbers = removeOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  console.log(evenNumbers); 

  
function numberOnly(arr) {
    return arr.filter(item => typeof item === 'number');
 }
  
  const modified = numberOnly(["Ayham", 3, 7, 'Alaa', 13, 'coding' ]);
  console.log(modified); 
  function addUp(num) {
    let sum = 0;
    for (let i = num; i >= 0; i--) {
        sum += i;
    }
    return sum;
}

console.log(addUp(8));

function minMaxLengthAverage(arr) {
    if (arr.length === 0) {
        return [null, null, 0, null];
    }

    const lowest = Math.min(...arr);
    const highest = Math.max(...arr);
    const length = arr.length;
    const average = arr.reduce((sum, value) => sum + value, 0) / length;

    const result = [lowest, highest, length, average];
    return result;
}

console.log(minMaxLengthAverage([7,13,3,77,100]));; 


// let objectDate = new Date();
// let day = objectDate.getDate();
// console.log(day);
// let month= objectDate.getMonth();
// console.log(month + 1);
// let year = objectDate.getFullYear();
// console.log(year);

function convertToRoman(num) {
    const romanValues = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let roman = '';
    for (const { value, symbol } of romanValues) {
        while (num >= value) {
            roman += symbol;
            num -= value;
        }
    }
    return roman;
}
console.log(convertToRoman(1989)); 

function countWords(str){
    return str.trim().split(/\s+/).length;
}

console.log(countWords('hello from codingacademy!'));

function MultiplyByLength(arr){
    let output =[];
for (let x of arr )
output.push (x * arr.length)
return output
}

console.log(MultiplyByLength([4,2,5]));

function checkEnding(str, suffix){
return str.lastIndexOf(suffix) === str.length -suffix.length
}

console.log(checkEnding("CodingSchool", "Ac"));

function doubleChar(str){
return str.split('').map(char => char.repeat(2)).join('');
}

console.log(doubleChar('Coding'));
