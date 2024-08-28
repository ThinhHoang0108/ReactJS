import logo from "./logo.svg"
import "./App.scss"
import Header from "./component/Demo/Header"
import HeaderRFC from "./component/Demo/HeaderRFC"
import React, { handle, value } from "./react.js"
import MyComponent from "./component/Demo/MyComponent.js"

function App() {
  //JSX
  return (
    <div className='app-container'>
      {/* <Header></Header> */}
      {/* <HeaderRFC></HeaderRFC> */}
      <MyComponent></MyComponent>
    </div>
  )
}

export default App
// Destructuring
// const user = {
//   name: "thinh",
//   age: 222,
//   sex: "male",
// };

// // const name = user.name
// // const age = user.age
// // const sex = user.sex
// const { age: userAge, name, sex } = user;
// console.log(name, userAge, sex);
//Array
// const list = [
//   1,
//   function (a, b) {
//     return a + b;
//   }
// ];
// const [value, sum] = list;
// console.log(sum(2,3));
//Spread Syntax
// const user = {
//   name: 'duoc',
//   age: 24,
//   ability: ['coding']
// }
// //shallow copy
// //const cloneUser
// const cloneUser = {...user}

// console.log(cloneUser == user)
// console.log(cloneUser.name == user.name)

/**
 * Rest parameter
 */
// const handle = ({ a, b, ...c }) => {
//   return c;
// };
// const value = handle({ a: 1, b: 2, c: 3, d: 4, e: 5 });
// console.log(value);
// const a = null
// const b = 12
// const c = 'Hi'
// const d = !(a || b || c)
// console.log(d)
// let user = {}
// user.address ? alert(user.address.street) : alert(undefined)
// function handle(cb){
//   cb();
// }
// class Cat{
//   constructor(name, color, type){
//     this.name = name
//     this.color = color
//     this.type = type
//     this.meow = this.meow.bind(this)
//   }
//   meow(){
//     console.log(`${this.name} meow: meow meow meow`)
//   }
//   run(){
//     handle(this.meow)
//   }
// }
// let alex = new Cat('Alex', 'Yellow', 'Bengal')
// alex.run()
//----------------------------------------------------------
//Function
// Mảng
// var keywords = ["Khoa", "codelearn", "Học lập trình", "codelearn.io"];

// // Lặp qua từng phần tử và xử lý trong hàm callback
// keywords.forEach(function (eachName, index){
//     console.log(index + 1 + ". " + eachName);
// });
//Currying la function ma return ve function
// function findNumber(num){
//   return function(func){
//     const result = [];
//     for(let i = 0; i <= num; i++){
//       if(func(i)){
//         result.push(i)
//       }
//     }
//     return result
//   }
// }
// const value = findNumber(10)(number => number % 2 == 0)
// const newFunc = findNumber(10)
// const value2 = newFunc(number => number % 2 == 0)
// console.log(value2)
//++++AROW FUNCTION
// const findNumber = (num) => (func)  => {
//   const result = [];
//   for (let i = 0; i <= num; i++) {
//     if (func(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// };
// const value = findNumber(10)(number => number % 2 == 0)
// console.log(value)
//--------------------------------------Promise va Async await

// setTimeout(() => {
//   console.log('Hello')
// }, 0)
// const pFunc = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello");
//     }, 0);
//   });

// const value = pFunc()
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.warn(error);
//   })
//   .finally(() => {
//     console.log('Ket thuc roi')
//   });
//   console.log(value)
/**
 * Asyn / Await
 * Await chi su dung duoc trong mot await function
 * Chi su dung await voi promise
 */
// const p2 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("hello");
//     }, 0)
//   })
// const handle = async () => {
//   try {
//     const value = await p2();
//     console.log(value);
//   } catch (error) {
//     console.warn(error);
//   } finally {
//     console.log("Finally");
//   }
// }
// handle()
/**
 * ES6 module
 */
console.log(value)
handle()
