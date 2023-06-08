//Big O
//-----------------------------------------------------------------X-----------------------------------------------------------------------//

//O(n)
// const fish = ['dory', 'bruce', 'marlin', 'nemo'];
// const nemo = ['nemo'];
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// const large = new Array(100000).fill('nemo');

// function findNemo2(fish) {
//   let t0 = performance.now();
//   for (let i = 0; i < fish.length; i++) {
//     if (fish[i] === 'nemo') {
//       console.log('Found NEMO!');
//     }
//   }
//   let t1 = performance.now();
//   console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
// }

// findNemo2(large); // O(n) --> Linear Time

// O(1)
// const boxes = [0,1,2,3,4,5];

// function logFirstTwoBoxes(boxes){
// 	console.log(boxes[0]); // O(1)
// 	console.log(boxes[1]); // O(1)
// }

// logFirstTwoBoxes(boxes) // O(2)

//Exercise O(?)
//1
// What is the Big O of the below function? (Hint, you may want to go line by line)
// function funChallenge(input) {
//     let a = 10;
//     a = 50 + 3; // O(1)
  
//     for (let i = 0; i < input.length; i++) {
//       anotherFunction();
//       let stranger = true;
//       a++; // O(1)
//     }
//     return a;
//  } //My answer O(n)  --here n is the length of input //Right

//2
// What is the Big O of the below function? (Hint, you may want to go line by line)
// function anotherFunChallenge(input) {
//     let a = 5;      //O(1)
//     let b = 10;     //O(1)
//     let c = 50;     //O(1)
//     for (let i = 0; i < input; i++) {  //O(n)
//       let x = i + 1;  //O(1)
//       let y = i + 2;  //O(1)
//       let z = i + 3;  //O(1)
  
//     }
//     for (let j = 0; j < input; j++) {  //O(n)
//       let p = j * 2;  //O(1)
//       let q = j * 2;  //O(1)
//     }
//     let whoAmI = "I don't know";  //O(1)
//  } //My Answer is O(n) //Right

// Rules to Follow = (i) Worst Case (ii) Remove Constants (iii) Different Terms for Input (iv) Drop Non-Dominants

//O(n^2)

//Log all pairs of array
// const boxes = ['a', 'b', 'c', 'd', 'e'];
// function logAllPairsOfArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[i], array[j])
//     }
//   }
// }

// logAllPairsOfArray(boxes) //Here O(n*n) that is O(n^2)

//Example
// function printAllNumbersThenAllPairSums(numbers) {

//     console.log('these are the numbers:');
//     numbers.forEach(function(number) {
//       console.log(number);
//     });
  
//     console.log('and these are their sums:');
//     numbers.forEach(function(firstNumber) {
//       numbers.forEach(function(secondNumber) {
//         console.log(firstNumber + secondNumber);
//       });
//     });
//   }
  
//   printAllNumbersThenAllPairSums([1,2,3,4,5])
  
//   // Here O(n^3)