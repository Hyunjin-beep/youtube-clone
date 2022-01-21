import React, { Component } from 'react'
import VideoList from './components/videoList'
import './app.css'
import Header from './components/header'
import VideoDetail from './components/videoDetail'

class app extends Component {
  state = {
    videoData: [],
    detailStaus: false,
  }

  componentDidMount() {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=AIzaSyB9JPCrbfjfImK0EmNXO5vckiiJBGbh8cA`,
      { method: 'get' }
    )
      .then(response => {
        return response.json()
      })
      .then(json => this.setState({ videoData: json.items.map(item => item) }))
      .catch(error => console.log('error', error))
  }

  handleSearch = searchQuery => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=AIzaSyB9JPCrbfjfImK0EmNXO5vckiiJBGbh8cA&key=AIzaSyB9JPCrbfjfImK0EmNXO5vckiiJBGbh8cA`,
      { method: 'get' }
    )
      .then(response => {
        return response.json()
      })
      .then(json => this.setState({ videoData: json.items.map(item => item) }))
      .catch(error => console.log('error', error))
  }

  handleShow = status => {
    this.setState({ detailStaus: status })
  }
  render() {
    return (
      <>
        <Header onSearch={this.handleSearch}></Header>
        {this.state.detailStaus ? <VideoDetail></VideoDetail> : null}

        <VideoList
          videoData={this.state.videoData}
          onShow={this.handleShow}
        ></VideoList>
      </>
    )
  }
}

export default app
