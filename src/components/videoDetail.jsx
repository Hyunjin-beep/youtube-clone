import React, { Component } from 'react'

class VideoDetail extends Component {
  render() {
    const clickedID = this.props.clickedVideoData.id
    const videoId =
      typeof clickedID === 'object' ? clickedID['videoId'] : clickedID

    return (
      <div className="video_player">
        <iframe
          className="video"
          title="Youtube player"
          sandbox="allow-same-origin allow-forms  allow-scripts allow-presentation"
          src={`https://youtube.com/embed/${videoId}?autoplay=0`}
        ></iframe>
        <div className="video_detail">
          <span className="video_title_detail">
            {this.props.clickedVideoData.snippet.title}
          </span>
          <span className="video_creator_detail">
            {this.props.clickedVideoData.snippet.channelTitle}
          </span>
          <p className="video_description_detail">
            {this.props.clickedVideoData.snippet.description}
          </p>
        </div>
      </div>
    )
  }
}

export default VideoDetail
