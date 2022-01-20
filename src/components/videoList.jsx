import React, { Component } from 'react'
import VideoItem from './videoItem'

class VideoList extends Component {
  render() {
    return (
      <ul className="videoItems">
        {this.props.videoData.map(videoDataItem => (
          <VideoItem
            key={videoDataItem.channelId}
            videoData={videoDataItem}
          ></VideoItem>
        ))}
      </ul>
    )
  }
}

export default VideoList
