import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import logo from "../assets/img/phone.png"
export default class NavBar extends Component {
  state = { activeItem: 'gamepad' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon='labeled' pointing>
       <Menu.Item name='gamepad' active={activeItem === 'gamepad'} onClick={this.handleItemClick}>
          {/* <Icon name='phone' /> */}
          <img src={logo} alt="logo"/>
        </Menu.Item>

      <Menu.Menu position="right">
      <Menu.Item
          name='About'
          active={activeItem === 'info'}
          onClick={this.handleItemClick}
        >
          <Icon name='info' />
          About
        </Menu.Item>
      </Menu.Menu>
      
      </Menu>
    )
  }
}