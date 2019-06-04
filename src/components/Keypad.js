import React, { Component } from 'react'

class Keypad extends Component {

  clickHandler = () => {
    console.log('Entering password...')
  }


  render () {
    return (
      <input type='password' onKeyUp={this.clickHandler} />
    )
  }
}

export default Keypad
