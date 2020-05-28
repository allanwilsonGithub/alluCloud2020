import React, { Component, useState } from "react"
import ReactDOM from 'react-dom'

class Cookbook extends Component {
  
  render() {
    const recipeID="I want this to be stored in state"
    return (
      <div>
        <h2>Cookbook</h2>
       <p>{recipeID}</p>
      </div>
    )
  }
}

export default Cookbook