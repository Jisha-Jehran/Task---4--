//PART 1
//B)SOLVING BY USING IIFE FUNCTION: 
//The below programs are in IIFE Functions...

// Question:1 ==>   Print odd number in an array using IIFE function.

let a = [1,2,3,4,5,6,7,8,9,10];
 
let value  =(function odd (array){
   let oddnumberinArray = [];
    for(let i=0; i<=array.length-1; i++){
        if(array[i]%2 != 0){
           oddnumberinArray.push(array[i]);
        }
    }
    return oddnumberinArray
})
let output = value(a);
console.log(...output)

// Question: 2 ==>   Convert all the strings title caps in the string array using IIFE Function.

let valuestring = (function finaloutput(stringArray) {
for (let i = 0; i < stringArray.length; i++) {
    let word = stringArray[i];
    let titleCaseWord = "";
    titleCaseWord += word[0].toUpperCase();
     for (let j = 1; j < word.length; j++) {
        titleCaseWord += word[j];
    }

    stringArray[i] = titleCaseWord; 
}
console.log(stringArray);
})
let stringArray = ["jisha","jehran","appu"];
valuestring(stringArray)

// Question: 3 ==>  Print Sum of all numbers in an array using IIFE Function.

let b = [1,2,3,4,5,6,7,8,9,10];
 let sum = 0;
 let valueAddition =  (function addition (array) {
    for(let i = 0; i <= array.length-1; i++){
                
    sum = sum + array[i];
        }
             return sum;
              })
 let sumadd = valueAddition(b);
console.log(sumadd);  

//Question: 4 ==> Print all the prime numbers in an array using IIFE Function.

let array = [2,3,4,5,6,7];
let  valueResult= (function result (array)  {
let primenumber = []
for(let k = 0; k <= array.length-1; k++){
    let count = 0;
    let prime = 0
    for(let i = 1; i <= array[k]; i++){
        if(array[k]%i === 0){
            count = count+1;
            prime = array[k];
        }
    }
    if(count === 2){
        primenumber.push(prime)
    }
}
console.log(...primenumber)
})
valueResult(array)

// Question 5 ==> Return all the Palindrome in an array using IIFE function.

let  valPalindrome = (function palindrome (arrayNumber)  {
    for(let k = 0; k <= arrayNumber.length-1; k++){
        let a = arrayNumber[k];
        let result = a;
        for(let i = 0, j = a.length-1; i < j; i++, j--){
            if(a[i] !== a[j]){
                result = '';
                break;
            }
        }
        console.log(result);
    }
 })
 let arrayNumber = ["mom","dad","madam","pink"];
valPalindrome(arrayNumber)  

// Question 6 ==> Return median of two sorted arrays of the same size using IIFE Function.

const valuemean = (function findMedian(arr1, arr2) {
    const mergedArray = [];
    let i = 0, j = 0;
    const totalLength = arr1.length + arr2.length;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    const mid = totalLength / 2;
    return totalLength % 2 === 0
        ? (mergedArray[mid - 1] + mergedArray[mid]) / 2
        : mergedArray[Math.floor(mid)];
});

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let median = valuemean(arr1, arr2);
console.log(median);

// Question: 7 ==> Remove duplicate from an array using IIFE function.

let dupArray = [1, 2, 4, 3, 5, 5, 4, 3, 2, 6, 7, 8, 6];
let  valueduplicate = (function duplicate(dupArray){
let result = [];

    for (let i = 0; i < dupArray.length; i++) {
        let number = dupArray[i];
        if (result.indexOf(number) === -1) {
            result.push(number);
        }
    }

    console.log(...result);
})
valueduplicate(dupArray)

// Question: 8 ==> Rotate an array by k times using IIFE function.

let newarray = [1, 2, 3, 4, 5];
let k = 3;
const  valrotate =(function rotateRight(arr) {
    let lastElement = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = lastElement;
});
for (let i = 0; i < k; i++) {
    valrotate(newarray);
}

console.log( ...newarray);