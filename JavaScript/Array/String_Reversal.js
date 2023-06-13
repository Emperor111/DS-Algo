//Objective : reverse a provided string
//inputs : strings with numbers, alphabets or characters
//Do we need to make it time efficient & space efficient ? Yes and Yes

//Brute force : use split and store in an array. run a loop to allot : new indexs to values

//Bad points : space used is more as we are creating two arrays with O(n) along with time complexity of O(n)

//Code 1
// function reverseString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// // Example usage:
// const input = "Hello, World!";
// const reversed = reverseString(input);
// console.log(reversed);


//Code
function reverse(str) {
    //check input
    if (!str || str.length < 2 || typeof str !== 'string') {
      return "hmm that's not good";
    }
  
    //defined an array which will be returned eventually
    const backwards = [];
    const totalItems = str.length - 1;
    //it's not a problem even if you do not split a string into an array
    for (let i = totalItems; i >= 0; i--) {
      backwards.push(str[i]);
    }
  
    console.log(backwards);
    //to make an array back to string Use : toStrinng("") or join("")
    return backwards.join('');
  }
  reverse("Hi i am eshan")
  
//------------------------------------------------------------------------------------------------------------//

  //Shorter Method

  function reverse2(str){
    return str.split('').reverse().join('')
  }
  
  reverse2("Hi My name is Eshan")
  
//------------------------------------------------------------------------------------------------------------//

  //New ES6 Method
  
  const reverse3 = str => str.split('').reverse().join('');
  
  reverse3("Who are you?")
  
//------------------------------------------------------------------------------------------------------------//

  //New in js : destructuring / spread operator
  
  const reverse4 = str => [...str].reverse().join('');
  
  reverse4("Who am i?");
  