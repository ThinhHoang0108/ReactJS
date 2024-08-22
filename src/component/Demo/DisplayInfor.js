import React from "react"

class DisplayInfor extends React.Component {
  render() {
    //destructuring array/object
    const { age, name, myInfor } = this.props
    console.log(this.props)
    return (
      //props => vt tat cua properties
      <div>
        <div>My name is {name}</div>
        <div>My age {age}</div>
        <div>{myInfor}</div>
      </div>
    )
  }
}
export default DisplayInfor
