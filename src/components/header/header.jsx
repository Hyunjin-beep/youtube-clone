import React, { PureComponent } from 'react'
import styles from './header.module.css'

class Header extends PureComponent {
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
    console.log('header')
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <img className={styles.img} src="/images/logo.png" alt="logo" />
          <span className={styles.title}>Youtube</span>
        </div>
        <input type="text" className={styles.input} ref={this.input} />
        <button
          className={styles.button}
          type="submit"
          onClick={this.handleSubmit}
        >
          <img
            className={styles.buttonImg}
            src="/images/search.png"
            alt="search"
          />
        </button>
      </header>
    )
  }
}

export default Header
