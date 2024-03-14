//11.a
console.log("modify the item in the array")
const nums=[10,20,30];
console.log("num value before modification: "+nums)
nums[2]=99;
console.log("num value after modification: "+nums)
console.log("===========================================================");

//11.b
// get Last Value in a Array
console.log("get Last Value in a Array")
var array1=[1,20,22,24,5];
var array2=['hi', 'hello', 'good'];
function getLastValue(array) {
    let lastIndex = array.length - 1;
    console.log("last value of the array is: "+array[lastIndex]);
}
 getLastValue(array1);
 getLastValue(array2);
 console.log("===========================================================");

//11.c swap the first and last values of an array 
//method1
console.log("swap the first and last values of an array //method1")
function arraySwap(array){
    let lastIndex = array.length - 1;
    //displaying array before swapping
    console.log("Array value before swap: "+ array)
   
    // array [0,lastIndex] = array [lastIndex,0]; last value will replaced with 1st value
    //(if array value is [1,20,22,24,5] then output will be [1,20,22,24,1])
    
     // Swapping the first and last values
   let temp=array[0];
    array[0]=array[lastIndex]
    array[lastIndex]=temp
    //displaying array after swapping
    console.log("Array value after swap: "+ array)
}
arraySwap(array1)
arraySwap(array2)
console.log("===========================================================");

//method2
console.log("method2")
function arraySwap1(array){
    // Swapping the first and last values
    [array[0], array[array.length-1]] = [array[array.length-1], array[0]];
  
    //displaying array after swapping*/
    console.log("Array value after swap: "+ array)
    //return array;
    }
    console.log("Array value before swap: "+ array1)
    arraySwap1(array1)
    console.log("Array value before swap: "+ array2 )
    arraySwap1(array2)
console.log("===========================================================");
//11.d
//create a for loop that count up from 0 to 10 but counts up by 2
console.log("create a for loop that count up from 0 to 10 but counts up by 2");
for (let i = 0; i <= 10; i += 2) {
        console.log(i);
    }
    console.log("===========================================================");
    //11.e
    //create a for loop that count dowm from 5 to 0
    console.log("//create a for loop that count dowm from 5 to 0")
    for (let i = 5; i >= 0; i--) {
        console.log(i);
    }
    console.log("===========================================================");
    //11.f
//do exercise 11.d and 11.e using while loop
console.log("create a while loop that count up from 0 to 10 but counts up by 2");
console.log("using while loop")
let i=0;
while(i<=10){
    console.log(i);
    i += 2
}
console.log("===========================================================");
console.log("using do-while loop")
let j=5;
do{
    console.log(j);
    j--;
}while(j>=0);

console.log("===========================================================");
//11.g
//create an array that takes no and, create a new array where each no is increased by 1
console.log("create an array that takes no and, create a new array where each no is increased by 1")
const arr1=[1,4,6,3,8,7]
//using map fn to increase it by 1
const map1=arr1.map((element)=>element+1)
console.log(`Array value is :${arr1}`)
console.log(`the array value which is increased by 1 is: ${map1}`)
console.log("===========================================================");
//11.h
//create an array that takes no and, create a new array where each no is increased by 1
console.log("create an array that takes no and, create a new array where each no is increased by 1")
function addone(array){
    let newarray=[];
    for (let i = 0; i < array.length; i++) {
    newarray.push(array[i]+1);
    }
    console.log(`the array value which is increased by 1 is: ${newarray}`)
    console.log("===========================================================");

}
let originalArray = [11, 92, 23, 84, 65];
console.log(`originalArray value is :${originalArray}`)
addone(originalArray)

//11.i
//create a function addNum(array , num)where each no in array should increased by num
console.log("create a function addNum(array , num)where each no in array should increased by num")
function addNum(array,num){
    let newarray=[];
    for (let i = 0; i < array.length; i++) {
    newarray.push(array[i]+num);
    }
    console.log(`the array value which is increased by num is: ${newarray}`)
    console.log("===========================================================");

}
let Arr3 = [11, 92, 23, 84, 65];
console.log(`originalArray value is :${Arr3}`)
addNum(Arr3,3)

//11.j
//create a function to add two arrays
console.log("create a function to add two arrays")
function addArray(ar1, ar2) {
    let newArray = [];

    // Check if the arrays have the same length
    if (ar1.length === ar2.length) {
        for (let i = 0; i < ar1.length; i++) {
            newArray.push(ar1[i] + ar2[i]);
        }

        console.log(`The array resulting from the addition is: ${newArray}`);
    } else {
        console.log("Arrays must have the same length for addition.");
    }

    console.log("===========================================================");
}

let Arr1 = [11, 92, 23, 84, 65];
console.log(`array1 value is :${Arr1}`)
let Arr2 = [1, 2, 3, 4, 5];
console.log(`array2 value is :${Arr2}`)
addArray(Arr1, Arr2);

//11.k
//create a function to count positive nos in the array
console.log("create a function to count positive nos in the array")
function countPositive(nums){
    var pos_count=neg_count=0
nums.forEach(element => {
if(element>0){
    pos_count++
    
}
else{
    neg_count++
    
}

})
console.log("Total positive no in the Array is: "+pos_count)
console.log("Total negative no in the Array is: "+neg_count)
}
var numbers=[10,-12,89,56,-83,8,90,-8]
countPositive(numbers)
console.log("===========================================================");

//11.l,11.m
//create a object from array by finding a minimum and maximum no in the array
console.log("create a object from array by finding a minimum and maximum no in the array")
function minMax(nums){
    var MinNumber=0, MaxNumber=0; 
    if(nums.length==0)
    {
        MinNumber=null;
        MaxNumber=null;
    }
    else if(nums.length<2)
    {
        MinNumber=nums[0];
        MaxNumber=nums[0];
    }
    else
    {
        nums.forEach(element=>{
    
            if(element<MinNumber)
            {
                MinNumber=element;
            }
            else(element>MaxNumber)
            {
                MaxNumber=element;
            }
        
    
})
    }
console.log(`{min: ${MinNumber}, max: ${MaxNumber}}`)
}
minMax([]);
minMax([11]);
minMax([1,-3,5]);
minMax([-2,3,-5,7,10]);
console.log("===========================================================");

//11.n
//create a function to count,how many times each string appears in the array
console.log("create a function to count,how many times each string appears in the array");

function countWords(words) {
    var wordCount = {};//creating wordcount object to store the result
    words.forEach(word => {
        //If the word already exists in wordCount object, its count is incremented by 1.
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            //If the word does not exist in wordCount, it is added as a key with a value of 1.
            wordCount[word] = 1;
        }
    });
    console.log(wordCount);
}

const wordArray = ['apple', 'grape', 'apple', 'apple', 'banana'];
countWords(wordArray);
console.log("===========================================================");
//11.o,11.p,11.q
console.log("find the first index of the word given");

function findIndex(array, word) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == word) {
            console.log(`Index of the word "${word}" is: ${i}`);
            return; // Exit the loop once the word is found
        }
   
} 
    console.log(`The word "${word}" is not in the array: ${-1}`);
}  

const searchWord1 = ['hello', 'world', 'search', 'good', 'search'];
const searchWord2 = ['green', 'red', 'blue', 'red']
findIndex(searchWord1, 'search');
findIndex(searchWord2, 'red');
findIndex(searchWord2, 'yellow');
console.log("===========================================================");

//11.r
console.log("create a function to remove the given word")
function removeEgg(array, word) {
    let result=[];
    for (let i = 0; i < array.length; i++) {
        if (array[i] != word) {
            result.push(array[i])
        }
       else if (array[i] == word) {
            continue;//to skip it and continue to next iteration
        }
   
} 
console.log(result)
   
}  
const removetheWord=["egg", "apple", "egg", "egg", "ham"]
const removetheWord2=["mango", "apple", "mango", "orange", "mango","grapes","mango","mango"]
removeEgg(removetheWord, 'egg')
removeEgg(removetheWord2, 'mango')
console.log("===========================================================");

//11.s
console.log("Creating a function to remove the first 2 given word");

function removeFirstTwo(array, word) {
    let count = 0; // Initialize count variable to keep track of occurrences
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== word) {
            result.push(array[i]); // Add element to result array if it's not equal to the word
        } else {
            count++; // Increment count when word is found
            if (count > 2) {
                result.push(array[i]); // Add the word to result array if it's from third occurrence
            }
        }
    }
    console.log(result);
}

const removeegg2 = ["egg", "apple", "egg", "egg", "ham"];
const removeegg3 = ["mango", "apple", "mango", "orange", "mango", "grapes", "mango", "mango"];

removeFirstTwo(removeegg2, 'egg');
removeFirstTwo(removeegg3, 'mango');
console.log("===========================================================");

//11.t 
console.log("remove last 2 occurrence of the given word")

function removeLastTwo(array, word) {
    let count = 0; // Initialize count variable to keep track of occurrences
    let result = [];
    const reversearray= array.reverse();
    for (let i = 0; i < reversearray.length; i++) {
        if (reversearray[i] !== word) {
            result.push(reversearray[i]); // Add element to result array if it's not equal to the word
        } else {
            count++; // Increment count when word is found
            if (count > 2) {
                result.push(reversearray[i]); // Add the word to result array if it's from third occurrence
            }
        }
    }
    
    console.log("Result is: ",result.reverse());
    console.log("Actual array is:", array)
}

const remove1 = ["egg", "apple", "egg", "egg", "ham"];
const remove2 = ["mango", "apple", "mango", "orange", "mango", "grapes", "mango", "mango"];

removeLastTwo(remove1, 'egg');
removeLastTwo(remove2, 'mango');
console.log("===========================================================");
//11.u
console.log("use 'slice() method in exercise 11.t")

function removeTwoWithSlice(array, word) {
    let count = 0; // Initialize count variable to keep track of occurrences
    let result = [];
   const reversedarray= array.slice().reverse();
    for (let i = 0; i < reversedarray.length; i++) {
        if (reversedarray[i] !== word) {
            result.push(reversedarray[i]); // Add element to result array if it's not equal to the word
        } else {
            count++; // Increment count when word is found
            if (count > 2) {
                result.push(reversedarray[i]); // Add the word to result array if it's from third occurrence
            }
        }
    }
    
    console.log("Result is: ",result.reverse());
    console.log("Actual array is:", array)
}

const foods = ["egg", "apple", "egg", "egg", "ham"];
const fruits = ["mango", "apple", "mango", "orange", "mango", "grapes", "mango", "mango"];

removeTwoWithSlice(foods, 'egg');
removeTwoWithSlice(fruits, 'mango');
console.log("===========================================================");

//11.v
console.log("Fizz BuZZ game with the number 1 to 20")
//var FizzbuzzGame=[]
for(i=1;i<=20;i++){
    if(i%3===0 && i%5===0){
       // FizzbuzzGame.push('FizzBuzz')
       console.log('FizzBuzz')
    }
else if(i%3===0){
    //FizzbuzzGame.push('Fizz')
    console.log('Fizz')
}
else if(i%5===0){
    //FizzbuzzGame.push('Buzz')
    console.log('Buzz')
}
else{
    //FizzbuzzGame.push(i)
    console.log(i)
}

}
//console.log( FizzbuzzGame)
console.log("===========================================================");
//11.w
console.log("create a copy of exercise 11.q and find unique strings in the array ")
function findUniqueString(arr){
    // Create an empty array to store unique elements
    let unique = [];
    
    // Loop through each element in the input array
    for (i = 0; i < arr.length; i++) {
        // Check if the current element is not already in the unique array
        if (unique.indexOf(arr[i]) === -1) {
           // if (!unique.includes(arr[i])) { //another way
           
            // If not, add it to the unique array
            unique.push(arr[i]);
        }
    }
    //}
    console.log("The unique array is",unique);
}

const foods1 = ["egg", "apple", "egg", "egg", "ham"];
findUniqueString(foods1)
const fruits1 = ["mango", "apple", "mango", "orange", "mango", "grapes", "mango", "mango"];
findUniqueString(fruits1)
