var age =27;
if(age>18){
    console.log("you are an adult");
}

var score =45;
if(score<=50){
    console.log("you failed the test");
}
var name = "John";
if(name="John"){
    console.log("Hello John");
}
var day ="Monday";
if(day!="sunday" && "saturday"){
    console.log("it's a week day");
}

var num =4;
if(num % 2==0){
    console.log("this number is even");
}
else{
    console.log("this number is odd");
}

var char ="a";
if (char.match(/[a-zA-Z]/)){
    console.log("it's a letter ");
}
else{
    console.log("it's not a letter");
}

var list =[1,2,3];
if(Array.isArray(list)){
    console.log("it's an array");
}
else{
    console.log("it's not an array");
}
var x=5;
if(x>0){
    console.log("x is a positive number ");
}
var y=-5;
if(y<0){
    console.log("y is a negative number");
}

var z =9;
if(z % 3 ===0){
    console.log("z is a multiple of 3");
}

var gpa =3.5;
if(gpa >=3){
    console.log("Congratulations, you have a good GPA!");
}
var password ="mypassword123";
if(password.length >= (8)){
    console.log("your password is strong");
}
else{
    console.log("your password is weak");
}

var age =30;
if(age>=18 && age <=65){
    console.log("you are of working age");
}
else{
    console.log("sorry we accept 18+");
}
var color ="red";
if(color ==="red" || color ==="green" || color ==="blue"){
console.log("color is a primary color");
}
else{
    console.log("its not");
}

function isValidNumber(value){
    return typeof value === 'number';
   
}
console.log(isValidNumber(11));
console.log(isValidNumber("19"));
console.log(isValidNumber("xyz"));
console.log(isValidNumber("17.5"));
console.log(isValidNumber("21f"));
