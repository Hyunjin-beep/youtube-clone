import React, { Component } from 'react'

class VideoItem extends Component {
  render() {
    return (
      <li className="videoItem">
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
