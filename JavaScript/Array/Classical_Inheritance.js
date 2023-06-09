//Example

// Parent class
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    eat() {
      console.log(`${this.name} is eating.`);
    }
  }
  
  // Child class inheriting from the parent class
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    bark() {
      console.log(`${this.name} is barking.`);
    }
  }
  
  // Create an instance of the child class
  const myDog = new Dog('Buddy', 'Labrador');
  
  // Access methods from both parent and child class
  myDog.eat();  // Output: Buddy is eating.
  myDog.bark(); // Output: Buddy is barking.
  