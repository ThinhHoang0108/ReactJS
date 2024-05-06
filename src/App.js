import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Demo/Header";
import HeaderRFC from "./component/Demo/HeaderRFC";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeaderRFC></HeaderRFC>
    </div>
  );
}

export default App;
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
function handle(cb){
  cb();
}
class Cat{
  constructor(name, color, type){
    this.name = name
    this.color = color
    this.type = type
    this.meow = this.meow.bind(this)
  }
  meow(){
    console.log(`${this.name} meow: meow meow meow`)
  }
  run(){
    handle(this.meow)
  }
}
let alex = new Cat('Alex', 'Yellow', 'Bengal')
alex.run()
