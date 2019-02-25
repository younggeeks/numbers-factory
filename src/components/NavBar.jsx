import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import logo from "../assets/img/phone.png"
export default class NavBar extends Component {
  render() {
    return (
      <Menu size="large">
        <Menu.Item header color="teal">Number Factory </Menu.Item>
      </Menu>
    )
  }
}