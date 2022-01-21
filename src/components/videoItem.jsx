import React, { Component } from 'react'

class VideoItem extends Component {
  handleClick = () => {
    this.props.onShow(true)
  }

  render() {
    // if (this.props.videoData.title.length > 50) {
    //   this.props.videoData.title.substring(0, 49)
    // }
    return (
      <li className="videoItem" onClick={this.handleClick}>
        <img
          src={this.props.videoData.thumbnails.default.url}
          alt=""
          className="thumnail"
        />
        <div className="video_data">
          <span className="video_title">{this.props.videoData.title}</span>
          <span className="video_channel_title">
            {this.props.videoData.channelTitle}
          </span>
        </div>
      </li>
    )
  }
}

export default VideoItem
