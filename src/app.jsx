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
    this.props.youtube
      .mostPopular()
      .then(video => this.setState({ videoData: video }))
  }

  handleSearch = searchQuery => {
    this.props.youtube
      .search(searchQuery)
      .then(video => this.setState({ videoData: video }))
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
