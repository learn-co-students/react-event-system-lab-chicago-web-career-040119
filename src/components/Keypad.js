// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

    handleInput = () => {
       return console.log('Entering password...')
    }

    render() {
        return (
            <input type="password" onKeyUp={this.handleInput} placeholder="enter pass"></input>
        )
    }
}
