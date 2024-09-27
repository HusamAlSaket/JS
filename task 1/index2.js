function mergeStrings(str1, str2) {
  
    return str1.slice(1) + str2.slice(1);
}
const result = mergeStrings("lora", "inge");
console.log(result); 

let sentence= "Coding Academy by Orange";
let text= sentence.split(" ");
console.log(text);

function reverseString(str){
var splitString =str.split("");
var reverseArray = splitString.reverse();
var joinArray = reverseArray.join();
return joinArray
}

console.log(reverseString("orange"));



function calculateAge(yearOfBirth) {
    const currentYear = new Date().getFullYear();
    return currentYear - yearOfBirth;
  }
  

  function checkEligibility(yearOfBirth) {
    const age = calculateAge(yearOfBirth);
    
    if (age > 60) {
      console.log("You may join the seniors' program.");
    } else if (age > 30) {
      console.log("You are not eligible. You may join other programs.");
    } else if (age >= 18 && age <= 30) {
      console.log("You are eligible. Start your application.");
    } else if (age < 18) {
      console.log("You may join the kids' program.");
    }
  }
  

  const yearOfBirth = prompt("Enter your year of birth:");
  checkEligibility(yearOfBirth);
  
 change = function change(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(change('OrAnGe'));

const capitalizeEveryWord= str =>
    str.replace(/\b[a-z]/g, char => char.toUpperCase()).replace(/\s+/g,'');
var myvariable = "coding academy by orange"
console.log(capitalizeEveryWord(myvariable));

// const arr1 = ["coding", "academy", "By", "Orange", "By"]
// arr1.indexOf("By");
// arr1.splice(2)
// console.log(arr1);
function removeElement(arr, element) {
    return arr.filter(item => item !== element);
}

const inputArray = ["Coding", "Academy", "By", "Orange", "By"];
const elementToRemove = "By";
const sure = removeElement(inputArray, elementToRemove);

console.log(sure); 

