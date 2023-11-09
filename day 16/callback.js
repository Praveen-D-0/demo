//  let sayHello = function (){
//     console.log("hello");
//  }
//  setTimeout(sayHello, 3000);

// function incrementBy5(N){
//    return N + 5;
// }
// function multiplyBy3(N) {
//    return N * 3;
// }

// function arithmeic(N, increment){
//    N = increment(N);
//    N = multiplyBy3(N);
//    console.log(N);
// }
// let N = 5;
// arithmeic(N, incrementBy5);
// function hello(){
//    console.log('hello');
// }
// let hi = hello;
// hi();
//-------------------------------------------------------------
// function incrementBy5(N){
//    console.log(N + 5);
// }
// let array = [ 1,2,3,4,5];
// array.forEach(incrementBy5);

// function greet( name, callback) {
//    console.log(`Hello ${name}!`);
//    callback();

// }
// function sayGoodBye(){
//    console.log('Goodbye!');

// }
// greet('krish', sayGoodBye);


// function greet(name, callback) {
//     console.log(`Hello ${name}!`);
//     callback(); // call the callback function
// }

// function sayGoodBye() {
//     console.log('Goodbye!');
// }

// greet('krish', sayGoodBye);
// function foo() {
//    console.log("Inside foo");
//  }
 
//  function bar() {
//    console.log("Inside bar");
//    foo();
//  }
 
//  bar();

 
function firstTask(callback) {
   console.log('starting first task');
   setTimeout(() => {
       console.log('first task is completed!');
       callback();
   }, 2000);
}

function secondTask(callback) {
   console.log('staring second task');
   setTimeout(() => {
       console.log('second task is completed!');
       callback();
   }, 2000);
}

function thirdTask(callback) {
   console.log('starting third task');
   setTimeout(() => {
       console.log('third task is completed!');
       callback();
   }, 2000);
}

// callback hell or pain of callback
firstTask(function () {
   secondTask(function () {
       thirdTask(function () {
           console.log('all the tasks are completed!');
       });
   });
});
