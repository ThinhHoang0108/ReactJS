import React from "react"
import "../DisplayInfor.scss"
import logo from "./../../logo.svg"
class DisplayInfor extends React.Component {
  state = {
    isShowListUsers: true
  }
  handleShowHide = () => {
    this.setState({
      isShowListUsers: !this.state.isShowListUsers
    })
  }
  render() {
    //destructuring array/object
    const { listUsers } = this.props
    // console.log(listUsers)
    return (
      //props => vt tat cua properties
      <div className='display-infor-container'>
        <img src={logo}></img>
        <div>
          <span
            onClick={() => {
              this.handleShowHide()
            }}
          >
            {this.state.isShowListUsers === true ? "Hide" : " Show"}
          </span>
        </div>
        {this.state.isShowListUsers && (
          <div>
            {listUsers.map((user) => {
              // console.log(">>> check map user", user)
              return (
                <div key={user.id} className={+user.age < 50 ? "red" : "green"}>
                  <div>My name {user.name}</div>
                  <div>My age {user.age}</div>
                  <hr></hr>
                </div>
              )

              // if (+user.age < 50) {
              //   return (
              //     <div key={user.id} className='red'>
              //       <div>My name {user.name}</div>
              //       <div>My age {user.age}</div>
              //       <hr></hr>
              //     </div>
              //   )
              // } else {
              //   return (
              //     <div key={user.id} className='green'>
              //       <div>My name {user.name}</div>
              //       <div>My age {user.age}</div>
              //       <hr></hr>
              //     </div>
              //   )
              // }
            })}
            {/* <div>My name is {name}</div>
        <div>My age {age}</div>
        <div>{myInfor}</div> */}
          </div>
        )}
      </div>
    )
  }
}
export default DisplayInfor
