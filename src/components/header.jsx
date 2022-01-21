import React, { Component } from 'react'

class Header extends Component {
  input = React.createRef()

  handleSubmit = event => {
    event.preventDefault()
    const searchQuery = this.input.current.value
    if (searchQuery !== '') {
      this.props.onSearch(searchQuery)
    }

    this.input.current.value = ''
  }
  render() {
    return (
      <header className="header">
        <div className="logo">
          <i className="fab fa-youtube"></i>
          <span>Youtube</span>
        </div>

        <div className="search">
          <form action="#" onSubmit={this.handleSubmit}>
            <input type="text" className="search_input" ref={this.input} />
            <button className="search_btn">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </header>
    )
  }
}

export default Header
