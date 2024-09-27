var arr =[1,2,3,4,5,6];
let output=[];
arr.forEach(item => {
    output.push(item)
});
console.log(output);

var arr1=[1,2,3,4,5];
var square= arr1.map(arr1 => arr1* 2);
console.log(square);

var arr2=[1,2,3,4];
var y = arr2.filter(arr2 => arr2 % 2 === 0);
console.log(y);

var arr3=[1,2,3,4,5];
var z= arr3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(z);

var arr4=["apple", "banana", "cherry"];
arr4.sort();
console.log(arr4);

arr4.reverse();
console.log(arr4);

var arr5 =[1,2,3];
var arr6 =[4,5,6];

var v =arr5.concat(arr6);
console.log(v);

var arr7=[1,2,3,4,5,6]
var newArr=arr7.slice(0,2).concat(arr7.slice(4));
console.log(newArr);

var arr8=[1,2,3,4,5];
let removed= arr8.splice(1,1);
console.log(removed[0]);


const arr9 = [1, 2, 3, 4, 5];
const stringOutput = arr9.map(element => arr9.indexOf(element) + 1).join(',');
console.log(stringOutput); 

var outcome =arr9.join(',')
console.log(outcome);

const arr10 = "[1, 2, 3, 4, 5]";
const array = arr10.replace(/[\[\]\s]/g, '').split(',');
const lastElement = array[array.length - 1];
console.log(lastElement);

let arr11=[1,2,3,4,5];
let length = arr11.length;
console.log(`Number of elements: ${length}`);
console.log(arr11.join(', '))

const arr12 = [1, 2, 3, 4, 5];
let output2 = '';
for (const value of arr) {
output2 += value + ', ';
}
output2 = output2.slice(0, -2);
console.log(output2);

const arr13 = [1, 2, 3, 4, 5];
let output3 = '';
for (const index in arr) {
output3 += arr[index] + ', ';
}
output3 = output3.slice(0, -2);
console.log(output3);

