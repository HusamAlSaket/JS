// alert("open console to check the values");
let cash =1000;
let currentLiabilities =500;
let cashFlow = cash / currentLiabilities;
console.log(cashFlow);
let sampleInput =1000;
let expenses = 500;
let sampleOutput= sampleInput - expenses;
console.log(sampleOutput);
let liabilities = 1000;
let equity =500;
let assets = liabilities + equity;
console.log(assets);
let profit = 1000;
let sales = 500;
let netIncome = profit * sales;
console.log(netIncome);
let numbers=[7,9,2];
let sum = numbers[0] + numbers [1] + numbers[2];
let average = sum / numbers.length;
console.log(average);
let price = 150;
let discount = 30;
let discountPrice = price - (price * discount /100);
console.log(discountPrice);
let age =20;
if (age>18 | age<30 ){
    console.log(age);
}
let z = 2 **3;
console.log(z);
let y = 2 % 4;
console.log(y);
console.log(typeof 100);
console.log(typeof(73.9));
console.log(typeof(NaN));
console.log(typeof("Water"));
console.log(typeof(false));
console.log(typeof(9 != 11));
console.log("Orang" + "e");
console.log("Orange" - "s");
console.log("4" + "8");
console.log("4" - "8");
console.log("name" + 3);
console.log("name" - 3);
console.log(82 * "word");
console.log(1 + "hello");
console.log("hello" + 1);
console.log(1 + true);
console.log("hello" + true);
console.log(typeof (Infinity));
console.log(1 == '1');
console.log(1 === '1');
var orange = "Welcome To Orange";
let u = orange.toUpperCase();
console.log(u);
let words =u.split(" ");
console.log(words[1]);
let low = orange.toLowerCase();
console.log(low);
let lettercount = orange.length;
console.log(lettercount);
console.log(words[0]+ words[1] + " "  + "orange");
const capitalizeEveryWord= str =>
    str.replace(/\b[a-z]/g, char => char.toUpperCase());
var myvariable = "welcome to orange"
console.log(capitalizeEveryWord(myvariable));

function replaceFirstLetterOccurrences(str) {
    if (str.length === 0) return str; 
    let firstLetter = str[0];
    let regex = new RegExp(firstLetter, 'gi'); 
    return str.replace(regex, '*'); 
}

let sentence = "Welcome to orange";
let result = replaceFirstLetterOccurrences(sentence);
console.log(result); 
//idk why its not working tbf
// moving on to arrays
var c5 = ["Coding","Academy", "By", "Orange"];
c5.push("Jordan")
console.log(c5);
c5.pop(2)

let fruits = ["coding", "academy", "by", "Orange", "jordan"];
let selectedFruits = [fruits[0], fruits[1]];
console.log(selectedFruits); //or using slice 
let arr = ["Coding", "Academy", "By", "Orange"];
let arr3 = ["Welcome", "To", ...arr];
console.log(arr3); //spread operator
let resault = `"${arr.map(item => item).join(' ')}"`;
console.log(resault);//mapping
let arr6 = [...arr];
console.log(arr6); 
let arr7 = [arr[0], arr[arr.length - 1]];
console.log(arr7);
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
vegetables.pop();
console.log(vegetables);
fruit.shift();
console.log(fruit);
console.log(fruit.indexOf("orange"));
fruit.push(1);
console.log(fruit);
console.log(fruit.length);
vegetables.push(4);
console.log(vegetables);
let food =[...vegetables, ...fruits];
console.log(food);
 const kiwi = ["Banana", "Orange", "Apple", "Mango"];
const fruits2 = kiwi.reverse();
console.log(fruits2);
console.log(food.splice(4,2));

function stringToArray(str) {
    return str.split(' ');
}


let input = "Orange Jordan";
let output = stringToArray(input);
console.log(output); 


function hidePhoneNumber(phoneNumber) {

    phoneNumber = phoneNumber.toString();
  
    let hiddenPart = '*******';
    let visiblePart = phoneNumber.slice(7);
    return hiddenPart + visiblePart;
}

function hideEmail(email) {
    // Split the email into two parts: before and after the '@' symbol
    let [localPart, domain] = email.split('@');
    // Replace part of the local part with '...'
    let hiddenLocalPart = localPart.slice(0, 6) + '...';
    // Combine the hidden local part with the domain
    return hiddenLocalPart + '@' + domain;
}


let input7 = "orange_academy@orange.jo";
let output3 = hideEmail(input7);
console.log(output3); // orange...@orange.jo

const capitalizeEveryWordd= str =>
    str.replace(/\b[a-z]/g, char => char.toUpperCase());
var myvariable = "coding academy by orange"
console.log(capitalizeEveryWordd(myvariable));


let num1 = 92485;
let resultt = num1.toString().split('').reverse().join('');
console.log(resultt);
 
function swapWithTemp(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return {a, b};
}

let result1 = swapWithTemp(3, 4);
console.log(result1); 

function swapWithDestructuring(a, b) {
    [a, b] = [b, a];
    return {a, b};
}

let result2 = swapWithDestructuring(3, 4);
console.log(result2);
function swapWithArithmetic(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return {a, b};
}

let result3 = swapWithArithmetic(3, 4);

console.log(result3); 
var str = "orange";
str = str.slice(0, 3) + str.slice(4);
