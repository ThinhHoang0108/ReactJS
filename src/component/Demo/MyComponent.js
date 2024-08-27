//class component
//func comp
import React from "react"
import Userinfor from "./Userinfor"
import DisplayInfor from "./DisplayInfor"
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "xuan 1", age: "22" },
      { id: 1, name: "xuan 2", age: "23" },
      { id: 1, name: "xuan 3", age: "224" }
    ]
  }
  //JSX
  render() {
    const myInfor = ["ab", "c", "c"]
    return (
      <div>
        <Userinfor></Userinfor>
        {/* <DisplayInfor name='Sprign bot' age='24'></DisplayInfor>
        <hr></hr>
        <DisplayInfor name={"Eric"} age={true} myInfor={myInfor}></DisplayInfor> */}
        <DisplayInfor listUsers={this.state.listUsers}></DisplayInfor>
      </div>
    )
  }
}

export default MyComponent
