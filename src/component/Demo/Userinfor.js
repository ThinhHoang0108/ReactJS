import React from "react"
class Userinfor extends React.Component {
  state = {
    name: "thinh",
    address: "lang ha",
    age: 22
  }
  handleClick(event) {
    console.log(">> Click me my button")
    console.log("My name is ", this.state.name)

    //merge state => react class
    this.setState({
      name: "Xuan",
      age: Math.floor(Math.random() * 100 + 1)
    })
  }

  handleOnMouseOver(event) {
    // console.log(event.pageX)
  }
  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value
    })
    // console.log(event, event.target.value)
  }
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value
    })
    // console.log(event, event.target.value)
  }
  handleOnSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div>
        {/* {" "}
        my first component
        {Math.random()}
         */}
        My name is {this.state.name} from {this.state.age}
        {/* <button onMouseOver={this.handleOnMouseOver}>Hover me</button> */}
        {/* <button
          onClick={(event) => {
            this.handleClick()
          }}
        >
          Click me
        </button> */}
        {/* Form */}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>your name: </label>
          <input type='text' value={this.state.name} onChange={(event) => this.handleOnChangeName(event)}></input>
          <label>your age: </label>
          <input type='text' value={this.state.age} onChange={(event) => this.handleOnChangeAge(event)}></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
export default Userinfor
