import React, { Component } from 'react'
import VideoList from './components/videoList'
import './app.css'
import Header from './components/header'
import VideoDetail from './components/videoDetail'

class app extends Component {
  state = {
    videoData: [],
    detailStaus: false,
    clicked: false,
    clickedVideoDetail: [],
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
    const currentState = this.state.clicked
    this.setState({ clicked: !currentState })
  }

  handleItem = detail => {
    this.setState({ clickedVideoDetail: detail })
  }

  render() {
    return (
      <>
        <Header onSearch={this.handleSearch}></Header>
        <div className={this.state.clicked ? 'video_container' : null}>
          {this.state.detailStaus ? (
            <VideoDetail
              clickedVideoData={this.state.clickedVideoDetail}
            ></VideoDetail>
          ) : null}

          <VideoList
            onListClassName={
              this.state.clicked ? 'side_videoItems' : 'videoItems'
            }
            onItemClassName={
              this.state.clicked ? 'side_videoItem' : 'videoItem'
            }
            videoData={this.state.videoData}
            onShow={this.handleShow}
            onClickedItem={this.handleItem}
          ></VideoList>
        </div>
      </>
    )
  }
}

export default app
