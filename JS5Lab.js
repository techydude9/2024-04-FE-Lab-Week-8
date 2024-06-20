/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  Object Oriented Programming (OOP) Lab
   FE JS5 Lab

   Lab 8 Solution by Bob Ruzga April 2024 FE Cohort
   June 20, 2024 lab date
*/

/* ----------------------------------------------------- */

/* Key Terms:
 * Class
 * Constructor
 * Object
 * Method
 * Instance
 * Instantiate
 * Parameter
 * Argument
 * Invoke or call a function
 * Superclass or Parent class
 * Subclass or Child class
 *
 * Objectives:
 * ​Utilize appropriate data types and structures.
 * Use dot notation to access object property values
 * Create an instance of a class
 * Call methods of an instantiated class
 * Understand how inheritance works in basic OOP
 * Use superclasses and subclasses
 */

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/
// Question 1: Object Values
console.log(`--------------------------
Question 1: Object Values \n`)

// Provided code:
let person = {
  firstname: 'Neil',    // bjr - corrected misspelled first name (orig Niel)
  lastname: 'Armstrong',
  year: 1969,
  occupation: 'astronaut',
}
console.log(
  `${person.firstname} ${person.lastname} was an ${person.occupation}.`
)

/*
 * Using the person object from above and the given console.log for reference:
 * Step 1: Print to the console the following sentence (make sure to fill in the name, and year programmatically): "On July 20th 1969, Niel Armstrong was the first person to set foot on the Earth's moon."
 * Notice that the provided console above is using template literals.
 *
 * ↓ YOUR CODE HERE ↓ */
// "On July 20th 1969, Niel Armstrong was the first person to set foot on the Earth's moon."
  console.log('   ---- Question 1 - Answer: -----');

  console.log(`On July 20th ${person.year}, ${person.firstname} ${person.lastname} was the first person to set foot on the Earth's moon.
    `);    //purposely placed this on a new line for question/ answer spacing


/*-------------------------------------------------------*/
// Question 2: Instance of a Class
console.log(`--------------------------
Question 2: Instance of a Class \n`)

// Provided code:
class Greeting {
  constructor(name, place) {
    this.name = name
    this.place = place
  }

  hello() {
    console.log(`Hello, ${this.name} from ${this.place}!`)
  }
}

let greeting = new Greeting('Jennifer', 'NY')
greeting.hello()

/*
 * Using the provided code above:
 * Step 1: Create another instance of Greeting called myGreeting with your name and location as the arguments
 * Step 2: Invoke the hello method with the myGreeting instance
 * Step 3: A greeting should print to the console
 *
 * ↓ YOUR CODE HERE ↓ */
console.log('   ---- Question 2 - Answer: -----');

  let myGreeting = new Greeting('Bob Ruzga', 'Alva, FL') //step 1
  myGreeting.hello();  //steps 2 n 3
  console.log('\n');


/*-------------------------------------------------------*/
// Question 3: myBook
console.log(`--------------------------
Question 3: Instance of a Class \n`)

// Provided code:
class Book {
  constructor(title, author) {
    this.title = title
    this.author = author
  }

  describe() {
    return `${this.title} was written by ${this.author}.`
  }
}

/*
 * Using the provided code above:
 * Step 1: Create an new instance of Book called 'myBook' (see "new" keyword)
 * Step 2: Use "Pride and Prejudice" and "Jane Austen" as the arguments
 * Step 3: Using myBook, print just the title of the book to the console (see "this" keyword)
 * Step 4: Now print the author of the book to the console
 * Step 5: Invoke the describe method for the myBook instance. Surround with console.log to print to the console.
 * Step 6: Create an new instance of Book called 'yourBook' with a title and author of your choosing
 * Step 7: Invoke the describe method for the yourBook instance. Make it print to the console also.
 *
 * ↓ YOUR CODE HERE ↓ */
console.log('   ---- Question 3 - Answer: -----');

  let myBook = new Book('Pride and Prejudice', 'Jane Austen');   //steps 1 & 2
  console.log(`Title of my book is ${myBook.title}`);  // Step 3
  console.log(`Author of my book is ${myBook.author}`);   //step 4

  console.log(myBook.describe()); //Step 5

  let yourBook = new Book('Sum of All Fears', 'Tom Clancey');  //step 6
  console.log(yourBook.describe());  //Step 7
  console.log('\n');  // added to make reading easier in console

/*-------------------------------------------------------*/
// Question 4: Create a Class
console.log(`--------------------------
Question 4: Create a Class \n`)

/*
 * Step 1: Create a Fruit class with a constructor that has the properties of name, color, and taste
 * Step 2: Create a method inside of Fruit that prints a description of the fruit to the console, for example: "A lime is green and has a sour taste."
 * Step 3: Create an instance of Fruit called fruit1 with arguments lime, green, and sour
 * Step 4: Then create an instance of Fruit called fruit2 with arguments banana, yellow, and sweet
 * Step 5: Invoke the describe method for both instances of Fruit, fruit1 and fruit2.
 *
 *
 * ↓ YOUR CODE HERE ↓ */
console.log('   ---- Question 4 - Answer: -----');

// step 1
  class Fruit {
    constructor(name, color, taste){
      this.name = name
      this.color = color
      this.taste = taste
    }

  // step 2
    description() {
      console.log(`A ${this.name} has a ${this.color} color and tastes ${this.taste}`)
    }
  }

  //step 3
  let fruit1 = new Fruit('lime', 'green', 'sour');

  //step 4
  let fruit2 = new Fruit('banana', 'yellow', 'sweet');

  //step 5
  fruit1.description();
  fruit2.description();

  console.log('\n');
/*-------------------------------------------------------*/
// Question 5: Inheritance and Polymorphism
console.log(`--------------------------
Question 5: Inheritance and Polymorphism \n`)

// Look at the provided code below. Notice how Student and Teacher inherit from the Person class through the use of the "extends" and "super" key words. Also, how Student has a redefined details method that is more appropriate than the details method it would have inherited from the Person super class...

class Person {
  constructor(name, role) {
    this.name = name
    this.role = role
  }
  introduction() {
    return `Hi, my name is ${this.name}.`
  }
  details() {
    return `I work as a ${this.role}.`
  }
}

class Student extends Person {
  constructor(name, role) {
    super(name, role)
  }
  details() {
    return `I am a ${this.role}.`
  }
}

class Teacher extends Person {
  constructor(name, role) {
    super(name, role)
  }
}

/*
 * Using the provided code above:
 * Step 1: Instantiate a new student called student with arguments of "Jacky" and "student"
 * Step 2: Instantiate a new teacher called teacher with arguments of "Mr. Bean" and "teacher"
 * Step 3: Call the introduction method on your new student instance AND the details method, make sure that the results are printed to the console.
 * Step 4: Call the introduction method on your new teacher instance AND the details method, make sure that the results are printed to the console.
 *
 * ↓ YOUR CODE HERE ↓ */
console.log('   ---- Question 5 - Answer: -----');
  let student = new Student('Jacky', 'student');   //step 1
  let teacher = new Teacher('Mr. Bean', 'teacher'); //step 2

  console.log(student.introduction() + "\n" + student.details());  //step 3
  console.log(teacher.introduction() + "\n" + teacher.details());  //step 4

  console.log('\n');   //console readability


/*-------------------------------------------------------*/
// Question 6: Inheritance
console.log(`--------------------------
Question 6: Inheritance \n`)

// Provided code:
class Parent {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  details() {
    console.log(`${this.name} Addams is ${this.age} years old.`)
  }
}

/*
 * Using the provided code above:
 * Step 1: Create a subclass called Child that inherits the name and age properties from the Parent super class.
 * Step 2: Create an instantance of the Child class called child with arguments "Pugsley" and 10
 * Step 3: Invoke the details method using the new instance child.
 * HINT: You should be using vital key terms like extends and super
 *
 * ↓ YOUR CODE HERE ↓ */

console.log('   ---- Question 6 - Answer: -----');
    // Step 1
  class Child extends Parent {
    constructor(name, age){
      super(name, age);
    }
  }

  let child = new Child('Pugsley', 10);   // Step 2
  child.details();  // Step 3

  console.log('\n');  // for answer readability

/*-------------------------------------------------------*/
// Question 7: Put it all together
console.log(`--------------------------
Question 7: Put it all together \n`)

/*
 * Step 1: Create a class called Movie with a constructor that takes in a title and director
 * Step 2: Create a method inside of Movie called "describe" that returns the following sentence (make sure to fill in the title and director programmatically): "The movie [movie name here] was directed by [director name here]."
 * Step 3: Create another class called List with a constructor that is an empty array called movies
 * Step 4: Create a method called addMovie inside of List that will recieve a movie as a parameter and add it to the movies array
 * Step 5: Create another method called displayMovies in the List class that will return all of the movie titles and directors using a for loop
 * Step 6: Create two instances of Movie called movie1, use "Jurassic Park" and "Steven Spielberg" as it's arguments AND movie2, use "How the Grinch stole Christmas" and "Ron Howard" as it's arguments
 * Step 7: Invoke the describe method on movie1, make sure it prints to the console
 * Step 8: Invoke the desrcibe method on movie2, make sure it prints to the console
 * Step 9: Create an instance of List called list and add movie1 and movie2 to the movies array
 * Step 10: Display the movies information to the console, using the new instance list
 *
 * ↓ YOUR CODE HERE ↓ */
console.log('   ---- Question 7 - Answer: -----');

class Movie {             // step 1    
  constructor(title, director) {
    this.title = title;
    this.director = director;
  }

  describe(){       // step 2
    return `The movie ${this.title} was directed by ${this.director}.`
  }
}

class List {        // Step 3
  constructor(movies){
    this.movies =[];
  }

  addMovie(movie){     // Step 4
    this.movies.push(movie);
  }

  displayMovies(){     // Step 5
    let listOfMovies = " ";
    for (let x = 0; x < this.movies.length; x++){
       listOfMovies += `${this.movies[x].title}, directed by ${this.movies[x].director}. \n `
    }
    return listOfMovies;
  }
}
  let movie1 = new Movie("Jurassic Park", "Steven Spielberg");            // Step 6
  let movie2 = new Movie("How the Grinch stole Christmas", "Ron Howard");

  console.log(movie1.describe());   // Step 7
  console.log(movie2.describe());   // Step 8

  let list = new List;              // Step 9
      list.addMovie(movie1);
      list.addMovie(movie2);     

  //    console.log(list);    for debugging

  console.log(list.displayMovies());    // Step 10


console.log('\n' + "All Questions Solved!!!! Yeah!");
console.log(`-----------Finished------------`)