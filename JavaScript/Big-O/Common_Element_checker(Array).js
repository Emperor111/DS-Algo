// Q.) Give 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z','y','i'];
//Should return false
//-----------
const array1 = ['a','b','c','x'];
const array2 = ['z','y','x'];
//Should return true

//We have two parameters
//Return true or false

//Ask : How large is the array gonna get. let's say no size limit.
//Do we want efficient program.

//Brute Force : Speak loud
//App1 : We can do nested loop. We are gonna get O(n^2)

function commonChecker(arr1,arr2){
    for (let i = 0; i < arr1.length, i++){
        for(let j= 0; j< arr2.length, j++){
            if (arr1[i]===arr2[j]){
                return true;
            }
        }
    }
    return false;
}

//BETTER SOLUTION

//we can also use hash tables , called object in javascript
//array1==> obj{
// a:true,
// b:true,
// c:true,
// x:true}
//array2[index]===obj.properties

function commonChecker2 (arr1, arr2){
    // loop through first array and create object where properties === items in the array
    let map = {};
    for (let i=0; i<arr1.length; i++){
        if(!map[arr1[i]]){
            const item = array[i];
            map[item] = true;
        }
    }
    // loop through second array and check if item in second array exists on created object.
    for (let j=0; j<arr2.length; j++){
        if(map[arr2[j]]){
            return true;
        }
    }
    return false
}

//Time complexity for this is O(a+b)

//Think of edge cases to break your code :
//Let's say we change array1 inputs to a int type or empty array : 
//It will work (Reason In js, Object properties are turned into strings when created)

//BUT WHAT IF WE DON'T INPUT THE SECOND ARRAY : GIVES ERROR

//There is another better solution specific to JS ES6

function commonChecker3(arr1, arr2){
    return arr1.some(item=>arr2.includes(item))
}

commonChecker3(array1,array2)