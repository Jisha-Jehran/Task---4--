// PART 2
// The programs in the Arrow Functions.

//Question 1:  Print odd numbers in the array using Arror Function.

let a = [1,2,3,4,5,6,7,8,9,10];
 
     let odd = (array) => {
        let oddnumberinArray = [];
         for(let i=0; i<=array.length-1; i++){
             if(array[i]%2 != 0){
                oddnumberinArray.push(array[i]);
             }
         }
         return oddnumberinArray
     }
     let output = odd(a);
console.log(...output)

// Question 2: Convert all the strings title caps in the string array.

let finaloutput = (stringArray) => {
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
}
let stringArray = ["jisha","jehran","appu"];
finaloutput(stringArray)

// Question 3:   Print sum of all numbers in the array using Arrow Function.

 let b = [1,2,3,4,5,6,7,8,9,10];
 let sum = 0;
 let addition =   (array) => {
    for(let i = 0; i <= array.length-1; i++){
                
    sum = sum + array[i];
        }
             return sum;
              }
 let sumadd = addition(b);
console.log(sumadd);  
 
// Question 4: Return all the Prime Numbers in an array using Arrow Function.

let array = [2,3,4,5,6,7];
let result = (array) =>  {
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
}
result(array)

// Question 5: Return all the Palindromes Numbers in an array using Arrow Function.

let  palindrome = (arrayNumber) => {
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
 }
 let arrayNumber = ["mom","dad","madam","pink"];
palindrome(arrayNumber)  