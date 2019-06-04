// Code EyesOnMe Component Here
import React from 'react'
export default class EyesOnMe extends React.Component {

  makeBlur =()=> console.log("Hey! Eyes on me!")

  makeFocus =()=> console.log("Good!")


  render() {
    return (
      <div>
        <button onBlur={this.makeBlur} onFocus={this.makeFocus}>
        Eyes on me!
        </button>
      </div>
    )
  }
}
