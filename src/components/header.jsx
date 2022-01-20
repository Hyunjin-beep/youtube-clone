import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <i class="fab fa-youtube"></i>
          <span>Youtube</span>
        </div>

        <div className="search_input">
          <form action="#">
            <input type="text" />
            <button className="search_btn">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
      </header>
    )
  }
}

export default Header
