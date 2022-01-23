import React, { Component } from 'react'

class VideoItem extends Component {
  handleClick = () => {
    this.props.onShow(true)
  }

  handleItem = () => {
    this.props.onClickedItem(this.props.videoData)
  }

  handleClick = () => {
    // this.handleClick
    // this.handleItem
    this.props.onShow(true)
    this.props.onClickedItem(this.props.videoData)
  }

  render() {
    // if (this.props.videoData.title.length > 50) {
    //   this.props.videoData.title.substring(0, 49)
    // }

    return (
      <li className={this.props.onItemClassName} onClick={this.handleClick}>
        <img
          src={this.props.videoData.snippet.thumbnails.default.url}
          alt=""
          className="thumnail"
        />
        <div className="video_data">
          <span className="video_title">
            {this.props.videoData.snippet.title}
          </span>
          <span className="video_channel_title">
            {this.props.videoData.snippet.channelTitle}
          </span>
        </div>
      </li>
    )
  }
}

export default VideoItem
