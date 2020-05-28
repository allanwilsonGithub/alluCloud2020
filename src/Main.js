import React, { Component } from "react"
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"
import Home from "./home/Home"
import Cookbook from "./cookbook/Cookbook"
import Map from "./map/Map"
import Phonebook from "./phonebook/Phonebook"
import Countries from "./countries/Countries"

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>allanwilson.net</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Cookbook">Cookbook</NavLink></li>
            <li><NavLink to="/Map">Map</NavLink></li>
            <li><NavLink to="/Phonebook">Phonebook</NavLink></li>
            <li><NavLink to="/Countries">Countries</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Cookbook" component={Cookbook}/>
            <Route path="/Map" component={Map}/>
            <Route path="/Phonebook" component={Phonebook}/>
            <Route path="/Countries" component={Countries}/>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default Main