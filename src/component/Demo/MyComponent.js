//class component
//func comp
import React from "react"
import Userinfor from "./Userinfor"
import DisplayInfor from "./DisplayInfor"
class MyComponent extends React.Component {
  //JSX
  render() {
    const myInfor = ["ab", "c", "c"]
    return (
      <div>
        <Userinfor></Userinfor>
        <DisplayInfor name='Sprign bot' age='24'></DisplayInfor>
        <hr></hr>
        <DisplayInfor name={"Eric"} age={true} myInfor={myInfor}></DisplayInfor>
      </div>
    )
  }
}

export default MyComponent
