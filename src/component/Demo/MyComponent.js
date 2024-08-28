//class component
//func comp
import React from "react"
import AddUserinfor from "./AddUserinfor"
import DisplayInfor from "./DisplayInfor"
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "xuan 1", age: "22" },
      { id: 2, name: "xuan 2", age: "23" },
      { id: 3, name: "xuan 3", age: "224" }
    ]
  }
  handleAddNewUser = (userObj) => {
    let listUsersClone = this.state.listUsers
    listUsersClone.unshift(userObj)
    // console.log("check: ", listUsersClone)
    this.setState({
      listUsers: listUsersClone
    })
    // this.setState({ listUsers: [userObj, ...this.state.listUsers] })
  }
  //JSX
  render() {
    const myInfor = ["ab", "c", "c"]
    return (
      <>
        <div className='a'>
          <AddUserinfor handleAddNewUser={this.handleAddNewUser}></AddUserinfor>
          {/* <DisplayInfor name='Sprign bot' age='24'></DisplayInfor>
        <hr></hr>
        <DisplayInfor name={"Eric"} age={true} myInfor={myInfor}></DisplayInfor> */}
          <DisplayInfor listUsers={this.state.listUsers}></DisplayInfor>
        </div>
        <div className='b'></div>
      </>
    )
  }
}

export default MyComponent
