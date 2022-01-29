import React, { Component } from 'react'
import VideoList from './components/video_list/videoList'
import styles from './app.module.css'
import Header from './components/header/header'
import VideoDetail from './components/video_detail/videoDetail'

class app extends Component {
  state = {
    videoData: [],
    clicked: false,
    clickedVideoDetail: [],
  }

  componentDidMount() {
    this.props.youtube
      .mostPopular()
      .then(video => this.setState({ videoData: video }))
  }

  handleSearch = searchQuery => {
    this.props.youtube.search(searchQuery).then(video => {
      this.setState({ videoData: video })
      this.setState({ clicked: false })
    })
  }

  handleShow = () => {
    const currentState = this.state.clicked
    this.setState({ clicked: !currentState })
  }

  handleItem = detail => {
    this.setState({ clickedVideoDetail: detail })
  }

  render() {
    return (
      <div className={styles.app}>
        <Header onSearch={this.handleSearch}></Header>
        <div className={this.state.clicked ? styles.video_container : null}>
          {this.state.clicked ? (
            <div className={styles.detail}>
              <VideoDetail
                clickedVideoData={this.state.clickedVideoDetail}
              ></VideoDetail>
            </div>
          ) : null}

          <div className={styles.list}>
            <VideoList
              onItemClassName={this.state.clicked ? 'list' : 'grid'}
              videoData={this.state.videoData}
              onShow={this.handleShow}
              onClickedItem={this.handleItem}
            ></VideoList>
          </div>
        </div>
      </div>
    )
  }
}

export default app
